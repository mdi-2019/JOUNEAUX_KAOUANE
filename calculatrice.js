// Lib includes
const readline = require('readline');
const mathjs = require('mathjs');
const sci = require('./scientific');

// Constant
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables
var mode = 0;
var lastresult = 0;

//Function
var chooseMode = function () {
    rl.question('Which mode do you want to use :\n1. Basic mode\n2. Scientific mode\n', (answer) => {
	  mode = answer;
	  if(mode == "1" || mode == "2"){
	  	if (mode == "1") {
	  		console.log("You choose the mode : Basic");
			basic();
		} else { 
			console.log("You choose the mode : scientific");
			console.log(sci.run(lastresult, rl));
		}
	  	rl.close();
	  }
	  chooseMode();
	});
};

//MAIN CODE
chooseMode();