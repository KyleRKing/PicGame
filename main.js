//event lister on "start button" when pressed, begins game
//		loads picture
//		starts boxes fading


// need randomizer function to randomize the object/image selected


// need randomizer function to select which box to fade randomily


// need eventListener for player "A" on the #1 key
//		function to pause the fading boxes
//		function to make the "input box" active
//		function to check the image object to see if answer is correct
//		if correct, a function to ++ the score for player "A"
//		if incorrect, a function to resume the fading windows

// need eventListener for player "B" on the #2 key
//		will pause the fading boxes
//		make the "input box" active



document.getElementById("myButton").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Make the boxes start to fade";
}); //reset ALL "boxes class" to only "box"
	//pressing start should launch the first background image
	//and start the fading boxes
	//and start the eventListener for the "Z" or "M" keys
	//and start the var paused "true or false" logic

function fadeBoxes() {
	// if (boxes.className = "transparent")

 var boxes = document.querySelectorAll(".box");
 var randNum = Math.floor(Math.random() * ( boxes.length - 1 ) );
 boxes[randNum].className += " transparent";
}

var interval = setInterval(fadeBoxes, 1000)
//need to clean up so it only selects each box once



//JS CODE BELOW that may help with fades if CSS doesn't do the job.
// $(function() {
// 	$('#fds img').each(function(i) {
// 	$(this).delay((i++) * 500).fadeTo(1000, 1); })
// });

