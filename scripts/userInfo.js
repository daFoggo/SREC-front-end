let data = {
    "Name": "Đình Đạt",
    "Age": "không có",
    "Email": "dinhdat201fb@gmail.com",
    "Language Skills": "Sử dụng tiếng anh tốt: 9.0 reading / 8.5 listening",
    "Education": "Ngành cử nhân- công nghệ thông tin | 20xx - xxxx, Học viện công nghệ bưu chính viễn thông",
    "Skills": "Khả năng học tập và tiếp thu nhanh, Khả năng tập trung cao độ, Khả năng chịu áp lực tốt",
    "Certifications": "Mục tiêu nghề nghiệp",
    "Predicted personality": "Serious"
}

document.addEventListener('DOMContentLoaded', function () {
    let returnButton = document.getElementById('return-btn');
    let submitButton = document.getElementById('submit-btn');
    
    function renderData(data) {
        let name = document.getElementById('name');
        let age = document.getElementById('age');
        let email = document.getElementById('email');
        let edu = document.getElementById('edu');
        let person = document.getElementById('person');
        let language = document.getElementById('language');
        let skills = document.getElementById('skills');
        let certi = document.getElementById('certi');

        name.value = data.Name;
        age.value = data.Age;
        email.value = data.Email;
        edu.value = data.Education;
        person.value = data['Predicted personality'];
        language.value = data['Language Skills'];
        skills.value = data.Skills.split(', ').join('\n');
        certi.value = data.Certifications;
    }

    renderData(data);
});