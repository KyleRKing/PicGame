# Who, What, Where Picture Game ###

## Overview##

Create picture recognition game, where two players try to guess the mystery picture first with the goal of scoring up to five points. 



Highlights:

*	Two player game competing against each other for the highest score.

* Board will include a large image, covered over with square blocks, that is on a timer and slowly revealed to the players over a 20 second duration.

* The first player to press “Z” or “M” will be given the chance to guess what the name, place or object that is displayed.

* If the player chooses correctly, they will be given a point. First player to 5 points wins.

* If the player chooses incorrectly, the other player will be given the chance to guess in the remaining seconds.

* The game board will also have an input area below the image for players to input their answers.

* A scoreboard will display the player’s current point status. Upon reaching 5 points, a winner will be announced.

* A timer will also be displayed counting down from 20 seconds.

* A  repository will be created of images and their corresponding answer.

Needs:

* Board game with large image space and equally sized box to cover it up. The cover box will slowly fade away.  
* Score board with incrementations
* Event listener for Z and M keys
* Event listener for input box
* Check system against input box to determine if true or false
* 20 second counter
* Pause function of the counter
* End function if no answer within 20 seconds
* Resume function if first answer is wrong...so second player can see board and offer possible guess
* “Next Game” button to load next picture and reset timer

