// console.log("I'm linked");
const question=document.getElementById("question");
const choices= Array.from(document.getElementsByClassName("choice-text"));
const timel =document.getElementById("time");
const questionCounterText= document.getElementById("questionCounter");
const scoreText=document.getElementById("score");
// console.log(choices);

let currentQuestion= {};
let acceptingAnswers =true;
let score=0;
let questionCounter=0;
let availableQuestions=[];

let questions =[
    {
        question: " What is the DOM?" ,
        choice1 : "Document Object Model",
        choice2 : "Document Operating Model",
        choice3 : "Document Organizer Model",
        answer :"1"  
    },{
        question: " How do you display an alert?",
        choice1 : "prompt(Text Here)",
        choice2 : "Alert(Text Here)",
        choice3 : "alert(Text Here)",
        answer:"3"  
    },{
        question: " How do statements end in JavaScript? ",
        choice1 :  ".",
        choice2 : ";",
        choice3 : ":",   
        answer :"2"  
    },{
        question: " What is the command to display a prompt? ",
        choice1 : "prompt(Text Here)",
        choice2 : "Prompt (Text Here)",
        choice3 : "confirm (Text Here)",
        answer : "1"  
    },{
        question: " How do you create a function? ",
        choice1 : "function:myFunction()",
        choice2 : "function=myFunction()",
        choice3 : "function myFunction()",
        answer :"3" 
    } 
    
]
const CORRECT_BONUS =10;
const MAX_QUESTIONS =5;

function startGame(){
    var i = 0;
  
    var timeLeft = 20;
  
    var timeInterval = setInterval(function() {
      timel.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timel.textContent = "";
      //   speedRead();
        clearInterval(timeInterval);
       
      }
  
    }, 1000);
    questionCounter=0;
    score=0;
    availableQuestions=[...questions];
    // console.log(availableQuestions);
    getNewQuestions();
};
function getNewQuestions(){
    if(availableQuestions.length==0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
     return window.location.assign("end.html");
     }

    questionCounter++;
    questionCounterText.innerText = questionCounter +  "/" + MAX_QUESTIONS;

    const questionIndex= Math.floor(Math.random()* availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
   
    choices.forEach(choice => {
         const number=choice.dataset["number"];
         choice.innerText = currentQuestion["choice" + number];
         
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers=true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return;
        
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

       

        const classToApply = 
        selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";
        
        if (classToApply === "correct"){
            incrementScore(CORRECT_BONUS);
        }
        console.log(selectedAnswer);
        console.log("classToApply");
        


            selectedChoice.parentElement.classList.add("classToApply");
           
        getNewQuestions();
    });
});   

function incrementScore(num){
   score += num;
   scoreText.innerText = score;
};
startGame();

