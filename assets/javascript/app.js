var timer;
// var totalTime = 60;
var numberRight = 0;
var numberWrong = 0;
// var tooLong = 0;
var clockRunning = false;
var counter;
var i=0;


var quizInfo = {
	questions:	["Which of the following distances is the longest?", "Which of the following countries is the largest?", "What is the Largest mammal on earth?", "What turned Medusa to stone?", "What is the deepest place on Earth"],
	answers: [[ "The distance around the equator", "The distance aross the United States", "The distance around Yo Momma's Waistline", "The distance around a sports track", ], [ "Chile", "Russia", "USA", "Yo Momma"], [ "Elephant", "Mouse", "Yo Momma", "Blue Whale"], ["Black Magic", "Yo Momma's Face", "Seeing her reflection", "Dry Skin"], ["Mariana's Trench", "Yo Momma's Soul", "Death Valley", "The space between the seat and the center console of your car"]],
	//values: 1, 2, 4, 3, 1
	correctAnswerValue: [1, 2, 4, 3, 1],
	photo: ["assets/images/mommaWaist.jpg", "assets/images/mommaCountry.jpg", "assets/images/mommaWhale.jpg", "assets/images/mommaUgly.jpg", "assets/images/mommaPerson.jpg"]
}


$(document).ready(function() {
     start();
	});


function start(){
	timer = 20;
	$("#wrapper").hide();
	$("#start").click(function(){
	$("#start").hide();
 	$("#wrapper").show();
 	$("#timeLeft").text("Time Remaining: " + timer + " seconds");
 	$("#question").html(quizInfo.questions[i]);
	$("#answer-1").html(quizInfo.answers[i][0]);
	$("#answer-2").html(quizInfo.answers[i][1]);
	$("#answer-3").html(quizInfo.answers[i][2]);
	$("#answer-4").html(quizInfo.answers[i][3]);
	$("#yoMomma").attr("src", quizInfo.photo[i]);
	
	//console.log(timer.start());
 	});
}

function nextQ(){
	timer = 20;
	$("#timeLeft").html("Time Remaining: " + timer + "seconds");
	$("#question").html(quizInfo.questions[i]);
	$("#answer-1").html(quizInfo.answers[i][0]);
	$("#answer-2").html(quizInfo.answers[i][1]);
	$("#answer-3").html(quizInfo.answers[i][2]);
	$("#answer-4").html(quizInfo.answers[i][3]);

	$("#yoMomma").attr("src", quizInfo.photo[i])
	timerStarts();
}
function score(){
	//$("button").hide();
	//$("#winCounter").html("Correct Guess: " + numberRight);
	//$("#lossCounter").html("Wrong Guesses: " + numberWrong);
	alert( "You got " + numberRight + " questions right and " + numberWrong +" questions wrong");
	$("#start").show().html("Play Again?").on("click", reset());
}
function reset(){
	timer = 20;
	//totalTime = 60
	numberRight = 0;
	numberWrong = 0;
	tooLong = 0;
	clockRunning = false;
	counter;
	i=0
	start();
}

//__________******__________*********___________*******________*********___________*******
//
// on click function is below
//**********_______**********________***********_______********________***********_______

$(".answerSection").on("click", function(event) {
	//console.log("i= " + i);
	//console.log("value of clicked button: " + parseInt(this.value));
	
	// console.log("TIMER: " + timer);
	// console.log("timer decrementing:" + timerDecrementing);
	// console.log("Counter: " + counter);


	$("#timeLeft").html("Time Left: " + timer + " seconds");
//** will need to execute the time running function
	$("#question").html("Correct Answer: " + quizInfo.answers[i][(quizInfo.correctAnswerValue[i]-1)]);
	if(parseInt(this.value) === quizInfo.correctAnswerValue[i]) {
	//console.log("You guess Right! correct answer was: " +quizInfo.answers[i][(quizInfo.correctAnswerValue[i]-1)]);
	numberRight++;
	}

	else{
		numberWrong++;
		//console.log("incorrect: " + numberWrong);
	//console.log((quizInfo.answers[i][(quizInfo.correctAnswerSpot[i])]))
	}

	i++;

	//console.log("New i value: " + i);
	if(i<quizInfo.questions.length){
		setTimeout(nextQ, 3000);
	}

	// You have 5 questions but that goes to index of 4
	if(i===quizInfo.questions.length){


		// $("#start").show().html("Play Again?");
		// $(".answerSection").hide();
		score();
	}
	

	if (timer<1){
		nextQ();
	}
	
});

//_________********_________********_______********_______********
//	clock countdown function is below
//********________*********_______********______********________

// function timeLeft(){
// 	setInterval(totalTime--, 1000);
// }
// function countDownTimer(){
// 	totalTime--;
// }


function timerStarts(){
	counter = setInterval(timer.decrementing, 1000);
}
function timerDecrementing() {
	timer--;
}



	// var timer = {

	// 	amount: 20,
	// 	waitBetweenQs: 3,

	// 	reset: function() {
	// 	    timer.amount = 20;
	// 	    timer.waitBetweenQs = 3
	// 	},
	// 	start: function() {
		    
	// 	        intervalId = setInterval(timer.decrementing, 1000);
		    
	// 	},
	// 	// stop: function() {

	// 	//     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
	// 	//     clearInterval(intervalId);
	// 	//     clockRunning = false;
	// 	//   },
	// 	decrementing: function() {

	// 	    timer.amount--;

	// 	    // DONE: Use the variable we just created to show the converted time in the "display" div.
	// 	    //$("#timeRemaining").text(countdown.timer);
	// 	},

	// }


//+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_

// function countdown() {
// 	var timer = {

// 		amount: 20,
// 		waitBetweenQs: 3,

// 		reset: function() {
// 		    timer.amount = 20;
// 		    timer.waitBetweenQs = 3
// 		},
// 		start: function() {
		    
// 		        intervalId = setInterval(countdown.decrementing, 1000);
// 		        // clockRunning = true;
		    
// 		},
// 		// stop: function() {

// 		//     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
// 		//     clearInterval(intervalId);
// 		//     clockRunning = false;
// 		//   },
// 		decrementing: function() {

// 		    countdown.timer--;

// 		    // DONE: Use the variable we just created to show the converted time in the "display" div.
// 		    $("#timeRemaining").text(countdown.timer);
// 		},

// 	}
// }






// countdown time function below



