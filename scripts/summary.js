document.addEventListener("DOMContentLoaded", function () {
    let userData = {
        "Name": "Đình Đạt",
        "Age": "không có",
        "Email": "dinhdat201fb@gmail.com",
        "Language Skills": "Sử dụng tiếng anh tốt: 9.0 reading / 8.5 listening",
        "Education": "Ngành cử nhân- công nghệ thông tin | 20xx - xxxx, Học viện công nghệ bưu chính viễn thông",
        "Skills": "Khả năng học tập và tiếp thu nhanh, Khả năng tập trung cao độ, Khả năng chịu áp lực tốt",
        "Certifications": "Mục tiêu nghề nghiệp",
        "Predicted personality": "Serious"
    }

    /*     let labels = [];
        let data = [];
        for (let i = 0; i <= 180; i += 2) {
            labels.push(i.toFixed(2) + 's');
            data.push(Math.sin(2 * Math.PI * i) + Math.random() * 0.75 - 0.25);
        }
    
        let audioData = {
            labels: labels,
            datasets: [{
                label: 'Audio Data',
                data: data,
                fill: false,
                borderColor: '#2f80f3',
                tension: 0.1
            }]
        };
    
        let ctx = document.getElementById('audioChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: audioData,
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Audio Analysis Data'
                    }
                }
            }
        });
        */
    const lineChartCanvas = document.getElementById('lineChart');
    const lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
            labels: ['Happy', 'Sad', 'Angry', 'Fearful', 'Surprised'],
            datasets: [{
                label: 'Emotion Data',
                data: [Math.random() * 40, Math.random() * 20, Math.random() * 1, Math.random() * 20, Math.random() * 20],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Emotion Analysis Data'
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    let pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    let pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: {
            labels: ['Extroversion', 'Neurotic', 'Agreeable', 'Conscientious', 'Open'],
            datasets: [{
                label: 'Personality Traits',
                data: [13, 53, 0, 11, 23],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Personality Traits'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            let value = context.parsed || 0;
                            let percent = Math.round((value / context.dataset.data.reduce((a, b) => a + b, 0)) * 100);
                            return label + ': ' + percent + '%';
                        }
                    }
                }
            }
        }
    });


    let spiderChartCanvas = document.getElementById('spiderChart').getContext('2d');
    let spiderChart = new Chart(spiderChartCanvas, {
        type: 'radar',
        data: {
            labels: ["Resume", "Coding", "Language", "Personality"],
            datasets: [{
                label: "Overall score",
                backgroundColor: 'rgba(54, 162, 235, 0.2)   ',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [7, 6, 5, 7],
            }]
        },
        options: {
            scale: {
                r: {
                    beginAtZero: true,
                    min: 0,
                    max: 10,
                    origin: 0,
                    stepSize: 1
                }
            },
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Spider Chart'
                }
            }
        }
    });


    function renderData(data) {
        let name = document.getElementById('name');
        let age = document.getElementById('age');
        let email = document.getElementById('email');
        let edu = document.getElementById('edu');
        let language = document.getElementById('language');
        let skills = document.getElementById('skills');
        let certi = document.getElementById('certi');

        name.value = data.Name;
        age.value = data.Age;
        email.value = data.Email;
        edu.value = data.Education;
        language.value = data['Language Skills'];
        skills.value = data.Skills.split(', ').join('\n');
        certi.value = data.Certifications;
    }

    renderData(userData);

    let recordModal = document.getElementById('recordModal');
    let textModal = document.getElementById('textModal');
    let record1Modal = document.getElementById('record1Modal');
    let record2Modal = document.getElementById('record2Modal');
    let record3Modal = document.getElementById('record3Modal');

    document.getElementById("viewRecord").addEventListener("click", function () {
        recordModal.style.display = "block";
    });

    document.getElementById("viewText").addEventListener("click", function () {
        textModal.style.display = "block";
    });

    document.getElementById("record1").addEventListener("click", function () {
        record1Modal.style.display = "block";
    });

    document.getElementById("record2").addEventListener("click", function () {
        record2Modal.style.display = "block";
    });

    document.getElementById("record3").addEventListener("click", function () {
        record3Modal.style.display = "block";
    });

    document.getElementById("viewCV").addEventListener("click", function () {
        let pdfFile = "/assets/cvs/CV_Đình_Đạt_Nguyễn_Đình_Đạt_D23DCCC032_TopCV_vn.pdf";
        window.open(pdfFile, '_blank');
    });

    document.getElementById("closeRecord").addEventListener("click", function () {
        recordModal.style.display = "none";
    });

    document.getElementById("closeText").addEventListener("click", function () {
        textModal.style.display = "none";
    });

    document.getElementById("closeRecord1").addEventListener("click", function () {
        record1Modal.style.display = "none";
    });

    document.getElementById("closeRecord2").addEventListener("click", function () {
        record2Modal.style.display = "none";
    });

    document.getElementById("closeRecord3").addEventListener("click", function () {
        record3Modal.style.display = "none";
    });
});
