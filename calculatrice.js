// Lib includes
const readline = require('readline');

// Constant
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables
var mode = 0

//Function
var chooseMode = function () {
    rl.question('Which mode do you want to use :\n1. Basic mode\n2. Scientific mode\n', (answer) => {
	  mode = answer;
	  if(mode != "1" && mode != "2"){
	  	chooseMode(); //Calling this function again to ask new question
	  } else {
	  	console.log("You choose the mode : " + (mode=="1"?"Basic":"scientific"));
	  	rl.close();
	  }
	});
};

//MAIN CODE
chooseMode();