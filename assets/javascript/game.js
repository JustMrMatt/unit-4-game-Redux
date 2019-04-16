
var wins = 0;
var losses = 0;
var Score = 0; 



function gameStart() {                                            
    Score = 0;
    $("#playerScore").html(Score);
    var goalScore;
    goalScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);     
    $("#goalScore").html(goalScore);

    var crystalOneVal;
    var crystalTwoVal;
    var crystalThreeVal;
    var crystalFourVal;

    crystalOneVal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    $("#firstCrystal").attr("data-value", crystalOneVal);
    console.log(crystalOneVal);        
    crystalTwoVal = Math.floor(Math.random() * (12 - 1 + 2) + 1);   
    $("#secondCrystal").attr("data-value", crystalTwoVal);     
    console.log(crystalTwoVal);   
    crystalThreeVal = Math.floor(Math.random() * (12 - 1 + 3) + 1);  
    $("#thirdCrystal").attr("data-value", crystalThreeVal);   
    console.log(crystalThreeVal);      
    crystalFourVal = Math.floor(Math.random() * (12 - 1 + 4) + 1);   
    $("#fourthCrystal").attr("data-value", crystalFourVal);      
    console.log(crystalFourVal);  
}


function roundOver() {                 
    if (Score === goalScore) {
        alert("Congrats! You won the Game!");
        wins = wins++;
        $("#wins").html(wins);
        gameStart();
    }
    else if (Score > goalScore) {
        alert("Sorry, Please Try Again");
        losses = losses++;
        $("#losses").html(losses);
        gameStart();
    }
}

$(".crystal-btn").on("click", function(){         
    var cVal = ($(this).attr("data-value"));
    console.log(cVal);
    cVal = parseInt(cVal);
    console.log(cVal); 
    Score = Score + cVal;
    $("#playerScore").html(Score);
    console.log(Score); 
    roundOver();
})

$(document).ready(gameStart());
roundOver();

