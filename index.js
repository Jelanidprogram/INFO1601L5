let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

let str1 = "Hello World";
let name = "bob";
let age = 24;

console.log(str1);
console.log(typeof(name));
console.log(typeof(age));

let grade = 67;
if (grade < 50) {
  console.log("failed");
} else {
  console.log("Passed");
}

let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

for (let i = 0; i < 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

let time = Date.now();
console.log(time);

let now = new Date(time); // today's date

let date = new Date(2019, 11, 17, 3, 24, 0);
console.log(date.toLocaleDateString("en-US"));

console.log(`${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()}`); // Corrected to getFullYear() method

let difference = now - date;

let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);

let root = Math.sqrt(9);
let cubed = Math.pow(2, 3);
let roundDown = Math.floor(12.3453);
let roundUp = Math.ceil(12.3453);
let absolute = Math.abs(-34);

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    // sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  // calculate average
  return sum / people.length;
}

// create a collection of people
let people = [
  createPerson("Sally", 2.5, 60),
  createPerson("Ben", 3, 81),
  createPerson("Shelly", 1.7, 50)
];

console.log(avgBMI(people));

function printDate() {
  console.log(new Date().toLocaleTimeString());
}

//setInterval(printDate, 1000);
