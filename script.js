let questions = [
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


    const startBox = document.getElementById("startBox")
    const startBttn = document.getElementById("startButton")
    const quizBox = document.getElementById("quizBox")
    let timerTag = document.getElementById('timer')
    const questionAsk = document.getElementById("questionAsk")
    const submitBttn = document.getElementById("submitBttn")
    const answerBox = document.querySelector(".answer-box")
    
    var questionIndex = 0
    let score = 0
    const totalQ = questions.length;
    
    
    
    startBttn.addEventListener('click', () => {
      startBox.setAttribute('style', 'display:none');
      quizBox.setAttribute('style', 'visibility:visible');
      submitBttn.setAttribute('style', 'visibility:hidden');
      setTime();
      quizStarts();
      
    });
    
    
    function quizStarts(){
      displayQuestion();
   

    questions[questionIndex].choices.forEach(choice => {
      const bttn = document.createElement("button");
       bttn.classList.add("bttnChoice")
      
       bttn.textContent = choice;
       
        answerBox.appendChild(bttn);
      

        bttn.addEventListener("click", checkQ)

    })
  };


  function checkQ(){
    if (this.textContent === questions[questionIndex].Ans) {
      score++
      console.log("correct");

    }   else {
      (countdown = -10);
      console.log(countdown);
     }if (questionIndex < totalQ - 1) {
      nextQuestion();
  } else if (questionIndex === totalQ - 1) { 
      // hide questions and ask user to enter name and display score in scoreboard.
      // askUserName();
  }

  };

  



  
function nextQuestion() {
  questionIndex++
  const newAnswer = document.querySelectorAll(".choices");


  displayQuestion();
  
  // replace content of previous question's choices with next question's choices
  newAnswer.forEach((bttn, i) => {
      bttn.textContent = questions[questionIndex].choices[i];
      console.log(newAnswer);
  })

}

function displayQuestion () {
  // questionCountOutput.textContent = currentIndex + 1;
  questionAsk.textContent = questions[questionIndex].question;
};

  






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


// cpu knows correct answer / subtract time 2

//  countDown -10 


// save to localstorage and restart button

    
    // time ends = score = putting initials