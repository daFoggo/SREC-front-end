
let data = {
    result: "Passed",
    score: 2,
    message1: "Congratulations!",
    message2: "You have passed the test!"
}

document.addEventListener('DOMContentLoaded', function () {
    let score = document.getElementById('score');
    score.innerHTML = `${data.score} / 3`;

    let resultMessage1 = document.getElementById('message1');
    resultMessage1.innerHTML = data.message1;

    let resultMessage2 = document.getElementById('message2');
    resultMessage2.innerHTML = data.message2;

    if (data.result === "Passed") {
        let buttonContainer = document.getElementById('buttonContainer');
        let button = document.createElement('button');
        button.innerHTML = "Continue the recruitment process";
        buttonContainer.appendChild(button);
    }
    ;

    let ctx = document.getElementById('pieChart').getContext('2d');
    let chartData = {
        labels: ['Passed', 'Failed'],
        datasets: [{
            data: [data.score, 3 - data.score],
            backgroundColor: ['#36A2EB', '#FF6384']
        }]
    };

    let donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
