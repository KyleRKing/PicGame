//event lister on "start button" when pressed, begins game
//		loads picture
//		starts boxes fading


// need randomizer function to randomize the object/image selected



// need eventListener for player "A" on the #1 key /// same things for player "B"
//		function to pause the fading boxes
//		function to make the "input box" active
//		function to check the image object to see if answer is correct
//		if correct, a function to ++ the score for player "A"
//		if incorrect, a function to resume the fading windows

var imgCount = 20;


function fadeBoxes() {
	// if (boxes.className = "transparent")
	var boxes = document.querySelectorAll(".box");
	var randNum = Math.floor(Math.random() * ( boxes.length - 1 ) );
	boxes[randNum].className += " transparent";
		
}

var interval;


document.getElementById("myButton").addEventListener("click", start); 
//pressing start should 
function start() {
	resetBoxes //removes the .class transparent from the white divs
	var randomCount = Math.floor( Math.random() * ( imagesArray.length - 1 ) );
	document.getElementById("container").style.backgroundImage = "url(" + imagesArray[randomCount].url + ")";

	

	interval = setInterval(fadeBoxes, 1000)
	//and start the eventListener for the "Z" or "M" keys
	//and start the var paused "true or false" logic
}
//need to clean up so it only selects each box once

resetBoxes = function() {
	$(".boxes").remove.class("transparent")
}



