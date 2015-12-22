
var characters =[
	{
		name: "Orion",
		health: "100",
		nutKick: "10",
		pickleTickle: "15",
		img: "http://static.comicvine.com/uploads/original/12/120997/4708702-8718106903-onepu.png"
	},
	{
		name: "Lucious",
		health: "100",
		bitchSlap: "10",
		Mount: "15",
		img:"http://cartoonsimages.com/sites/default/files/styles/1280x1024/public/field/image/AfroSamurai1b.jpg?itok=im5GG99g"
	}
]




var heroOne = document.getElementById("heroOne")
var heroTwo = document.getElementById("heroTwo")
var healthOne = document.getElementById("healthOne")  
var healthTwo = document.getElementById("healthTwo")
var health;

heroOne.setAttribute("src",characters[0].img)
heroTwo.setAttribute("src",characters[1].img)
healthOne.innerHTML = characters[0].health
healthTwo.innerHTML = characters[1].health


document.getElementById("protagonist").appendChild(heroOne)
document.getElementById("antagonist").appendChild(heroTwo)






phrase=["This time it's personal","Oh, you think that will work","Time to butter the toast","This is gonna hurt!","You're funny, but looks aren't everything"]


function attack(){
	health = characters[1].health
	health = health-10
	console.log(characters[1].health)
	characters[1].health = health
	healthTwo.innerHTML = health

	if(health<90){


		var randoPhrase = phrase[Math.floor(Math.random()*phrase.length)];
		var myTurn = document.getElementById("myTurn")
		myTurn.innerHTML = randoPhrase

		var hurtLocker = [5, 10, 15, 20]
		var randoHurt = hurtLocker[Math.floor(Math.random()*hurtLocker.length)]
		healthOther = characters[0].health
		healthOther = health-randoHurt
		console.log(characters[0].health)
		characters[0].health = healthOther
		healthTwo.innerHTML = healthOther

	}		
	}
   
