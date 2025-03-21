

var result = 0/0;
console.log(result); // NaN ---> Not a Number
console.log("==========");

var n1;
console.log(n1+10);

console.log(`=== String to number conversion ===`);

var str = "JavaScript";
var result = +str;
console.log(result);


var greaterNumber = function(n1, n2){
    var result = n1 > n2 ? n1 : n2;
    console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);


var wordLength = function(word){
     var result = (word.length%2 == 0) ? "EVEN" : "ODD";
     return result;
}

var returnValue = wordLength("Google Chrome");
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("");
