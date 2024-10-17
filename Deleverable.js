//let is a keyword that can be re-assigned to another value
let myName = "Adekola Abdullateef";
console.log(myName);

//const is a keyword that can't be changed
const myAge = 10;
console.log(myAge);
//Example
const firstName = "Abdullateef";
const lastName = "Adekola";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);


//A String is a data type in double or single quote
const fullName = "Adekola Abdullateef Olalekan";
console.log("My fullname is " + fullName);

const myWeight = '65kg';
console.log("My weight is " + myWeight);

const myHeight = "3.2feet";
console.log("My height is " + myHeight);


//Boolean is a true or false statements
const nigeriaIsGreat = true;

if (nigeriaIsGreat) {
  console.log("Nigeria is great!");
} else {
  console.log("Nigeria is not great");
}

let a = 5;
let b = 4;
let c = a + b;

if (c = a + b) {
    console.log("The equation is correct");
} else {
    console.log("The equation is not correct");
}



//Some comparison operators are:
const daysOfTheWeek = 7;
// == comparing equal to
console.log(daysOfTheWeek == 6);
// === equal value and equal type comparison
console.log(daysOfTheWeek === "7");
// > greater than
console.log(daysOfTheWeek > 5);
// < less than
console.log(daysOfTheWeek < 5);
// != not equal to
console.log(daysOfTheWeek != 7);


//Functions are codes we can re-use
function addTwo(number) {
    return number + 2;
}
const answer = addTwo(3);
console.log(answer);

const welcome = "Welcome";
const back = "back";
const myUsername = "Abdullateef";
function greetings(welcome, back, Username) {
  console.log(`${welcome} ${back} ${Username}.`);
}
greetings(welcome, back, myUsername);


//Array is a special variable that can hold more than one value
const monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
console.log(monthsOfTheYear);
console.log(monthsOfTheYear[0]);
console.log(monthsOfTheYear[1]);
console.log(monthsOfTheYear[6]);
console.log(monthsOfTheYear[12]);


//Js Objects
const mentee = {
    firstName: "Abdullateef",
    lastName: "Adekola",
    age: 20,
    course: "Front-End",
    level: "Biginner",
};
console.log(mentee.firstName);
console.log(mentee.age);
console.log(mentee.level);


//Loops
let enrolledMentee = 0;
enrolledMentee = enrolledMentee + 1;
enrolledMentee = enrolledMentee + 1;
enrolledMentee = enrolledMentee + 1;
enrolledMentee = enrolledMentee + 1;
enrolledMentee = enrolledMentee + 1;
console.log(enrolledMentee);

let Mentor = 0;
while (Mentor < 10) {
    Mentor = Mentor + 1;
}
console.log(Mentor);
  








