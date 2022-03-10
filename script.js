let startButton = document.querySelector(".startButton");
let startBox = document.querySelector(".startBox");
const questionBox = document.querySelector(".box");
const marqueeTag = document.querySelector(".gone");
const headerTag = document.querySelector(".header");
let timerTag = document.querySelector(".timer");

let questionSelector



startButton.addEventListener("click", function(event){
    // event.preventDefault();
    startBox.setAttribute("style", "visibility:hidden")
    marqueeTag.setAttribute("style", "visibility:hidden")
    questionBox.setAttribute("style", "visibility:visible")
    setTime();
});

function setTime(){
    let countdown = 60;
    let timeInterval = setInterval(function () {
        countdown--;
        timerTag.textContent = countdown;
        if (countdown === 0){
          clearInterval(timeInterval);
    
          displayMessage();
        }
      },1000);
    }
s