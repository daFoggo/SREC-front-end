document.addEventListener('DOMContentLoaded', function () {
    let audio1 = new Audio("/assets/sounds/test.mp3");
    introJs().setOptions({
        steps: [{
            intro: 'Welcome to the personality prediction section! <img src="/assets/imgs/8943377.png" width="150px" height="150px" />',
        },
        {
            element: document.querySelector('.questions-list'),
            intro: 'To predict personality, you will answer the following questions!',
        },
        {
            element: document.querySelector('select'),
            intro: 'Please choose a score corresponding to each given level <img src="/assets/imgs/8943377.png" width="150px" height="150px"/>',
        }]
    }).start();
});
