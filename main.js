var player1;

var points
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


// var letters = ["m", "i" , "c", "h", "a", "e", "l"];


$( document ).ready(function() {





//  create the user constructor

User = function(name, points, guesses) {
	this.name = name;
	this.points = points;
	this.guesses = guesses;

}







//  function to add a new user and give description of the game they are about to play. Add click event to attempt button.
enter = function() {

	
	player1 = new User ($("#username").val(), 0, 20);
	console.log(player1);
		$(".title").html("Guess The Name Game!");
		$(".newName").html("Hi " + player1.name);
		$(".information").html("The goal of this game is to guess the name! A name has been generated and its your job to figure out what that name actually is. You have a certain amount of attempts at this game so choose wisely! ");
		$(".charInfo").html("Your have " + player1.points + " points and " + player1.guesses + " guesses");
		$("#username").hide();
		$("#submit").hide();
		$("#attempt").click(attempt);


}

$("#submit").click(enter);





// test to see if game works correctly. If a letter is inputted wrong, remove 5 points. If guessed correctly, add 5 points. If points get to 0, hide the body and console log game over.





attempt = function() {


	// for (i = 0; i < letters.length; i++) {
	// 	if(letters[i] != $("#l1").val()) {
	// 		alert("Broken");
	// 	}
	// }

if ($("#l1").val() === "M") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l1").val());
	$(".letter1").text("M");
	$("#l1").val('') && $("#l1").hide();
} 



if ($("#l2").val() === "I") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l2").val());
	$(".letter2").text("I");
	$("#l2").val('') && $("#l2").hide();
}

if ($("#l3").val() === "C") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l3").val());
	$(".letter3").text("C");
	$("#l3").val('') && $("#l3").hide();
}

if ($("#l4").val() === "H") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l4").val());
	$(".letter4").text("H");
	$("#l4").val('') && $("#l4").hide();
}

if ($("#l5").val() === "A") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l5").val());
	$(".letter5").text("A");
	$("#l5").val('') && $("#l5").hide();
}

if ($("#l6").val() === "E") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l6").val());
	$(".letter6").text("E");
	$("#l6").val('') && $("#l6").hide();
}

if ($("#l7").val() === "L") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l7").val());
	$(".letter7").text("L");
	$("#l7").val('') && $("#l7").hide();
}

if ($("#l8").val() === "W") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l8").val());
	$(".letter8").text("W");
	$("#l8").val('') && $("#l8").hide();
}

if ($("#l9").val() === "E") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l9").val());
	$(".letter9").text("E");
	$("#l9").val('') && $("#l9").hide();
}

if ($("#l10").val() === "L") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l10").val());
	$(".letter10").text("L");
	$("#l10").val('') && $("#l10").hide();
}

if ($("#l11").val() === "S") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l11").val());
	$(".letter11").text("S");
	$("#l11").val('') && $("#l11").hide();
}

if ($("#l12").val() === "H") {
	console.log("It Works!");
	player1.points += 5;
	$(".charInfo").html("You Have " + player1.points  + " points." + "and " + player1.guesses + " guesses");
	$(".yesorno").html("Correct!");
	$(".correct").append($("#l12").val());
	$(".letter12").text("H");
	$("#l12").val('') && $("#l12").hide();
}


// for (var i = 0; i < letters.length; i++) {
// 	for(var k = 0; k < $(".inputs input #l1").val(); k++)
// 		if(letters[i] != $("inputs input #l1")[i]) {
// 			console.log("theres no letters");
// 		} else {
// 			console.log("theres a letter");
// 		}
// }


 else {
	console.log("It Doesnt!")
	player1.guesses -= 1;
	$(".charInfo").html("You Have " + player1.points + " points." + "and " + player1.guesses + " guesses");
	
	$(".letters-used").append($("#l1").val());
	$(".letters-used").append($("#l2").val());
	$(".letters-used").append($("#l3").val());
	$(".letters-used").append($("#l4").val());
	$(".letters-used").append($("#l5").val());
	$(".letters-used").append($("#l6").val());
	$(".letters-used").append($("#l7").val());
	$(".letters-used").append($("#l8").val());
	$(".letters-used").append($("#l9").val());
	$(".letters-used").append($("#l10").val());
	$(".letters-used").append($("#l11").val());


}

if(player1.guesses === 0) {
	$("body").hide();
	alert("Game Over Dude");
} 

if (player1.points === 65) {
	alert("gratz d00d");
}
}






// write for loop to loop through inputs using .eq.val(). If there is the correct string inputtted, then do something, if not do something. 

// wrap all inputs in a div. To select each div , use jquery. $(".inputs input"). Works like CSS selectors. Select the inputs class, then search for actual inputs.



// $("#attempt").click(attempt);










});



















