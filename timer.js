const quiz = [
{
    question: "Which language is used for web page interactivity?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "JavaScript"
},
{
    question: "Which tag is used to write JavaScript?",
    options: ["style", "script", "html", "css"],
    answer: "script"
}
];

let index = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const timer = document.getElementById("timer");

let timeLeft = 30;
let interval;

// Load Question
function loadQuestion() {

    clearInterval(interval);

    timeLeft = 30;
    timer.innerHTML = "Time: " + timeLeft;

    question.innerHTML = quiz[index].question;
    options.innerHTML = "";

    quiz[index].options.forEach(function(opt) {

        options.innerHTML += `
            <label>
                <input type="radio" name="ans" value="${opt}">
                ${opt}
            </label><br><br>
        `;

    });

    startTimer();
}

// Timer Function
function startTimer() {

    interval = setInterval(function() {

        timeLeft--;
        timer.innerHTML = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(interval);
            nextQuestion();
        }

    }, 1000);

}

// Next Question
function nextQuestion() {

    clearInterval(interval);

    const selected = document.querySelector('input[name="ans"]:checked');

    if (selected) {
        if (selected.value === quiz[index].answer) {
            score++;
        }
    }

    index++;

    if (index < quiz.length) {

        loadQuestion();

    } else {

        question.innerHTML = "";
        options.innerHTML = "";
        timer.innerHTML = "Quiz Finished!";
        result.innerHTML = "Your Score: " + score + " / " + quiz.length;

    }

}

loadQuestion();
