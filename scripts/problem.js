document.addEventListener('DOMContentLoaded', async function () {
    let problem = await fetch('../problemsData/problemC.json')
        .then(response => response.json());

    let title = document.getElementById('title');
    title.innerText = problem.title;

    let countDown = document.getElementById('countDown');
    let countdownDate = new Date().getTime() + (30 * 60 * 1000); // 30 minutes in milliseconds

    let countdownInterval = setInterval(function() {
        let now = new Date().getTime();

        let distance = countdownDate - now;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countDown.innerText = "Remaining time: " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownInterval);
            countDown.innerText = "EXPIRED";
        }
    }, 1000);
    

    let statement = document.getElementById('statement');
    statement.innerText = problem.problem;

    let constraints = document.getElementById('constraints');
    problem.constraints.forEach(constraint => {
        let li = document.createElement('li');
        li.innerText = constraint;
        li.style.margin = '10px 10px 10px 20px';
        constraints.appendChild(li);
    });

    let inputDesc = document.getElementById('inputDesc');
    inputDesc.innerText = problem.input.description;
    
    let inputFormat = document.getElementById('inputFormat');
    inputFormat.value = problem.input.format;

    let outputDesc = document.getElementById('outputDesc');
    outputDesc.innerText = problem.output.description;

    let outputFormat = document.getElementById('outputFormat');
    outputFormat.value = problem.output.format;

    let sampleInput = document.getElementById('sampleInput');
    sampleInput.innerText = problem.sampleInput;

    let sampleOutput = document.getElementById('sampleOutput');
    sampleOutput.innerText = problem.sampleOutput;

    let nextBtn = document.getElementById('nextBtn');
    nextBtn.addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5500/index.html';
    });
});
