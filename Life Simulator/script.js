//Larry Thompson - WEB 151 - Life Simulator App

//Create User Object
var user = {userName:"", userAge:0, hungerLevel:100, restLevel:100, bladderLevel:100, money:50000, job:"", luck:0, payRate:0};

//Create bladder bar
function drawBladder() {
	var bladderWidth = user.bladderLevel;
	var cb = document.getElementById("bladderLabel");
	var ctxb = cb.getContext("2d");
	ctxb.fillStyle = "#FFFF00";
	ctxb.fillRect(0,0,bladderWidth,30);
}

//Create rest bar	
function drawRest() {	
	var restWidth = user.restLevel;
	var cr = document.getElementById("restLabel");
	var ctxr = cr.getContext("2d");
	ctxr.fillStyle = "#0000FF";
	ctxr.fillRect(0,0,restWidth,30);
}

//Create hunger bar
function drawHunger() {	
	var hungerWidth = user.hungerLevel;
	var ch = document.getElementById("hungerLabel");
	var ctxh = ch.getContext("2d");
	ctxh.fillStyle = "#FF0000";
	ctxh.fillRect(0,0,hungerWidth,30);
}


//Set values for User

function userCreation () {
	user.userName = document.getElementById("nameInput").value;
	user.userAge = document.getElementById("ageInput").value;
	user.job = document.getElementById("jobInput").value;
		switch (user.job) {
			case "Fast Food": user.payRate += 7.25;
			break;
			case "Retail Associate": user.payRate += 8.00;
			break;
			case "Programmer": user.payRate += 12.00;
			break;
			case "General Manager": user.payRate += 15.00;
			break;
			case "Construction Worker": user.payRate += 18.00;
			break;
			case "Artist": user.payRate += 6.75;
			break;
			case "Desk Job": user.payRate += 11.50;
			break;
			case "Tech Support": user.payRate += 10.25;
			break;
			default: user.payRate += 5.00
			break;
		}
	//Random number from 1 - 20
	user.luck = Math.floor(Math.random()*20)+1;
	update();
}

//Updates State of User
function update() {
	document.getElementById("nameLabel").innerHTML ="Name: " + user.userName;
	document.getElementById("ageLabel").innerHTML ="Age: "+ user.userAge;
	document.getElementById("jobLabel").innerHTML ="Job: "+ user.job;
	if (user.bladderLevel >= 100){
		user.bladderLevel = 100;
		document.getElementById("bladderWarning").innerHTML ="";
	}
	else if (user.bladderLevel < 100 && user.bladderLevel >= 90) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: OOOOOOOOO";
		document.getElementById("bladderWarning").innerHTML ="";
	}
	else if (user.bladderLevel <= 89 && user.bladderLevel >= 80) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: OOOOOOOO";
		document.getElementById("bladderWarning").innerHTML ="";
	}
	else if (user.bladderLevel <= 79 && user.bladderLevel >= 70) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: OOOOOOO";
		document.getElementById("bladderWarning").innerHTML ="";
	}
	else if (user.bladderLevel <= 69 && user.bladderLevel >= 60) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: OOOOOO";
		document.getElementById("bladderWarning").innerHTML ="You have to use the restroom soon.";
	}
	else if (user.bladderLevel <= 59 && user.bladderLevel >= 50) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: OOOOO";
		document.getElementById("bladderWarning").innerHTML ="You have to use the restroom.";
	}
	else if (user.bladderLevel <= 49 && user.bladderLevel >= 40) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: OOOO";
		document.getElementById("bladderWarning").innerHTML ="You have to use the restroom.";
	}
	else if (user.bladderLevel <= 39 && user.bladderLevel >= 30) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: OOO";
		document.getElementById("bladderWarning").innerHTML ="You REALLY have to use the restroom soon.";
	}
	else if (user.bladderLevel <= 29 && user.bladderLevel >= 20) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: OO";
		document.getElementById("bladderWarning").innerHTML ="You REALLY have to use the restroom soon.";	
		}
	else if (user.bladderLevel <= 19 && user.bladderLevel >= 10) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: O";
		document.getElementById("bladderWarning").innerHTML ="You REALLY have to use the restroom soon.";	
		}
	else if (user.bladderLevel <= 9 && user.bladderLevel > 0) {
		document.getElementById("bladderLabel").innerHTML ="Bladder Level: DANGER!!!";
		document.getElementById("bladderWarning").innerHTML ="You REALLY have to use the restroom soon.";	
		}
	else if (user.bladderLevel <= 0) {
		document.location = "#pageEnd";
		document.getElementById("endMessage").innerHTML ="Your bladder exploded. THE END.";
		document.getElementById("endSound").play();
	}
	
	
	if (user.hungerLevel >= 100){
		user.hungerLevel = 100;
		document.getElementById("hungerWarning").innerHTML ="";
	}
	else if (user.hungerLevel < 100 && user.hungerLevel >= 90) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: OOOOOOOOO";
		document.getElementById("hungerWarning").innerHTML ="";
	}
	else if (user.hungerLevel <= 89 && user.hungerLevel >= 80) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: OOOOOOOO";
		document.getElementById("hungerWarning").innerHTML ="";
	}
	else if (user.hungerLevel <= 79 && user.hungerLevel >= 70) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: OOOOOOO";
		document.getElementById("hungerWarning").innerHTML ="";
	}
	else if (user.hungerLevel <= 69 && user.hungerLevel >= 60) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: OOOOOO";
		document.getElementById("hungerWarning").innerHTML ="You are getting hungry.";
	}
	else if (user.hungerLevel <= 59 && user.hungerLevel >= 50) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: OOOOO";
		document.getElementById("hungerWarning").innerHTML ="You are hungry.";
	}
	else if (user.hungerLevel <= 49 && user.hungerLevel >= 40) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: OOOO";
		document.getElementById("hungerWarning").innerHTML ="You are hungry.";
	}
	else if (user.hungerLevel <= 39 && user.hungerLevel >= 30) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: OOO";
		document.getElementById("hungerWarning").innerHTML ="You are VERY hungry.";
	}
	else if (user.hungerLevel <= 29 && user.hungerLevel >= 20) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: OO";
		document.getElementById("hungerWarning").innerHTML ="You are VERY hungry.";
	}
	else if (user.hungerLevel <= 19 && user.hungerLevel >= 10) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: O";
		document.getElementById("hungerWarning").innerHTML ="You are VERY hungry.";
	}
	else if (user.hungerLevel <= 9 && user.hungerLevel > 0) {
		document.getElementById("hungerLabel").innerHTML ="Hunger Level: DANGER!!!";
		document.getElementById("hungerWarning").innerHTML ="You are VERY hungry.";
	}
	else if (user.hungerLevel <= 0) {
		document.location = "#pageEnd";
		document.getElementById("endMessage").innerHTML ="You have starved. THE END.";
		document.getElementById("endSound").play();
	}
	
	if (user.restLevel >= 100){
		user.restLevel = 100;
		document.getElementById("restWarning").innerHTML ="";
	}
	else if (user.restLevel < 100 && user.restLevel >= 90) {
		document.getElementById("restLabel").innerHTML ="Rest Level: OOOOOOOOO";
		document.getElementById("restWarning").innerHTML ="";
	}
	else if (user.restLevel <= 89 && user.restLevel >= 80) {
		document.getElementById("restLabel").innerHTML ="Rest Level: OOOOOOOO";
		document.getElementById("restWarning").innerHTML ="";
	}
	else if (user.restLevel <= 79 && user.restLevel >= 70) {
		document.getElementById("restLabel").innerHTML ="Rest Level: OOOOOOO";
		document.getElementById("restWarning").innerHTML ="";
	}
	else if (user.restLevel <= 69 && user.restLevel >= 60) {
		document.getElementById("restLabel").innerHTML ="Rest Level: OOOOOO";
		document.getElementById("restWarning").innerHTML ="You are getting tired.";
	}
	else if (user.restLevel <= 59 && user.restLevel >= 50) {
		document.getElementById("restLabel").innerHTML ="Rest Level: OOOOO";
		document.getElementById("restWarning").innerHTML ="You are tired.";
	}
	else if (user.restLevel <= 49 && user.restLevel >= 40) {
		document.getElementById("restLabel").innerHTML ="Rest Level: OOOO";
		document.getElementById("restWarning").innerHTML ="You are tired.";
	}
	else if (user.restLevel <= 39 && user.restLevel >= 30) {
		document.getElementById("restLabel").innerHTML ="Rest Level: OOO";
		document.getElementById("restWarning").innerHTML ="You are VERY tired.";
	}
	else if (user.restLevel <= 29 && user.restLevel >= 20) {
		document.getElementById("restLabel").innerHTML ="Rest Level: OO";
		document.getElementById("restWarning").innerHTML ="You are VERY tired.";
	}
	else if (user.restLevel <= 19 && user.restLevel >= 10) {
		document.getElementById("restLabel").innerHTML ="Rest Level: O";
		document.getElementById("restWarning").innerHTML ="You are VERY tired.";
	}
	else if (user.restLevel <= 9 && user.restLevel > 0) {
		document.getElementById("restLabel").innerHTML ="Rest Level: DANGER!!!";
		document.getElementById("restWarning").innerHTML ="You are VERY tired.";
	}
	else if (user.restLevel <= 0) {
		document.location = "#pageEnd";
		document.getElementById("endMessage").innerHTML ="You have passed out. THE END.";
		document.getElementById("endSound").play();
		
	}
	//Changes bar width based on value
	document.getElementById("bladderLabel").width = user.bladderLevel * 3;
	document.getElementById("restLabel").width = user.restLevel * 3;
	document.getElementById("hungerLabel").width = user.hungerLevel * 3;
	document.getElementById("moneyLabel").innerHTML ="Money: $" + user.money;
	user.luck += Math.floor(Math.random()*20)+1;
	
}

function eat() {
	
	var foodType = document.getElementById("foodType").value;
	
	if (user.hungerLevel >= 100) {
		document.getElementById("message").innerHTML ="You cannot eat any more.";
	}
	else {
		switch (foodType) {
			
			case "Pizza":
				if (user.money < 20.00) {
					   document.getElementById("message").innerHTML ="You don't have enough money to eat Pizza.";
					   break;
				   }
				   else {
					   document.getElementById("message").innerHTML ="You have eaten Pizza. You paid $20.00";
					   user.hungerLevel += 30;
					   user.bladderLevel -= 25;
					   user.money -= 20.00;
					   update();
					   break;
				   }
			case "Salad":
				if (user.money < 12.00) {
						   document.getElementById("message").innerHTML ="You don't have enough money to eat a Salad.";
						   break;
					   }
					   else {
						   document.getElementById("message").innerHTML ="You have eaten a Salad. You paid $12.00";
						   user.hungerLevel += 25;
						   user.bladderLevel -= 20;
						   user.money -= 12.00;
						   update();
						   break;
					   }
			case "Pancakes":
				if (user.money < 8.00) {
					   document.getElementById("message").innerHTML ="You don't have enough money to eat Pancakes.";
					   break;
				   }
				   else {
					   document.getElementById("message").innerHTML ="You have eaten Pancakes. You paid $8.00";
					   user.hungerLevel += 15;
					   user.bladderLevel -= 10;
					   user.money -= 8.00;
					   update();
					   break;
				   }
			case "Cheeseburger":
				if (user.money < 7.50) {
					   document.getElementById("message").innerHTML ="You don't have enough money to eat a Cheeseburger.";
					   break;
				   }
				   else {
					   document.getElementById("message").innerHTML ="You have eaten a Cheeseburger. You paid $7.50";
					   user.hungerLevel += 12;
					   user.bladderLevel -= 5;
					   user.money -= 7.50;
					   update();
					   break;
				   }
			case "Tacos":
				if (user.money < 5.00) {
					   document.getElementById("message").innerHTML ="You don't have enough money to eat Tacos.";
					   break;
				   }
				   else {
					   document.getElementById("message").innerHTML ="You have eaten Tacos. You paid $5.00";
					   user.hungerLevel += 10;
					   user.bladderLevel -= 5;
					   user.money -= 5.00;
					   update();
					   break;
				   }
			case "Fish and Chips":
				if (user.money < 15.00) {
					   document.getElementById("message").innerHTML ="You don't have enough money to eat Fish and Chips.";
					   break;
				   }
				   else {
					   document.getElementById("message").innerHTML ="You have eaten Fish and Chips. You paid $15.00";
					   user.hungerLevel += 30;
					   user.bladderLevel -= 15;
					   user.money -= 15.00;
					   update();
					   break;
				   }
			case "Steak":
				if (user.money < 25.00) {
					   document.getElementById("message").innerHTML ="You don't have enough money to eat Steak.";
					   break;
				   }
				   else {
					   document.getElementById("message").innerHTML ="You have eaten Steak. You paid $25.00";
					   user.hungerLevel += 40;
					   user.bladderLevel -= 20;
					   user.money -= 25.00;
					   update();
					   break;
				   }
			case "Ramen Noodles":
				if (user.money < 1.25) {
					   document.getElementById("message").innerHTML ="You don't have enough money to eat Ramen Noodles.";
					   break;
				   }
				   else {
					   document.getElementById("message").innerHTML ="You have eaten Ramen Noodles. You paid $1.25";
					   user.hungerLevel += 5;
					   user.bladderLevel -= 5;
					   user.money -= 1.25;
					   update();
					   break;
				   }
			default: break;
		}
		document.getElementById("eatSound").play();
		document.getElementById("lottoMessage").innerHTML = "";
	}
}

function work() {
	
	var workTime = document.getElementById("workHours").value;
	var moneyEarned = 0;
	
	if (workTime >= 24)
                {
                    document.getElementById("message").innerHTML ="That's probobly too long to work. Lets try a smaller time.";
                }
                else if (workTime <= 0)
                {
                    document.getElementById("message").innerHTML ="Well, that wasn't productive at all.....";
                }
                else
                {
                    moneyEarned += workTime * user.payRate;
                    document.getElementById("message").innerHTML ="You have worked for " + workTime + " hours and brought home $" + moneyEarned;
                    user.money += moneyEarned;
                    user.restLevel -= workTime * 3;
					user.hungerLevel -= workTime / 2 + 10;
					document.getElementById("lottoMessage").innerHTML = "";
					document.getElementById("workSound").play();
                    update();
                }
	
}

function sleep() {
	
	var sleepTime = document.getElementById("sleepHours").value;
	
	if (sleepTime > 10)
                {
                    document.getElementById("message").innerHTML ="That's probobly too long to sleep. Lets try a smaller time.";
                }
                else if (sleepTime <= 0)
                {
                    document.getElementById("message").innerHTML ="That's not really possible......";
                }
                else
                {
                    document.getElementById("message").innerHTML ="You have slept for " + sleepTime + " hours. Good Morning!";
                    user.restLevel += sleepTime * 10;
					user.hungerLevel -= sleepTime / 2 + 10;
					document.getElementById("lottoMessage").innerHTML = "";
					document.getElementById("sleepSound").play();
                    update();
                }
}

function useRestroom() {
	
	if (user.bladderLevel == 100) {
		document.getElementById("message").innerHTML ="You don't need to use the restroom.";
	}
	else {
		
	user.bladderLevel = 100;
	
	document.getElementById("message").innerHTML ="You have used the restroom. That feels better.";
	
	document.getElementById("lottoMessage").innerHTML = "";
	
	document.getElementById("restroomSound").play();
	
	update();
	}
}

function playLotto() {
	
	if (user.money < 10)
        {
            document.getElementById("message").innerHTML ="You don't have enough money to play.";
        }
        else
        {
			user.luck = Math.floor(Math.random()*20)+1;
            user.money -= 10.00;
            document.getElementById("message").innerHTML ="You have spent $10 on the lottery.";

            if (user.luck >= 18)
            {
                user.money += 100.00;
                document.getElementById("lottoMessage").innerHTML ="JACKPOT You have won $100!";
				document.getElementById("workSound").play();
            }
            else
            {
                document.getElementById("lottoMessage").innerHTML ="I'm sorry, you lose this time.";
            }
		
		user.restLevel -= 5;
		user.hungerLevel -= 5;
		user.bladderLevel -= 5;
		update();
		}
}

function buyHouse() {
	if (user.money < 50000){
		document.getElementById("message").innerHTML ="You don't have enough money to buy a house.";
		}
	else {
		location.href = 'index.html#pageWin';
		document.getElementById("winSound").play();
		}
}
		

function restart() {
	location.replace("index.html");
}

