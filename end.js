console.log("Im linked");
const initial = document.getElementById("initial");
const saveScoreBtn1=document.getElementById("saveScoreBtn1");
const finalScore = document.getElementById("finalScore")
const mostRecentScore= localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(JSON.parse(localStorage.getItem("highScores")));
console.log(highScores);
finalScore.innerText = mostRecentScore;




initial.addEventListener("keyup", () =>{
    console.log(initial.value);
    saveScoreBtn1.disabled = !initial.value;
});


function saveHighScore(){
    console.log("clicked the save button!");
    const score ={
        score:mostRecentScore,
        name: initial.value
    };
    highScores.push(score);
    console.log("highScores");
}
