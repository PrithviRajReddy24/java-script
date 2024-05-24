// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;
// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive");

// function consoleLogging() {
//     console.log('The names Reddy RajReddy');
// }
// consoleLogging();
// // consoleLogging();
// // consoleLogging();

// function demoGraphics(name, bornyear) {
//     //console.log(name, bornyear)
//     const details = `Hello my name is ${name} and I was born in ${bornyear} year!`
//     return details;
// }
// const returnDetails = demoGraphics('Prithvi', 1993);
// console.log(returnDetails);

// const newDetail = demoGraphics('Tony', 2006);
// console.log(newDetail);

// //functional Declaration
// function calAge1(birthYear) {
//     return 2024 - birthYear;
// }

// const myage = calAge1(1993);
// console.log(myage);

// //functional expression
// const calAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }
// const myage2 = calAge2(1992);
// console.log(myage, myage2);

// //arrow function
// const calAge3 = birthYear => 2037 - birthYear;
// const myage3 = calAge3(1993);
// console.log(myage3);

// const yearsUntilRetirement = (birthYear, firstname) => {
//     const myage4 = 2037 - birthYear;
//     const retirementAge = 65 - myage4;
//     return `My name is ${firstname} and I am going to retire in ${retirementAge} yers`;
// }

// console.log(yearsUntilRetirement(1993, 'prithvi'));
// console.log(yearsUntilRetirement(2006, 'tony'));

// function cutFruits(friuts) {
//     return friuts * 4;
// }

// function fruitjuices(apples, oranges) {
//     const applepieces = cutFruits(apples);
//     const orangeoieces = cutFruits(oranges);
//     const juices = `Juices with ${applepieces} apple pieces and ${orangeoieces} orange pieces are made`;
//     return juices;
// }
// console.log(fruitjuices(3, 4));

// const ageCal = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstname) {
//     const age = ageCal(birthYear);
//     const retirementAge = 65 - age;

//     if (retirementAge > 0) {
//         console.log(`Hi I am ${firstname} and I have ${retirementAge} years until retirement`);
//         return retirementAge;
//     } else {
//         console.log("I have already retired🎉🥳");
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1993, 'Prithvi'));
// console.log(yearsUntilRetirement(2006, 'tony'));

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// Your tasks:
// Create an arrow function calcAverage to calculate the average of 3 scores.
//  This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas,
// and assign the value returned from the calcAverage function to them
// (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters
// (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory
// points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas
//  instead of hard-coded values).
// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// //console.log(calcAverage(3, 4, 5));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// //console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${scoreDolphins} vs ${scoreKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${scoreKoalas} vs ${scoreDolphins}`);
//     } else {
//         console.log(`No team wins....`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Prithvi';
// const friend2 = 'raj';
// const friend3 = 'reddy';

// const friends = ['Prithvi', 'raj', 'reddy'];
// console.log(friends);

// const y = new Array(1991, 1992, 1993, 1994);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// // only primitive values are immutable, Array is nt a primitive value.
// friends[2] = 'velma'
// console.log(friends)

// const name1 = 'India';
// const newArray = [name1, 'Telangana', 'Nizamabad', 20 - 10, friends];
// console.log(newArray);
// console.log(newArray.length);

// const calAge = function (yearsofBirth) {
//     return 2037 - yearsofBirth;
// }

// const years = [1991, 1993, 1995, 1997, 1994];
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[2]);
// const age4 = calAge(years[years.length - 1]);
// console.log(age1, age2, age3, age4);

// // const bill = 100;
// // const calcTip = function (bill) {
// //     if (bill <= 300 && bill >= 50) {
// //         console.log(bill * 0.15)
// //     } else {
// //         console.log(bill * 0.20)
// //     }
// // }
// // console.log(calcTip(bill));

// // const bill = 100;
// // const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// // console.log(`The bill was ${bill} and he tip was ${tip} and the total bill is ${bill + tip}`);

// // const calcTip = function (bill) {
// //     return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// // }

// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // console.log(bills, tips);

// // const calcTip = function (bill) {
// //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // }

// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // console.log(bills, tips, totals);

// const demo = {
//     firstname: 'Prithviraj',
//     lastname: 'Reddy',
//     age: 30,
//     ocupation: 'Learning',
//     friends: ['Tony', 'Tommy', 'Snowy']
// };
// console.log(demo);
// console.log(demo.lastname);
// console.log(demo['lastname']);

// const nameKey = 'name';
// console.log(demo['first' + nameKey]);
// console.log(demo['last' + nameKey]);

// demo.location = 'India';
// demo['insta'] = 'Not a part of insta';
// console.log(demo);

// const knowAboutDemo = prompt('what do you want to know about demo? firstname,lastname,age,ocupation,friends,location,insta')
//  console.log(demo[knowAboutDemo]);
// if (demo[knowAboutDemo]) {
//     console.log(demo[knowAboutDemo]);
// } else {
//     console.log('wrong option chose among these - firstname,lastname,age,ocupation,friends,location,insta');
// }

// console.log(`${demo.firstname} has ${demo.friends.length} friends and his best friend is ${demo.friends[0]}`)

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Happy Brithday to you ${rep}`)
// }

// const friends = ['Prithvi',
//     'raj',
//     'reddy',
//     1993,
//     45.7,
//     true];
// const type = [];
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i], typeof friends[i]);
//     type[i] = typeof friends[i];
// }
// console.log(type);

// const years = [1991, 1992, 1993, 1994, 1995];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages)

// console.log(`______only strings_____`)
// for (let i = 0; i < friends.length; i++) {
//     if (typeof (friends[i]) !== 'string') continue;
//     console.log(friends[i], typeof (friends[i]));
// }

// console.log(`_____stop after encountering number_____`)
// for (let i = 0; i < friends.length; i++) {
//     if (typeof (friends[i]) === 'number') break;
//     console.log(friends[i], typeof (friends[i]));
// }

// for (let i = friends.length - 1; i >= 0; i--) {
//     console.log(i, friends[i]);
// }
// const exerTypes = ['pushups',
//     'pullups',
//     'cycling'
// ]

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------starting exercise ${exercise} ${exerTypes}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} ${exerTypes} -> Exercise Types repetition ${rep}🏋🏼‍♂️`);
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE : liftine weights repetition ${rep}`);
//     rep++;

// }

// let dice = Math.trunc(Math.random() * 4) + 1;
// // console.log(dice);
// while (dice !== 4) {
//     console.log(`you rolles a dice ${dice}`);
//     dice = Math.trunc(Math.random() * 4) + 1;
//     if (dice === 4) console.log(`loop is about to end`);

// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(`The bill for the food is -> [${bills}],
// The tip for the bill is -> [${tips}],
// The total bill is -> [${totals}]`);
