
var imgCount = 20;
var player1 = "Player 1";
var player2 = "Player 2";
var correct = null;
var interval;
var playerScore1 = [];
var playerScore2 = [];


function fadeBoxes() {
	var boxes = document.querySelectorAll(".box");
	var randNum = Math.floor(Math.random() * ( boxes.length - 1 ) );
	var box = boxes[randNum];
		console.log(box);
	//need code if box already contains .class transparent...to skip over it
	if (!box.classList.contains("transparent")) {
		box.className += " transparent";
	}
}



//THIS IS THE START LAUNCH LOGIC
document.getElementById("myButton").addEventListener("click", start); 
function start() {
	resetBoxes //removes the .class transparent from the white divs
	//next two lines randomly selects the background image
	var randomCount = Math.floor( Math.random() * ( imagesArray.length - 1 ) );
	document.getElementById("container").style.backgroundImage = "url(" + imagesArray[randomCount].url + ")";
	interval = setInterval(fadeBoxes, 1000)
	correct=imagesArray[randomCount].answers
		console.log(correct);
		
}


resetBoxes = function() {  //functioin to do the remove process .class for transparent

	$(".boxes").remove.class("transparent")
}


//////////event listener for "M" key player '1'
document.body.addEventListener("keydown", function(e) {
	if (e.which==77){
		clearInterval(interval);
		getAnswer(player1)

	}
});


//////////event lister for "Z" key player "2"
document.body.addEventListener("keydown", function(e) {
	if (e.which==90){
		clearInterval(interval);
		getAnswer(player2)

	}
});



function getAnswer(player){
	var answer = prompt("Please enter your answer").toLowerCase();
		console.log(answer);
	
	var win = false; 
		for (var i = 0; i <correct.length; i++){
			var check=correct[i].toLowerCase();
			if (answer == check){
				win = true;
			}
		}

		if (win){
			console.log("you win");
		}else{
			console.log("you lose");
		}
}

// $(document).ready(function () {
// 	$('body').on('keydown keyup',function(e){
// 	      if(e.which==77){
// 	          console.log(e)
// 	      }
// 	    });
// });
// function checkBuzzer () {
// 	if (buzzer1==true || buzzer2==true){
// 		clearInterval(interval);
// 		//toggle to buzzer pressed
// 	}
// }

// function buzzer1 (true) {
// 	window.prompt("sometext","Enter your Answer");
// 	//compare CheckWin function to prompt function
// 		//if(yes){
// 			//increment player 1 score +10 points
// 		}else{
// 			//increment player 1 score -10 points
// 		}
// }

// function buzzer2 (true) {
// 	window.prompt("sometext","Enter your Answer");
// 	//compare CheckWin function to prompt function
// 		//if(yes){
// 			//increment player 1 score +10 points
// 		}else{
// 			//increment player 1 score -10 points
// 		}
// }

// function resetBuzzer() {
// 	buzzer1=false;
// 	buzzer2=false;
// }








