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
// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreJohn , scoreMike, scoreMary );

// if (scoreJohn > scoreMike){
//   console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn){
//   console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//   console.log('There is a draw');
// }


// function counting retirement

//buat function itung umur

// function ngitungUmur(tahunLahir){
//   return 2018 - tahunLahir;
//   console.log(tahun);
  
// }

// function ngitungPensiun (tahunLahir, nama){
//   var umur = ngitungUmur(tahunLahir);
//   var pensiun = 65 - umur;

//   if (pensiun <= 0){
//     console.log('umurnya si ' + nama + ' ' + umur +  ' dia udah pensiun cuy');
//   } else {
//     console.log('umurnya si ' + nama + ' ' + umur + ' dia pensiun ' + pensiun + ' tahun lagi');
//   }
// }

// ngitungPensiun(1990, 'toyik');
// ngitungPensiun(1940, 'toyik tua');

/**
 * Function Statements and Expressions
 */

 // Function declaration
 // function whatDoYouDo (job, firsName) {}

 // Function expression

//  var opoKerjaMu = function (kerja, jenengmu){
//    switch (kerja){
//      case 'pelacur': 
//      return jenengmu + 'Kerjane ngewe';
//      case 'germo':
//      return jenengmu + 'Kerjane nyenengno'
//    }
//  }


// console.log(opoKerjaMu('pelacur', 'iffah'));
 

/**
 * Array
 */

// var john = ['jono', 'lono', 1995, true];

// john.push('blue'); // Naroh paling belakang
// john.unshift('koplak') // Naroh paling depan
// john.pop(); //Ngilangin yang paling belakang
// john.shift(); // Ngilangin yang paling depan

// console.log(john);
// console.log(john.indexOf(1990)); // indexOf buat ngitung dimana posisi array, dimulai dari 0 dan kalo ga ada akan di minuskan


// var tesDesigner = john.indexOf('lono') === -1 ? 'Jono bukan designer' : 'Jono seorang designer';
// console.log(tesDesigner);


// Coding challenge 3
// function tripCalculator(bill) {
//   var percentage;
//   if (bill < 50){
//     percentage = .2;
//   } else if (bill >= 50 && bill < 200){
//     percentage = .15;
//   } else {
//     percentage = .1;
//   }
//   return percentage * bill;
// }

// // console.log(tripCalculator(100));

// var bills = [124, 48, 268];

// var tips = [tripCalculator(bills[0]),
//             tripCalculator(bills[1]),
//             tripCalculator(bills[2])];

// var finalNilai = [bills[0] + tips[0],
//                   bills[1] + tips[1],
//                   bills[2] + tips[2]]
// console.log(tips);
// console.log(finalNilai);

/**
 * Objects and properties
 */

  // var john = {
  //   firstName: 'John',
  //   lastName: 'Smith',
  //   birthYear: 1990,
  //   family: ['Ucup', 'Sandi', 'Uno'],
  //   job: 'Pelacur',
  //   isMarried: false
  // };

  // console.log(john.firstName);
  // var x = 'family';
  // console.log(john[x]);
  
  // john.job = 'Germo';
  // console.log(john.job);
  
  // john.isMarried = true;
  // console.log(john.isMarried);
  
  // john['isMarried'] = false;
  // console.log(john.isMarried);
  
  /**
   * Object and methods
   */

  // var john = {
  //   firstName: 'John',
  //   lastName: 'Smith',
  //   birthYear: 1990,
  //   family: ['Ucup', 'Sandi', 'Uno'],
  //   job: 'Pelacur',
  //   yearNow: 2019,
  //   isMarried: false,
  //   calcAge: function(){
  //     this.age = this.yearNow - this.birthYear;
  //   }
  // };

  // // console.log(john.calcAge());
  // // john.age = john.calcAge();


  // // john.calcAge();
  // console.log(john);
  

  // Coding Challenge 4

  // var jono = {
  //   fullName: 'Jono Lono',
  //   mass: 92,
  //   height:1.95,
  //   calcBMI: function(){
  //     this.bmi = this.mass / (this.height * this.height);
  //     return this.bmi;
  //   }
  // }

  // var bono = {
  //   fullName: 'Bono Lono',
  //   mass: 105,
  //   height: 1.75,
  //   calcBMI: function () {
  //     this.bmi = this.mass / (this.height * this.height);
  //     return this.bmi;
  //   }
  // }


  // jono.calcBMI(); bono.calcBMI();
  // console.log(jono, bono);
  

  // if (jono.bmi > bono.bmi){
  //   console.log(jono.fullName + 'BMI jono lebih besar dari ' + bono.fullName);
  // } else {
  //   console.log(bono.fullName + 'BMI jono lebih besar dari ' + jono.fullName);
  // }

  /**
   * Loop and iteration
   */

// For loop
  // for (var i = 1; i < 20; i+=2 ){
  //   console.log(i);
    
  // }
  
  // var john = ['John', 'Smith', 1990, 'designer', false];

  // for (var i = 0; i < john.length; i++){
  //   console.log(john[i]);
  // }

// While loop

// var i = 0;
// while(i < john.length){
//   console.log(john[i]);
//   i++;
// }

// Continue and break statements

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i < john.length; i++){
//   if (typeof john[i] !== 'string') {
//     continue; 
//   }
//   console.log(john[i]);
// }


// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') {
//     break;
//   }
//   console.log(john[i]);
// }

// Looping backwards
// for (var i = john.length -1; i >= 0; i--){
//   console.log(john[i]);
// }

