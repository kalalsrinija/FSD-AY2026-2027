const quiz = [
{
    question: "Which language is used for web page interactivity?",
    options: ["HTML","CSS","JavaScript","Python"],
    answer: "JavaScript"
},
{
    question: "Which tag is used to write JavaScript?",
    options: ["style","script","html","css"],
    answer: "script"
}
];

let index = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");

function loadQuestion(){

    question.innerHTML = quiz[index].question;

    options.innerHTML = "";

    quiz[index].options.forEach(function(opt){

        options.innerHTML += `
        <label>
            <input type="radio" name="ans" value="${opt}">
            ${opt}
        </label><br>
        `;

    });

}

function nextQuestion(){

    const selected = document.querySelector('input[name="ans"]:checked');

    if(selected){
        if(selected.value === quiz[index].answer){
            score++;
        }
    }
