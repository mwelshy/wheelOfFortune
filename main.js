$( document ).ready(function() {







//  create the user constructor

User = function(name, points, guesses) {
	this.name = name;
	this.points = points;
	this.guesses = guesses;

}





//  function to add a new user
enter = function() {

	
	var player1 = new User ($("#username").val(), 100, 3);
	console.log(player1);


}

$("#submit").click(enter);



});



















