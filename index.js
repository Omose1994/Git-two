//	In the JavaScript file create the following Boolean variables and choose what values they hold: 
// a. isHotOutside
// b. isWeekday
// c. hasMoneyInPocket


var isHotOutside = true;
var isWeekday = false;
var hasMoneyInPocket = true;


//3.	Create the following variables and assign them values (the assigned values should not be Boolean):
//a.	costOfMilk
//b.	moneyInWallet
//c.	thirstLevel (how thirsty you are on a scale of 1-10)

let costOfMilk = 3;
let moneyInWallet = 20;
let thirstLevel = 4;

// Using the variables you created above and Boolean operators, create variables for the following scenarios:
// shouldByIcecream – this should be true if it is hot outside and there is money in your pocket
// willGoSwimming – this should be true if it is hot outside and it is not a weekday
// isAGoodDay – this should be true if it is hot outside, there is money in your pocket, and it is not a weekday
// willBuyMilk – this should be true if it is hot outside, and thirstLevel is greater than or equal to 3,
// and moneyInWallet is greater than or equal to 2 times the cost of milk.

//Example: If I had the variables isWeekday and isSummer and I was going to create a variable isSchoolDay, I would do something like the following:
//var isSchoolDay = isWeekday && !isSummer


var shouldBuyIcecream = isHotOutside && hasMoneyInPocket; 

if (shouldBuyIcecream) {
    console.log ("You should buy icecream because it is hot outside and there is money in your pocket")
}

var willGoSwimming = isHotOutside && !isWeekday; 

if (willGoSwimming) {

    console.log ("It is a perfect day to go swimming");

}


var isAGoodDay = shouldBuyIcecream || isWeekday;


if (isAGoodDay) {

    console.log ("It is a really good day");

}

var willBuyMilk = isHotOutside && (thirstLevel >= 3) && (moneyInWallet >= costOfMilk ** 2);


if (willBuyMilk) {
    
    console.log ("Chocolate Milk is delicious");

}



//5.	Log the values to the console.
//6.	Create a new file called loops.js and link it to your HTML file. Create the following loops with any variables you feel are needed:
//a.	A while loop that prints all even numbers from 0 to 100
//b.	A while loop that prints every 3rd number going backwards from 100 until we reach 0
//c.	A for loop that prints every other number from 1 to 100
//d.	A for loop that prints every number from 0 to 100, but if the number is divisible by 3, it prints “Hello” instead of the number, and if the number is divisible by 5, it prints “World” instead of the number, and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number.
