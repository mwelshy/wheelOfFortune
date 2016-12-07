// var player1;


$( document ).ready(function() {
var player1;





//  create the user constructor

User = function(name, points, guesses) {
	this.name = name;
	this.points = points;
	this.guesses = guesses;

}







//  function to add a new user and give description of the game they are about to play. Add click event to attempt button.
enter = function() {

	
	player1 = new User ($("#username").val(), 100, 20);
	console.log(player1);
		$(".newName").html("Hi " + player1.name);
		$(".information").html("The goal of this game is to guess the name! A name has been generated and its your job to figure out what that name actually is. You have a certain amount of attempts at this game so choose wisely!");
		$(".charInfo").html("Your have " + player1.points + " points and " + player1.guesses + " guesses");
		$("#attempt").click(attempt);


}

$("#submit").click(enter);





// test to see if game works correctly.


attempt = function() {

if ($("#l1").val() === "M") {
	console.log("It Works!");
	player1.points += 5;
	player1.guesses -= 1;
	$(".charInfo").html("You Have " + player1.points + " points." + "and " + player1.guesses + " guesses");

} else {
	console.log("It Doesnt!")
	$(".charInfo").html("You Have " + player1.points + " points." + "and " + player1.guesses + " guesses");
	player1.points -= 5;
}

if(player1.points === 0) {
	$("body").hide();
	console.log("Game Over");
}

}



// $("#attempt").click(attempt);










});



















