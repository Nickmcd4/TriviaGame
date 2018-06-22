// Setting Global Variables
var time = 25;
var questions = {
    q1: "In our solar system, which planet has the shortest day?"
};
var correctAnswers;
var wrongAnswers;
var intervalID; 

//Functions

function startGame(){

}

function gamePlay (){
    $(".startButton").on('click', function(){
        console.log("Working");
        //Remove the start button upon clicking
        $(".startButton").remove();
        $(".btnContainer").css({"top": "50%", "font-size": "30px", "left": "49%"});
        timeCount();
    });
}

function timeCount(){
    time = 25;
    interval = setInterval(timer,1000);
}

function timer() {
    time--;
    $(".btnContainer").html("<div>" + "Time Remaining: " + time + "</div>");
    console.log(time);
    
        if(time===0){
            clearInterval(interval);
            timeCount();
        }
}

//Main
gamePlay();


