var character= document.getElementById("character");
var block= document.getElementById("block");

function jump(){
	if(character.classList !="animate"){
		character.classList.add("animate");
		
	}
	setTimeout(function(){
		character.classList.remove("animate");
	},500);
	
}

var checkDead = setInterval(function(){
	var charTop = parseInt (window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt (window.getComputedStyle(block).getPropertyValue("left"));
	
	if(blockLeft<20 && blockLeft>0 && charTop>=130){
		
		block.style.animation = "none";
		block.style.display = "none";
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
		alert("we're no strangers to love you know the rules and so do i a full commitments what im thinking of you wouldnt get this from any other guy and i just wanna tell you how im feeling gotta make you understand never gonna give you up never gonna let you down never gonna run around and desert you never gonna make you cry never gonna say goodbye never gonna tell a lie and hurt you we've known each other for so long your hearts been aching but you're too shy to say it inside we both know whats been going on we know the game and we're gonna play it and if you ask me how im feeling dont tell me you're too blind to see never gonna give you up never gonna let you down never gonna run around and desert you never gonna make you cry never gonna say goodbye never gonna tell a lie and hurt you (oh give you up) (oh give you up) (oh give you up) (oh give you up oh) never gonna give never gonna give (give you up) never gonna give never gonna give (give you up) we've known each other for so long your hearts been aching but you're too shy to say it inside we both know what's been going on we know the game and we're gonna play it i just wanna tell you how im feeling gotta make you understand never gonna give you up never gonna let you down never gonna run around and desert you never gonna make you cry never gonna say goodbye never gonna tell a lie and hurt you (repeated)");
		
	}
},10);