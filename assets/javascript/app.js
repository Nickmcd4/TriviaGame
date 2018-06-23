// Setting Global Variables
var time = 15;
var questions = {
    question1: ["In our solar system, which planet has the shortest day?"],
    question2: ["Which is the closest star to our sun?"],
    question3: ["Which NASA space flight was the last manned mission to the moon?"],
    question4: ["What flavor ice cream did Baskin-Robbins release in 1969 to commemorate America’s landing on the moon?"],
    question5: ["Who was the first person to reach space?"]
};
var answers ={
    answers1:[{1:"Earth",
               2:"Jupiter", //correct answer
               3:"Saturn",
               4:"Mars"
    }],
    answers2:[{1:"Canopus",
               2:"Thursuys",
               3:"Sirius",
               4:"Alpha Centauri" //corect answer
    }],
    answers3:[{1:"Apollo 17", //correct answer
               2:"USS Voyager",
               3:"Apollo 13",
               4:"Sputnik 1"

    }],
    answers4:[{1:"Lunar Cheesecake", //correct answer
               2:"Out of this Swirled",
               3:"Ne-apollo-tan",
               4:"Crater Crunch"

    }],
    answers5:[{1:"Neil Armstrong",
               2:"Yuri Gagarin", //correct answer
               3:"David Bowman",
               4:"Buzz Aldrin"
    }]
};
var questionsAsked = 0;
var correctAnswers=0;
var wrongAnswers=0;
var interval; 
var isCorrect = false;

//Functions
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
            $('.questionInput').remove();
            $('.btnContainer').append('<div class="timeIsUp">Time is Up!</div>');
            displayAnswer();
        }
    

    
}
function displayAnswer (){

    //FIRST QUESTION STATEMENTS
    if (questionsAsked === 1 && isCorrect===false) {
        wrongAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
        
        correctAnswer = showAnswer.text("WRONG!!!" + "The correct answer is " + answers.answers1[0][2]);
    
        $(".btnContainer").append(correctAnswer);

        setTimeout(function(){
            $('div').remove('.theAnswer');
            $('div').remove(".remainingTime");
            $('div').remove('.timeIsUp');
            timeCount();
            secondQuestion();
            answerCheck();
        }, 5000);
    }
    else if (questionsAsked ===1 && isCorrect===true){
        //tracks right answers
        correctAnswers++;
        //display correct!!
        var showAnswer = $("<div class='theAnswer'>");
               correctAnswer = showAnswer.text("CORRECT!!!");
        $(".btnContainer").append(correctAnswer);

        //removes correct answer after 5 seconds
        //removes time remaining then calls the time remaining function to rest
        setTimeout(function(){
            isCorrect = false;
            $('div').remove(".theAnswer");
            $('span').remove(".remainingTime");
            $('div').remove(".timeIsUp");
            timeCount();
            secondQuestion();
            answerCheck();

        }, 3000);
    }

    //SECOND QUESTION STATEMENTS
    else if (questionsAsked ===2 && isCorrect === false){
        wrongAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
        correctAnswer = showAnswer.text("You've run out of time. " + "The correct answer is " + answers.answers2[0][4]);
        $(".btnContainer").append(correctAnswer);


        setTimeout(function(){
            isCorrect = false;
            $('div').remove(".theAnswer");
            $('span').remove(".timer");
            $('div').remove(".remainingTime");
            timeCount();
            thirdQuestion();
            answerCheck();

            
        }, 2000);
    }
    else if(questionsAsked===2 && isCorrect===true){
        correctAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
               correctAnswer = showAnswer.text("Correct!!!");
        $(".btnContainer").append(correctAnswer);

        setTimeout(function(){
            isCorrect=false;
            $('div').remove(".theAnswer");
            $('span').remove(".timer");
            $('div').remove(".remainingTime");
            timeCount();
            thirdQuestion();
            answerCheck();
            
        }, 2000)
    }
    //THIRD QUESTION STATEMENTS
    else if (questionsAsked ===3 && isCorrect === false){
        wrongAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
        correctAnswer = showAnswer.text("You've run out of time. " + "The correct answer is " + answers.answers3[0][1]);
        $(".btnContainer").append(correctAnswer);


        setTimeout(function(){
            isCorrect = false;
            $('div').remove(".theAnswer");
            $('span').remove(".timer");
            $('div').remove(".remainingTime");
            timeCount();
            fourthQuestion();
            answerCheck();

            
        }, 2000);
    }
    else if(questionsAsked===3 && isCorrect===true){
        correctAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
               correctAnswer = showAnswer.text("Correct!!!");
        $(".btnContainer").append(correctAnswer);

        setTimeout(function(){
            isCorrect=false;
            $('div').remove(".theAnswer");
            $('span').remove(".timer");
            $('div').remove(".remainingTime");
            timeCount();
            fourthQuestion();
            answerCheck();
            
        }, 2000)
    }
    //FOURTH QUESTION STATEMENTS
    else if (questionsAsked ===4 && isCorrect === false){
        wrongAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
        correctAnswer = showAnswer.text("You've run out of time. " + "The correct answer is " + answers.answers4[0][1]);
        $(".btnContainer").append(correctAnswer);


        setTimeout(function(){
            isCorrect = false;
            $('div').remove(".theAnswer");
            $('span').remove(".timer");
            $('div').remove(".remainingTime");
            timeCount();
            fifthQuestion();
            answerCheck();

            
        }, 2000);
    }
    else if(questionsAsked===4 && isCorrect===true){
        correctAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
               correctAnswer = showAnswer.text("Correct!!!");
        $(".btnContainer").append(correctAnswer);

        setTimeout(function(){
            isCorrect=false;
            $('div').remove(".theAnswer");
            $('span').remove(".timer");
            $('div').remove(".remainingTime");
            timeCount();
            fifthQuestion();
            answerCheck();
            
        }, 2000)
    }
    //FIFTH QUESTION STATEMENTS
    else if (questionsAsked ===5 && isCorrect === false){
        wrongAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
        correctAnswer = showAnswer.text("You've run out of time. " + "The correct answer is " + answers.answers5[0][2]);
        $(".btnContainer").append(correctAnswer);


        setTimeout(function(){
            isCorrect = false;
            $('div').remove(".theAnswer");
            $('span').remove(".timer");
            $('div').remove(".remainingTime");


        endGame();  
        }, 2000);
    }
    else if(questionsAsked===3 && isCorrect===true){
        correctAnswers++;
        var showAnswer = $("<div class='theAnswer'>");
               correctAnswer = showAnswer.text("Correct!!!");
        $(".btnContainer").append(correctAnswer);

        setTimeout(function(){
            isCorrect=false;
            $('div').remove(".theAnswer");
            $('span').remove(".timer");
            $('div').remove(".remainingTime");

            endGame();
        }, 2000)
    }
}

function firstQuestion() {
    questionsAsked++;
    $(".btnContainer").append("<div class='questionInput'>" + questions.question1 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers1[0][1] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=1>' + answers.answers1[0][2] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers1[0][3] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers1[0][4] + '</button>');
    
    
    
}

function secondQuestion() {
    questionsAsked++;
    $(".btnContainer").append("<div class='questionInput'>" + questions.question2 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers2[0][1] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers2[0][2] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers2[0][3] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=1>' + answers.answers2[0][4] + '</button>');
    
    
    
}
function thirdQuestion() {
    questionsAsked++;
    $(".btnContainer").append("<div class='questionInput'>" + questions.question3 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=1>' + answers.answers3[0][1] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers3[0][2] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers3[0][3] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers3[0][4] + '</button>');
    
    
    
}
function fourthQuestion() {
    questionsAsked++;
    $(".btnContainer").append("<div class='questionInput'>" + questions.question4 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=1>' + answers.answers4[0][1] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers4[0][2] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers4[0][3] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers4[0][4] + '</button>');
    
    
    
}
function fifthQuestion() {
    questionsAsked++;
    $(".btnContainer").append("<div class='questionInput'>" + questions.question5 + "</div>");

    //add buttons with answers
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers5[0][1] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=1>' + answers.answers5[0][2] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers5[0][3] + '</button>');
    $(".btnContainer").append('<button class="buttonAns" value=0>' + answers.answers5[0][4] + '</button>');
    
    
    
}

function endGame (){
    $(".btnContainer").append("<div class='gameOver'>All done, heres how you did</div>" + "<div class='gameOver'>Correct:" + correctAnswers + "</div>" + "<div class='gameOver'>Incorrect:" + wrongAnswers + "</div>");
    resetGame();
}
function resetGame(){
    $(".btnContainer").append('<button class="reset">Reset</button>');
    $('.reset').on('click', function(){
        $('div').remove('.gameOver');
        $('button').remove('.reset');

        //reset variables
        questionsAsked=0;
        correctAnswers=0;
        wrongAnswers=0;
        isCorrect=false;

        //functions
        timeCount();
        firstQuestion();
        answerCheck();
    })
}
function answerCheck (){
    $('button').on('click', function(){
        var correctChoice = $(this).attr("value");
        console.log(correctChoice);
        clearInterval(interval);

        if(correctChoice == 1){
            isCorrect = true;

            console.log("correct");

            $('button').remove();

            $(".questionInput").remove();
            displayAnswer();
        }

        else{
            console.log("incorrect");
            $("button").remove();
            $(".questionInput").remove();
            displayAnswer();
        }
    });

}

//Main
gamePlay();


