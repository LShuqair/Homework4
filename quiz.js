console.log("Im linked!")
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choice = document.getElementById("choice");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
// const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const score= document.getElementById("score");



let questions =[
    {
        question: " What is the DOM?" ,
        choiceA : "Document Object Model",
        choiceB : "Document Operating Model",
        choiceC : "Document Organizer Model",
        correct :"A"  
    },{
        question: " How do you display an alert?",
        choiceA : "prompt(Text Here)",
        choiceB : "Alert(Text Here)",
        choiceC : "alert(Text Here)",
        correct :"C"  
    },{
        question: " How do statements end in JavaScript? ",
        choiceA :  ".",
        choiceB : ";",
        choiceC : ":",   
        correct :"B"  
    },{
        question: " What is the command to display a prompt? ",
        choiceA : "prompt(Text Here)",
        choiceB : "Prompt (Text Here)",
        choiceC : "confirm (Text Here)",
        correct : "A"  
    },{
        question: "How do you create a function? ",
        choiceA : "function:myFunction()",
        choiceB : "function=myFunction()",
        choiceC : "function myFunction()",
        correct :"C" 
    } 
    
]

let lastQuestion = questions.length -1;
let runningQuestionIndex=0;
let runnigQuestion=0;
let count=0; 
const questionTime = 20; 
const gaugWidth =150 
const gaugUnit = gaugWidth/ questionTime;
let TIMER;







function renderQuestion(){
    let q = questions[runningQuestionIndex];
    const choiceA= document.getElementById("A");
    const  choiceB= document.getElementById("B");
    const choiceC= document.getElementById("C");

    question.innerHTML ="<p>" +  q.question + "</p>";
    choiceA.innerHTML = "<p>" +  q.choiceA+ "</p>";
    choiceB.innerHTML = "<p> "+  q.choiceB + "</p>";
    choiceC.innerHTML = "<p>" +  q.choiceC + "</p>";

}



   
function checkAnswer(answer){
    let q = questions[runningQuestionIndex];
    const choiceA= document.getElementById('A');
    const choiceB= document.getElementById('B');
    const choiceC= document.getElementById('C');
    
    let score=0;
   
    switch (score){


        case 'A':

    if(q.choiceA === "Correct") {
        choiceA.style.answerIsCorrect = "green";
    } else {
        (q.choiceA=== "Wrong")
        choiceA.style.backgroundColor.answerIsWrong = "red";
        
    }
    case 'B':
    if (q.choiceB === "Correct") {
        choiceB.style.backgroundColor = "green";
    } else {
        (q.choiceB=== "Wrong")
        choiceB.style.backgroundColor = "red";
    } 
    case 'C':
    if (q.choiceC ==="Correct") {
        choiceC.style.backgroundColor = "green";
    } else {
        (q.choiceC=== "Wrong")
        choiceC.style.backgroundColor = "red";
    }                  
        }
    // if (question[runningQuestionIndex].correct==answer){
    //     score++;
    //     answerIsCorrect();
    // }esle
    // {
    //     answerIsWrong();
    // }
    // if (runningQuestionIndex<lastQuestionIndex){
    //     count =0;
    //     runningQuestionIndex++;
    //     questionRender();

    // }esle
    // {
    //     clearInterval(TIMER);
    //     scoreRender();
    // } 



    if( answer == questions[runningQuestionIndex].correct){
        //answer is correct
        score++;
        // change

        answerIsCorrect() 
          
    } else{
        //answer is wrong
        answerIsWrong()
        if(runningQuestionIndex < lastQuestion){
            runningQuestionIndex++;
            renderQuestion();
        }       
    }
    count=0;
    if(runningQuestionIndex < lastQuestion){
        runningQuestionIndex++;
        renderQuestion();
    }       
    
    function answerIsCorrect(){
        document.getElementById(runningQuestionIndex).style.backgroundcolor= "green";

    }
    function answerIsWrong(){
        document.getElementById(runningQuestionIndex).style.backgroundcolor= "green";
 
   }  
}


  
function renderProgress(){
    for (let qIndex = 0; qIndex <= lastQuestion;
        qIndex++){
            progress.innerHTML += "<div class='prog' id="+qIndex +"></div>";
        }
      //end of quiz
}



function renderCounter(){
    
    if (count<= questionTime){
        counter.innerHTML =count;
        // timeGauge.style.width = count * gaugUnit + "px";
        count++;
        

    }else{
        count = 0;
        //end of quiz(
        // answerIsWrong();
        // if (runningQuestionIndex<lastQuestionIndex){
        //    runningQuestionIndex++;
        //    questionRender();
        // }else{
        //      clearInterval(TIMER);
        //  }

    }
}



start.addEventListener("click", startQuiz);
function startQuiz(){
    start.style.display="none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
   renderCounter();
   renderScore();
   TIMER =setInterval(renderCounter, 1000);
//    let score = 0;
   score.style.display="none";
   renderCounter()
   renderScore();
   addInitalToList();
}



// submit.addEventListener("click", submit);
// function submit(){
//     quiz.style.display="none";
//     renderProgress();
//    renderCounter();
//    TIMER =setInterval(renderCounter, 1000);
// //    renderScore();
   
//    score.style.display="none"
// }   addInitalToList();
//     renderScore();
// const highScore = document.getElementById("high-score");
// const description = document.getElementById("description");
// const initialEl = document.getElementById("initial-btn");
// const save = document.getElementById("save");

function renderScore(){
    score.style.display="block"
    
// var highScore=0;   
// let scorePerCent =Math.raound(100* score/questions.length);
// let cheer= (scorePerCent>=100)? "Good Job!":
//            (scorePerCent>=80)? "Good!":
//             (scorePerCent>=60)? "Bad!": "RetakeQuiz";
//  score.innerHTML="<cheer=" + "cheer" +" ><p>" + scorePerCent + "%</p>";       
 

            

}






var addBtn = document.querySelector("#add-btn");
var initialListEl = document.querySelector("#initial-list");
var initalEl = document.querySelector("#inital");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
// var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var last = [{ initial: "" }];
var currentId = 0;

function addInitalToList(event) {
 event.preventDefault();
  var inital = initalEl.value;
  var li = document.createElement("li");
  li.id = last.length;
  li.innerHTML = inital;
  last.push({ initial: inital });
  initialListEl.append(li);
}

addBtn.addEventListener("click", addInitalToList);

document.addEventListener("click", function(event) {
  if (event.target === modalEl) {
    close();
  }
});