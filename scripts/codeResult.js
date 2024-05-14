result = {
    trueCase: 5,
    falseCase: 0,
}
document.addEventListener('DOMContentLoaded', function () {
    let score = document.getElementById('score');
    score.innerHTML = `${result.trueCase} / ${result.trueCase + result.falseCase}`;

    let resultMessage1 = document.getElementById('message1');
    resultMessage1.innerHTML = "Well done!";

    let resultMessage2 = document.getElementById('message2');
    resultMessage2.innerHTML = "You have passed the test.You can continue the recruitment process.";

    let buttonContainer = document.getElementById('buttonContainer');
    let button = document.createElement('button');
    button.innerHTML = "Continue the recruitment process";
    buttonContainer.appendChild(button);

    let ctx = document.getElementById('pieChart').getContext('2d');
    let chartData = {
        labels: ['Passed', 'Failed'],
        datasets: [{
            data: [result.trueCase, result.falseCase],
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
