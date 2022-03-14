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
  
  
  const startBox = document.getElementById("startBox")
  const startBttn = document.getElementById("startButton")
  const quizBox = document.getElementById("quizBox")
  const timerTag = document.querySelector('.timer')
  const questionAsk = document.getElementById("questionAsk")
  const submitBttn = document.getElementById("submitBttn")
  const answerBox = document.querySelector(".answer-box")
  const scoreTag = document.querySelector(".score")
  const endGame = document.querySelector(".endGame")
  const scoreBoard = document.querySelector("scoreBoard")
  // Global Variables
  var questionIndex = 0;
  let score = 0;
  const totalQ = questions.length;
  let countdown = 60
  
  
  // This starts the quiz and timer
  startBttn.addEventListener('click', () => {
    startBox.setAttribute('style', 'display:none');
    quizBox.setAttribute('style', 'visibility:visible');
    submitBttn.setAttribute('style', 'visibility:hidden');
    setTime();
    quizStarts();
  });
  
  // Shows first question and makes a button for each choice
  function quizStarts(){
    
    resetQ()
    questionAsk.textContent = questions[questionIndex].question;
    
    questions[questionIndex].choices.forEach(choice => {
      const bttn = document.createElement("button");
      bttn.classList.add("bttns")
      
      bttn.textContent = choice;
      answerBox.appendChild(bttn);
      
      bttn.addEventListener("click", checkQ)
      
    })
  };
  
  
  // Checks if you question is correct and responds accordenly depending if its right or wrong
  // Checks to see how many questions are there left
  function checkQ(){
    if (this.textContent === questions[questionIndex].Ans) {
      score++;
      scoreTag.textContent= score;
    } else {
      (countdown -= 30);
      
    } if (questionIndex < totalQ - 1) {
          nextQuestion();
        }   
        else if (questionIndex === totalQ -1) { 
          gameOver() }
        };
        
        // Removes buttons from HTML
        function resetQ(){
          while(answerBox.firstChild){
            answerBox.removeChild(answerBox.firstChild);
          }
        };
        
        // Gives new question and puts new answers on the buttons that were removed 
        function nextQuestion() {
          questionIndex++
          const newAnswer = document.querySelectorAll(".bttns");
          
          
          questionAsk.textContent = questions[questionIndex].question;
          newAnswer.forEach((bttn, i) => {
            bttn.textContent = questions[questionIndex].choices[i];
          }) 
        };
        
        // Timer for the Quiz
        function setTime()  {
          let timer = setInterval(function(){
            countdown--;
            timerTag.textContent = countdown
            
            if (countdown <= 0 ) {
              clearInterval(timer)
              gameOver();
            }
            
          }, 1000)
          
        }
        
        
        // Prompt that lets user put initials and save score
        function gameOver(){
          let initials = document.getElementById("initials")
          // let userInit = initials.value
          var init = localStorage.getItem("init");
          
          initials.textContent = init;
          
          localStorage.setItem("init", init)
          // let finalScore = score.value
          // scoreBoard.textContent = score;
          timerTag.setAttribute("style", "visibility:hidden")
          endGame.setAttribute("style", "visibility:visible")
          scoreTag.setAttribute("style", "visibility:hidden")
          quizBox.setAttribute("style", "visibility:hidden");
          submitBttn.setAttribute("style", "visibility:visible")
          
          
        }
        
        
        
        
        // save to localstorage and restart button

        
        // time ends = score = putting initials