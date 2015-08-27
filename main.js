
var imgCount = 20;
var player1 = "player1";
var player2 = "player2";
var correct = null;
var interval;
var scores = {
	player1: 0,
	player2: 0
}


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


resetBoxes = function() {  //function to do the remove process .class for transparent

	$(".boxes").remove.class("transparent")
}


pictureReveal = function () {   //function to temp reveal the entire picture.
	$(".boxes").add.class("transparent")
}


//////////event lister for "Z" key player "1"
document.body.addEventListener("keydown", function(e) {
	if (e.which==90){
		clearInterval(interval);
		getAnswer(player1)


	}
});

//////////event listener for "M" key player '2'
document.body.addEventListener("keydown", function(e) {
	if (e.which==77){
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
		scores[player] += 10; //add 10 points to player's score
		console.log("you win");
		// resumeInterval(interval);
		pictureReveal
		alert('You just earned 10 points! Click "OK" for next round.')
	}else{
		scores[player] -= 10; //remove 10 points from players score
		console.log("you lose");
		// resumeInterval(interval);
		pictureReveal
		alert('You might want to clean your GLASSES! You lost -10 points! Click "OK" for next round.')
	}
	updateScores();
} 



function updateScores(){
	var p1=document.getElementById("score1");
	var p2=document.getElementById("score2");
	p1.value=scores.player1;
	p2.value=scores.player2;//set value of input#score2
}


function declareWinner () {
	// body...
}
