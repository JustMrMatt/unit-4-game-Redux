
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
    $("firstCrystal").attr("value", crystalOneVal);
    console.log(crystalOneVal);        
    crystalTwoVal = Math.floor(Math.random() * (12 - 1 + 2) + 1);   
    $("secondCrystal").attr("value", crystalTwoVal);     
    console.log(crystalTwoVal);   
    crystalThreeVal = Math.floor(Math.random() * (12 - 1 + 3) + 1);  
    $("thirdCrystal").attr("value", crystalThreeVal);   
    console.log(crystalThreeVal);      
    crystalFourVal = Math.floor(Math.random() * (12 - 1 + 4) + 1);   
    $("fourthCrystal").attr("value", crystalFourVal);      
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
    var cVal = ($(this).attr("value"));
    cVal = parseInt(cVal);
    console.log(cVal); // Keeps coming back as NAN and I do not know why. This is supposed to get the value of each crystal
    Score = Score + cVal;
    $("#playerScore").html(Score);
    console.log(Score); // This results in NAN cVal is NAN. 
    roundOver();
})

$(document).ready(gameStart());
roundOver();

