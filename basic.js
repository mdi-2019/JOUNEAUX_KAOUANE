// Lib includes
const readline = require('readline');

// Constant
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables
var a ;
var b ;
var mode;

//Function
var choix_calcul = function () {
     rl.question('Which one operation do you want\n Ex ; add 1 2 => 3\n list :\n Add x y => x+y\n Sub x y => x-y\n', (answer) => {
      var words = answer.split(" ");
      rl.close();
      switch (words[0])
      {
          case "Add":
            return add(words);
        break;
          case "Sub":
            return sub(words);
        break;
        default:
        console.log("wrong operation");
        return "null";
      }
	  
    })
}//end fonction choix_calcul

var add=function(words){
    console.log(parseInt(words[1])+parseInt(words[2]));
}

var sub=function(words){
    console.log(parseInt(words[1])-parseInt(words[2]));
}

//MAIN CODE
choix_calcul();