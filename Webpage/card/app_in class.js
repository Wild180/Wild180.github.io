var userScore= 0;
var computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const action_p = document.querySelector(".action > p");
const stalk_div = document.getElementById("st");
const bag_div = document.getElementById("b");
const sixors_div = document.getElementById("s");
const stalk_img = document.getElementById("stalk_img");
const bag_img = document.getElementById("bag_img");
const sixors_img = document.getElementById("sixors_img");
const choicess_div = document.getElementById("choicess");
const reshuffle_div = document.getElementById("shuffler");

// main program
main();
console.log("i remember midnight sparkle");

function main(){
	stalk_div.addEventListener('click', function() {
		game("st");
	})
	bag_div.addEventListener('click', function() {
		game("b");
	})
	sixors_div.addEventListener('click', function() {
		game("s");
	})

}

function game(userChoice){
	const computerChoice = getComputerChoice(); //coin's location
	//const result = userChoice + computerChoice;
	//console.log(result);
	console.log (userChoice + computerChoice);
	
	if (userChoice === computerChoice){
		win(userChoice);
	} else {
		lose(userChoice, computerChoice);
		
	}
	
}

function getComputerChoice(){
	const choices = ['st', 'b', 's'];
	var randNum = Math.floor (Math.random() * choices.length);
	return choices[randNum];
}

function convertWord (letter){
		if (letter === "st") {return "Stalk"};
		if (letter === "b") {return "Paperbag"};
		if (letter === "s") {return "Sixors"};
}

function win(uc){
	result_p.innerHTML = "You chose correctly and found The EYE! But how much of a WIN is this, really?";
	if (uc == "st"){
		stalk_img.src = "images/eyecard.png";
	} else if (uc == "b"){
		bag_img.src = "images/eyecard.png";	
	}else {
		sixors_img.src = "images/eyecard.png";	
	}
	userScore = userScore + 10;
	userScore_span.innerHTML = userScore;
	reshuffle_div.addEventListener('click', function(){
		shufflecards();
	})
}

function lose(uc, cc){
	result_p.innerHTML = "You chose wrong. Instead, you find.. Mono? How curious...";
	stalk_img.src = "images/bagcard.png";
	bag_img.src = "images/bagcard.png";
	sixors_img.src = "images/bagcard.png";	
	computerScore = computerScore + -10;
	computerScore_span.innerHTML = computerScore;
	reshuffle_div.addEventListener('click', function(){
		shufflecards();
	})
}

function shufflecards(){
	stalk_img.src = "images/cardback.png";
	bag_img.src = "images/cardback.png";
	sixors_img.src = "images/cardback.png";

}