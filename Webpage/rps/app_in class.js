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
	const computerChoice = getComputerChoice();
	const result = userChoice + computerChoice;
	console.log(result);
	switch (result) {
		case "sts":
		case "bst":
		case "sb":
			win(userChoice, computerChoice);
			break;
		case "stb":
		case "bs":
		case "sst":
			console.log ("USER LOSES!");
			lose(userChoice, computerChoice);
			break;
		case "stst":
		case "bb":
		case "ss":
			console.log("TIE!");
			tie(userChoice, computerChoice);
			break;
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

function win(userChoice, computerChoice){
	console.log("USER WINS!");
	userScore = userScore + 1;
	//console.log(userScore);
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = convertWord(userChoice) + " eliminates " + convertWord(computerChoice) + ". You Win!";
}

function lose(userChoice, computerChoice){
	console.log("USER LOSES!");
	computerScore++;
	//console.log(userScore);
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertWord(userChoice) + " destroyed by " + convertWord(computerChoice) + ". You lose!";
	
}

function tie(userChoice, computerChoice){
	console.log("TIE!");
	//userScore++;
	//console.log(userScore);
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = convertWord(userChoice) + " reaches an impasse with " + convertWord(computerChoice) + ". Tie!";
}