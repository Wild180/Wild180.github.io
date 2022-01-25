const die1_div = document.getElementById("die1");
let clicks = 0;
const clicks_span = document.getElementById("num-clicks");
//main
main();


function main(){	
	die1_div.addEventListener('click', function() {
		switcheroo();
	})	
}

function switcheroo() {
	clicks++;
	clicks_span.innerHTML = clicks;
	if (clicks % 2 == 0) {
		die1_div.src = "images/1_dice.png";
		console.log("Side 1");
	} else {
		die1_div.src = "images/2_dice.png";
		console.log("Side 2");
	}	
}


	document.getElementById("choicess").style.display = "none";
