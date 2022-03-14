//Create a function that takes two numbers as arguments and returns their sum.
function addition(a, b) {
	return a+b
}
//Convert Minutes into Seconds
function convert(minutes) {
	return minutes * 60
}
//Create a function that takes a number as an argument, 
//increments the number by +1 and returns the result
function addition(num) {
	return num +1
}
//Create a function that takes an array containing only numbers and 
//return the first element.
function getFirstValue(arr) {
	return arr[0]
}
//There is a single operator in JavaScript, capable of providing the 
//remainder of a division operation. Two numbers are passed as parameters. 
//The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
	return x % y
}
//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
    totalchickens = chickens * 2
    totalcows = cows * 4
    totalpigs = pigs * 4
    return totalchickens + totalcows + totalpigs	
    }
 //Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.   
 function divisibleByFive(n) {
	return n%5===0;
	}
  //Create a function that takes two strings as arguments and return either true or false
  //depending on whether the total number of characters in the first string is equal to the total
  //number of characters in the second string.
  function comp(str1, str2) {
	return str1.length === str2.length;
//Write a function that takes a string name and a number num (either 0 or 1) and return
//"Hello" + name if num is 1, otherwise return "Bye" + name.
function sayHelloBye(name, num) {
    let cname = name.charAt(0).toUpperCase() + name.slice(1);
        if(num === 1){
            return "Hello " + cname;
        }else if (num === 0){
            return "Bye " + cname;
        }
    }