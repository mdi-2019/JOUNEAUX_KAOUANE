var lastRes = 0;
var readline = null;

var askCalc = function () {
    rl.question('Which operation do you want\nEx : pow 3 2 => 9\nlist will show you the list of operations and exit will quit\n', (answer) => {
	  if(answer == "list"){
	  	console.log("pow X Y => X^Y");
	  	console.log("sqrt X => sqrt(X)");
	  	console.log("if X is omitted the last result is used (at start 0)");
	  } else if(answer == "exit") {
	  	console.log("Goodbye");
	  	return lastRes;
	  } else {
	  	var words = answer.split(" ");
	  	switch (words[0]){
	  		case "pow":
	  			return pow(words);
	  		break;
	  		case "sqrt":
	  			return sqrt(words);
	  		break;
	  	}
	  }
	  askCalc(); 
	});
};

function pow(words){
	switch(words.length){
		case 3:
			var a = parseInt(words[1]);
			var b = parseInt(words[2]);
			return Math.pow(a,b);
		break;
		case 2:
			var a = parseInt(words[1]);
			return Math.pow(lastRes,a);
		break;
		default:
			return false;
	}
}
function sqrt(words){
	switch(words.length){
		case 2:
			var a = parseInt(words[1]);
			return Math.pow(a,0.5);
		break;
		case 1:
			return Math.pow(lastRes,0.5);
		break;
		default:
			return false;
	}
}

module.exports = {
  run: function (lastResult, readline) {
  	lastRes = lastResult;
  	rl = readline
    while(true){
    	var value = askCalc();
	    if (value === false) {
	    	console.log("Wrong operation");
	    } else {
	    	return value;
	    }
    }
  }
};