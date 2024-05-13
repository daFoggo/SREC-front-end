document.addEventListener("DOMContentLoaded", async function () {
    let candidateData = await fetch("../candidateData/ranked_candidates.json")
        .then(response => response.json());
        
    let container = document.getElementById("candidateList");
    
    let indexCount = 1;
    for (let candidateId in candidateData) {
        
        if (candidateData.hasOwnProperty(candidateId)) {
            let candidate = candidateData[candidateId];
            
            let listItem = document.createElement("div");
            listItem.classList.add("listItem");

            let itemInfo = document.createElement("div");
            itemInfo.classList.add("itemInfo");

            let itemInfoText = document.createElement("div");
            itemInfoText.classList.add("itemInfoText");

            let candidateName = document.createElement("h1");
            candidateName.textContent = candidate.candidate_name;

            let roundEvaluation = document.createElement("p");
            roundEvaluation.textContent = "Round 2 evaluation";

            let moreInfo = document.createElement("p");
            moreInfo.textContent = "View detailed information";
            moreInfo.classList.add("moreInfo");

            itemInfoText.appendChild(candidateName);
            itemInfoText.appendChild(roundEvaluation);
            itemInfoText.appendChild(moreInfo);

            itemInfo.appendChild(itemInfoText);

            let itemInfoButton = document.createElement("div");
            itemInfoButton.classList.add("itemInfoButton");

            let sendMailIcon = document.createElement("div");
            sendMailIcon.classList.add("sendMailIcon");

            let sendMailSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            sendMailSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            sendMailSVG.setAttribute("width", "24");
            sendMailSVG.setAttribute("height", "24");
            sendMailSVG.setAttribute("fill", "#2f80f3");
            sendMailSVG.setAttribute("class", "bi bi-envelope-check");
            sendMailSVG.setAttribute("viewBox", "0 0 16 16");

            let path11 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path11.setAttribute("d", "M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z");
            let path12 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path12.setAttribute("d", "M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686");

            sendMailSVG.appendChild(path11);
            sendMailSVG.appendChild(path12);

            sendMailIcon.appendChild(sendMailSVG);

            let rejectIcon = document.createElement("div");
            rejectIcon.classList.add("rejectIcon");

            let rejectSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            rejectSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            rejectSVG.setAttribute("width", "24");
            rejectSVG.setAttribute("height", "24");
            rejectSVG.setAttribute("fill", "#2f80f3");
            rejectSVG.setAttribute("class", "bi bi-envelope-x");
            rejectSVG.setAttribute("viewBox", "0 0 16 16");

            let path21 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path21.setAttribute("d", "M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z");
            let path22 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path22.setAttribute("d", "M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0")
            
            rejectSVG.appendChild(path21);
            rejectSVG.appendChild(path22);

            rejectIcon.appendChild(rejectSVG);

            itemInfoButton.appendChild(sendMailIcon);
            itemInfoButton.appendChild(rejectIcon);

            itemInfo.appendChild(itemInfoButton);

            listItem.appendChild(itemInfo);

            let itemMatchingResult = document.createElement("div");
            itemMatchingResult.classList.add("itemMatchingResult");
            itemMatchingResult.setAttribute("id", "candidate_matching_skills");
            itemMatchingResult.textContent = `${(candidate.candidate_matching_skills * 1.9).toFixed(2)}%`;
            
            if (indexCount <= (Object.keys(candidateData).length * 0.75)) {
                itemMatchingResult.style.color = "#2f80f3"; 
            } else {
                itemMatchingResult.style.color = "#ff0000";
            }
            listItem.appendChild(itemMatchingResult);
            container.appendChild(listItem);
            
            indexCount++;
        }

    }
});
