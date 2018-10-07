/*
  Variables and data types
*/

// var fisrtName = 'John';
// console.log(fisrtName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;

// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// var 3years = 3;

/*
  Variable mutation and type coercion
*/

// var firstName = 'John';
// var age = 28;
// console.log(firstName + ' ' + age);

// //Type coercion
// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + 'Is he married? ' + isMarried);

// //Variable Mutation
// age = 'twenty nine';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);


// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);


/*
  Basic operators
*/

// var year, yearJohn, yearMark
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical operators

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder)

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Thoriq master coding');

// var x;
// console.log(typeof x) ;

/**
 * Operator precendence
 */

//  // Precedence = Urutan

// var now = 2018;
// var yearJohn = 1989;
// var fullAge  = 18;

// // Multiplr operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;

// console.log(average);

// // Multiple Assignments
// var x, y;
// x = y = (3 + 5 ) * 4 -6; // 8 * 4 - 6 // 32- 6 // 26 

// console.log(x, y);

// // 2 + 4 + 5 >> Left to Right

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);

// // x = x + 1;
// // x += 1;
// x++
// // All Same above
// console.log(x);


// Coding Challenge 1

// var massMark = 78; // KG
// var heightMark = 1.69; // Meters

// var massJohn = 92;
// var heightJohn = 1.95; // Meters

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// var markHigherBMI = BMIMark > BMIJohn ;

// if (BMIMark > BMIJohn) {
//   console.log('BMI Mark is higher than John\'s');
// } else {
//   console.log('BMI John is higher than Mark\'s');
// }
/**
 * If / else statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

//  if (civilStatus === 'married'){
//    console.log(firstName + ' is married!');
//  } else {
//    console.log(firstName + ' will hopefully marry soon :)');
//  }

// var isMarried = true;

// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }

/**
 * Boolena logic
 */

// var firstName = 'John';
// var age = 20;
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20){
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a man.');
// }else{
//   console.log(firstName + ' is an adults.');
// }

/**
 * The Ternary Operator and Switch Statements
 */

//  var firstName = 'John';
//  var age = 16;

//  age >= 18 ? console.log(firstName + ' drinks beer.')
//  : console.log(firstName + ' drinks juice.');
 
//  var drink = age >= 18 ? 'beer' : 'juice';
//  console.log(drink);
 
 // Switch statement
//  var job = 'teacher';
//  switch (job) {
//   case 'teacher':
//       console.log(firstName + ' teaches kids how to code.');
//   case 'driver':
//     console.log(firstName + ' drives an uber in Lisbon');
//   case 'designer':
//     console.log(firstName + ' designs beautiful websites.');
//   default: 
//    console.log(firstName + ' does something else.');
//  }

// var firstName = 'John';
// var age = 10;
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20){
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a man.');
// }else{
//   console.log(firstName + ' is an adults.');
// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.'); break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenger.'); break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a man.'); break;
//   default: 
//     console.log(firstName + ' is an adult.'); break;
// }

/**
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', NaN
// Truthy values: Not falsy values

// var height;

// if (height) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }

// Coding challenge 2
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn , scoreMike, scoreMary );

if (scoreJohn > scoreMike){
  console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn){
  console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
  console.log('There is a draw');
}
