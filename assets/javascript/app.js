// Setting Global Variables
var time = 15;
var questions = {
    question1: ["In our solar system, which planet has the shortest day?"],
    question2: ["Which is the closest star to our sun?"],
};
var answers ={
    answers1:[{1:"Earth",
               2:"Jupiter",
               3:"Saturn",
               4:"Mars"
    }],
    answers2:[{1:"Canopus",
               2:"Thursuys",
               3:"Sirius",
               4:"Alpha Centauri"
    }]
};
var questionsAsked = 0;
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
        $(".startButton").hide();
       // $(".btnContainer").css({"top": "50%", "font-size": "30px", "left": "35%"});
        timeCount();
        firstQuestion();
        answerCheck();
    });
}

function timeCount(){ //absolute state of timer
    time = 15;
    interval = setInterval(timer,1000);
    $(".btnContainer").append("<div class='remainingTime'>" + "Time Remaining: " + "<span class='timer'" + "</span>" + "</div>");
}

//Add time remaining to created timer div and stop timer/reset once it reaches 0
function timer() {
    time--; //timer decreases by 1sec (see above)
    
    $(".timer").text(time);
    //when time = 0, reset the timer 
        if(time===0){
            clearInterval(interval);
            $('button').remove();
            $('.hmm').remove();
            displayAnswer();
        }
    

    
}
function displayAnswer (){
    if (questionsAsked === 1) {

        var showAnswer = $("<div class='theAnswer'>");
        correctAnswer = showAnswer.text("You've run out of time. " + "The correct answer is " + answers.answers1[0][2]);

        $(".btnContainer").append(correctAnswer);

        setTimeout(function(){
            $('div').remove('.theAnswer');
            $('div').remove(".remainingTime");
            timeCount();
            secondQuestion();
        }, 5000);
    }
}

function firstQuestion() {
    questionsAsked++;
    $(".btnContainer").append("<div class='hmm'>" + questions.question1 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers1[0][1] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=1>' + answers.answers1[0][2] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers1[0][3] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers1[0][4] + '</button>');
    answerCheck();
    
    
}

function secondQuestion() {
    questionsAsked++;
    $(".btnContainer").append("<div class='hmm'>" + questions.question2 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers2[0][1] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers2[0][2] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers2[0][3] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=1>' + answers.answers2[0][4] + '</button>');
    answerCheck();
    
    
}

function answerCheck (){
    $('button').on('click', function(){
        var correctChoice = $(this).attr("value");
        console.log(correctChoice);
        clearInterval(interval);

        if(correctChoice == 1){
            console.log("Correct!");
            $("button").remove();
            $(".hmm").remove();
        }

        else{
            console.log("incorrect");
            $("button").remove();
            $(".hmm").remove();
        }
    });

}

//Main
gamePlay();


