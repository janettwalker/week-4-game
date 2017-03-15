var theGame = {
	
		"charaters": {

			"The Doctor": {
				"hp": 150,
				"ap": 5
			},

			"River Song": {
				"hp": 175,
				"GlossL": 10
			}

			"Dalek": {
				"hp": 200,
				"ap": 15
			}

			"Cyberman": {
				"hp": 210,
				"ap": 20
			}
		}

	 var currSelectedCharacter;
	 var combatants = [];
	 var currDefender;
	 var turnCounter = 1;
	 var killCount = 0;
	 
	},


	selection: function(){
		$('').on('click')
	}
}
// start with four characters
// character The Doctor(HP 150), River Song(175), Dalek(200), Cyberman(210)
//set each character as an object with the properties of name and hit points
//user to select character to play
//user chooses character and character shows in battle position
//remaining characters become selection for battle opponent
//prompt user to select a battle opponent
//user chooses opponent
//opponent moves to defender area
//user prompted to begin game by pressing the attach button
//user presses the attack button
//points decrease The Doctor(decrease oppontent by 20pts), River Song(decrease oppontent by 15pts), Dalek(decrease oppontent by 20pts), Cyberman(decrease oppontent by 15pts)

var theDoctor = {
	name: "The" + " " + "Doctor",
	hP: 150,
	aP: 5
	selection: 
};
	console.log(theDoctor)


var riverSong = {
	name: "River" + " " + "Song",
	hP: 175,
	aP: 10,
};
	console.log(riverSong)


var dalek = {
	name: "Dalek",
	hP: 200,
	aP: 15
};
	console.log(dalek)


var cyberman = {
	name: "Cyberman",
	hP: 210,
	aP: 20,
};
	console.log(cyberman)



// $(document).ready(function(){
	
$(document).on("click", function() {


});

// 	var $thisElement = $("#theID");
// 	console.log($thisElement);

// 	var html = $thisElement.html();
// 	$thisElement.text("coomes");



// 	console.log("here");

// var dog = {
// 	name: "Ruby",
// 	age: 2,
// 	bark: function (ownersName) {
// 		console.log("Bark " + ownersName);
// 	},
// 	vet: {firstName: "whatever"}

// }
//var thisElement = document.getElementById("id");

//this is now an array
// console.log(myPTagElements);


// console.log(dog.vet.firstName);
// console.log(dog.name);
// console.log(dog.bark);

// dog.bark("Janet")



