// Setting Global Variables
var time = 15;
var questions = {
    question1: ["In our solar system, which planet has the shortest day?"],
    answers1: [{a:"Earth",
                b:"Jupiter",
                c:"Saturn",
                d:"Mars"
               }],
    question2: ["Which is the closest star to our sun?"],
    answers2: [{a:"Canopus",
                b:"Thursuys",
                c:"Sirius",
                d:"Alpha Centauri"
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
        $(".btnContainer").css({"top": "50%", "font-size": "30px", "left": "35%"});
        timeCount();
        firstQuestion();
    });
}

function timeCount(){ //absolute state of timer
    time = 15;
    interval = setInterval(timer,1000);
    $(".btnContainer").append("<div>" + "Time Remaining: " + "<span class='timer'" + "</span>" + "</div>" + "<br>" + "<div class='questionSlot'></div>" + "<br>");
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
        correctAnswer = showAnswer.text("You've run out of time. " + "The correct answer is " + questions.answers1[0].b);

        $(".btnContainer").append(correctAnswer);

        setTimeout(function(){
            $('div').remove('.theAnswer');
            $('div').remove(".timer");
            timeCount();
            secondQuestion();
        }, 5000);
    }
}

function firstQuestion() {
    questionsAsked++;
    $(".questionSlot").append("<div class='hmm'>" + questions.question1 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=0>' + questions.answers1[0].a + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=1>' + questions.answers1[0].b + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + questions.answers1[0].c + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + questions.answers1[0].d + '</button>');
    answerCheck();
    
    
}

function secondQuestion() {
    questionsAsked++;
    $(".questionSlot").append("<div class='hmm'>" + questions.question2 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=0>' + questions.answers2[0].a + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + questions.answers2[0].b + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + questions.answers2[0].c + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=1>' + questions.answers2[0].d + '</button>');
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


