let scores = [];

const addBtn = document.getElementById("addBtn");
const scoreInput = document.getElementById("scoreInput");
const clearBtn = document.getElementById("clearBtn");
const scoreList = document.getElementById("scoreList");
const testCout = document.getElementById("testCout");
const average = document.getElementById("average");
const bestScore = document.getElementById("bestScore");
const lowestScore = document.getElementById("lowestScore");
const gradeDisplay = document.getElementById("gradeDisplay");
const starDisplay = document.getElementById("starDisplay");
const scoreDisplay = document.getElementById("score")

function addScore(){
    let scores = Number(scoreInput.value);

    if (scores < 0 || scores > 100){
        alert("Score must be between 0-100")
    }else{
        scores.push(parseInt(scoreInput.value));
        scoreInput.value = "";
    }
}

updateScoreList();

function updateResults(){

    if (scores.length== 0){
        scoreDisplay.textContent = "No scores yet..."
    } else {
        scores.forEach(function(score, index){
            scoreList.innerHTML = `
               <li> ${index + 1} : ${score}</li>
            `
        })
    }
    }
        
function clearrAllScore(){
    scores =[];
    updateScoreList();

    
}    




addBtn.addEventListener("click", addScore);
    clearBtn.addEventListener("click", clearAllScores);







