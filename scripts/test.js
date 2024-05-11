const questionList = {
    EXT: [
        {
            "id": "EXT1",
            "question": "Do you find yourself being the life of the party?"
        },
        {
            "id": "EXT2",
            "question": "Would you say that you don’t talk a lot?"
        },
        {
            "id": "EXT3",
            "question": "Do you feel comfortable around people?"
        },
        {
            "id": "EXT4",
            "question": "Do you prefer to keep in the background?"
        }
    ],
    EST: [
        {
            "id": "EST1",
            "question": "Do you get stressed out easily?"
        },
        {
            "id": "EST2",
            "question": "Would you say that you are relaxed most of the time?"
        },
        {
            "id": "EST3",
            "question": "Do you tend to worry about things?"
        },
        {
            "id": "EST4",
            "question": "Do you seldom feel blue?"
        }
    ],
    AGR: [
        {
            "id": "AGR1",
            "question": "Do you feel little concern for others?"
        },
        {
            "id": "AGR2",
            "question": "Are you interested in people?"
        },
        {
            "id": "AGR3",
            "question": "Do you insult people?"
        },
        {
            "id": "AGR4",
            "question": "Do you sympathize with others’ feelings?"
        }
    ],
    CSN: [
        {
            "id": "CSN1",
            "question": "Are you always prepared?"
        },
        {
            "id": "CSN2",
            "question": "Do you leave your belongings around?"
        },
        {
            "id": "CSN3",
            "question": "Do you pay attention to details?"
        },
        {
            "id": "CSN4",
            "question": "Do you make a mess of things?"
        }
    ],
    OPN: [
        {
            "id": "OPN1",
            "question": "Do you have a rich vocabulary?"
        },
        {
            "id": "OPN2",
            "question": "Do you have difficulty understanding abstract ideas?"
        },
        {
            "id": "OPN3",
            "question": "Do you have a vivid imagination?"
        },
        {
            "id": "OPN4",
            "question": "Are you not interested in abstract ideas?"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    let questionContainer = document.getElementById("questions-list");

    Object.keys(questionList).forEach(questionType => {
        questionList[questionType].forEach((question, index) => {
            let questionDiv = document.createElement("div");
            questionDiv.className = "question";
            questionDiv.innerHTML = `
                <div>
                    <span> ${question.id}. </span>
                    ${question.question}
                </div>
                <select name="${question.id}" id="${question.id}">
                    <option value="1">1: Strongly Disagree</option>
                    <option value="2">2: Disagree</option>
                    <option value="3">3: Neutral</option>
                    <option value="4">4: Agree</option>
                    <option value="5">5: Strongly Agree</option>
                </select>
            `;
            questionContainer.appendChild(questionDiv);
        })
    });
});

