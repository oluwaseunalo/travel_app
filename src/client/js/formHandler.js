const model = document.getElementById('result__model');
const scoreTag = document.getElementById('result__score');
const agreement = document.getElementById('result__agreement');
const subject =   document.getElementById('result__subjectivity');
const confidence = document.getElementById('result__confidence');
const irony = document.getElementById('result__irony');


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formInput = document.getElementById('name').value;
    const data = {formInput};
    console.log("::: Form Submitted :::")
    
    if (Client.checkForName(formInput)) {
        fetch('http://localhost:8081/input', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                model.innerHTML = 'Model: ' + res.model;
                scoreTag.innerHTML = 'Score: ' + res.score_tag;
                agreement.innerHTML = 'Agreement: ' + res.agreement;
                subject.innerHTML = 'Subjectivity: ' + res.subjectivity;
                confidence.innerHTML = 'Confidence: ' + res.confidence;
                irony.innerHTML = 'Irony: ' + res.irony;
            })
    } else {
        alert ('Please type in a valid website')
    };
}

export { handleSubmit }
    


