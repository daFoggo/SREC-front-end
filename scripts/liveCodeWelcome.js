document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("cvForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    let nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', () => {
        window.location.href = '../templates/problem.html';
    });
});``