const startBox = document.getElementById("startBox")
const startBttn = document.getElementById("startButton")
const quizBox = document.getElementById("quizBox")
let timerTag = document.getElementById('timer')
const questionAsk = document.getElementById("questionAsk")
const buttonClk = document.querySelectorAll(".choice")
const submitBttn = document.getElementById("submitBttn")

const answerA = document.getElementById("answerA")
const answerB = document.getElementById("answerB")
const answerC = document.getElementById("answerC")
const answerD = document.getElementById("answerD")

const questions = [
    {
     question: "Why is JavaScript and Java have similar name?",
choices: ["JavaScript is a stripped-down version of Java",
    "JavaScript's syntax is loosely based on Java's",
    "They both originated on the island of Java",
    "None of the above"],
  Ans: "JavaScript's syntax is loosely based on Java's",
  
    },
    {
      question: " What are variables used for in JavaScript Programs?",
  choices:["Storing numbers, dates, or other values",
   "Varying randomly",
   "Causing high-school algebra flashbacks",
   "None of the above"],
  Ans: "Storing numbers, dates, or other values",
    },
    {
      question: "Which of the following are capabilities of functions in JavaScript?",
    choices:["Return a value",
    "Accept parameters and Return a value",
    " Accept parameters",
    "None of the above"],
  Ans: "Accept parameters"
    }];

    // const subset = (({ choices}) => ({ choices }))(questions);
    // console.log(subset);

function quizBegins(){
  questionAsk.innerText = questions[0].question;
  answerA.textContent = questions[0].choices[0];
  answerB.textContent = questions[0].choices[1];
  answerC.textContent = questions[0].choices[2];
  answerD.textContent = questions[0].choices[3];

}


buttonClk.forEach(element => {
  element.addEventListener('click', ()=> {
    console.log("whahha")

  })
});

// swtich next questions/answers

// cpu knows correct answer / subtract time

//  countDown -10

// time ends = score = putting initials

// save to localstorage and restart button




startBttn.addEventListener('click', () => {
    startBox.setAttribute('style', 'display:none');
    quizBox.setAttribute('style', 'visibility:visible');
    submitBttn.setAttribute('style', 'visibility:hidden');
    setTime();
    quizBegins();
});


function setTime()  {
    let countdown = 60;
    let timeInterval = setInterval(function () {
        countdown--;
        timerTag.textContent = countdown;
        if (countdown === 0){
          clearInterval(timeInterval);

        }
      },1000);
    }


