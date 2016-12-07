$( document ).ready(function() {







//  create the user constructor

User = function(name, points, guesses) {
	this.name = name;
	this.points = points;
	this.guesses = guesses;

}








//  function to add a new user and give description of the game they are about to play.
enter = function() {

	
	var player1 = new User ($("#username").val(), 100, 3);
	console.log(player1);
		$(".newName").html("Hi " + player1.name);
		$(".information").html("The goal of this game is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga a nemo accusantium ipsum animi esse porro quisquam, quod, asperiores nam obcaecati possimus itaque repudiandae expedita voluptate. Explicabo voluptates culpa dolores!!! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea necessitatibus eligendi, cupiditate illo eos iusto soluta rem, excepturi quo, consectetur cumque repellat magnam consequuntur, velit voluptates placeat omnis non vitae.");
		$(".charInfo").html("Your have " + player1.points + " points and " + player1.guesses + " guesses");
		$("#attempt").click(attempt);


}

$("#submit").click(enter);




// test to see if game works correctly.


attempt = function() {

if ($("#l1").val() === "M") {
	User.points = + 5;
	console.log("It Works!");

} else {
	console.log("It Doesnt!")
}

}



// $("#attempt").click(attempt);










});



















