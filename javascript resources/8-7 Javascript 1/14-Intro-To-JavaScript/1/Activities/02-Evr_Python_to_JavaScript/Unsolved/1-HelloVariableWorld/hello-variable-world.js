// Create a variable called "name" that holds a string
var name = "Homer Simpson";
// Create a variable called "country" that holds a string
var country = "The United States";
// Create a variable called "age" that holds an integer
var age = 27;
// Create a variable called "hourlyWage" that holds an integer
var hourlyWage = 20;
// Calculate the "dailyWage" for the user
var dailyWage = hourlyWage * 8;
// Create a variable that holds a number as a string
var weeklyhours = "40";
// Create a variable called 'weeklyWage' that converts a string into an integer
var weeklyWage = hourlyWage * Number(weeklyhours);
// Create a variable called "satisfied" that holds a boolean
var satisfied = true;
// Print out "Hello <name>!"
console.log("Hello " + name + "!");
// Print out what country the user entered
console.log("You live in " + country);
// Print out the user's age
console.log("You're " + age + " years old.");
// Print out the daily wage that was calculated
console.log("You make " + dailyWage + " per day.");
// Print out the weekly wage that was calculated
console.log("Your weekly wage is " + weeklyWage);
// Using an IF statement to print out whether the users were satisfied
if(satisfied==true){
  console.log("You are satisfied with your pay");
} else {
  console.log("You are not satisfied with your pay");
}
