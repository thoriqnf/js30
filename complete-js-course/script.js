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

var massMark = 78; // KG
var heightMark = 1.69; // Meters

var massJohn = 92;
var heightJohn = 1.95; // Meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn ;
console.log('Is Mark\'s higher thank John\'s? ' + markHigherBMI);
