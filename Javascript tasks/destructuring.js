//setInterval() - Funksjon som kjører seg på angitt tid i ms til den blir stoppet.

// const intervalID = setInterval(() => {
//   console.log("Dette kjører hvert sekund");
// }, 1000);
// console.log(intervalID);
// //KJØR ANNEN KODE.
// clearInterval(intervalID);

//setTimeout() - Funksjon som kjører noe på angitt tid i ms men kun en gang
// setTimeout(() => {
//   console.log("Dette kjører en gang etter angitt tid");
// }, 600000);

//Destructuring
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers[0]);

// Mye kode å skrive for å lagre verdier i en liste i forskjellige variabler
// let tall = numbers[0];
// let tall2 = numbers[1];
// let tall3 = numbers[2];
// let tall4 = numbers[3];
// let tall5 = numbers[4];
// let tall6 = numbers[5];

// console.log(tall, tall2, tall3, tall4, tall5, tall6);

// En linje kode for å hente ut og opprette variabler fra en liste
// const [firstNumber, secondNumber, thirdNumber, ...otherNumbers] = numbers;
// const [, , , thirdNumber1, ...otherNumbers2] = numbers; //Henter og lagrer fra index nr 3
// console.log(firstNumber, secondNumber, thirdNumber);
// console.log(thirdNumber1, otherNumbers2);
// console.log(otherNumbers);

// Destructuring a function that returns an array.
// function colors() {
//   return ["blue", "red", "green", "yellow"];
// }

// const [farge1, farge2, ...resten] = colors();
// console.log(farge1, farge2, resten);

// Destructuring a matrix (to dim tabell);
// const matrix = [
//   [1, 2, 3, 4, 5, 6, 7, 8],
//   [10, 11, 12, 13, 14, 15, 16, 17],
//   [20, 21, 22, 24, 25, 26, 27, 28],
//   [30, 31, 32, 33, 34, 35, 36, 37],
// ];
// console.log(matrix[2][4]);

// Uten destructuring
// matrix.forEach((element, index) => {
//   console.log(`Rad: ${index} Verdi: ${element[3]}`);
// });

// Med destructuring
// const position = [
//   ["x", 89, "tekst1"],
//   ["y", 14, "tekst2"],
//   ["z", -15, "tekst3"],
// ];

// position.forEach(([axis, value, tekst]) => {
//   console.log(`Axis: ${axis} Value: ${value} Tekst: ${tekst}`);
// });

// Destructuring of objects
const user = {
  name: "Nicklas",
  displayName: "NicklasDK96",
  hobbies: ["Gaming", "Coding", "Hund"],
  adresse: {
    streetName: "Gamlevegen",
    streetNumber: 666,
    postalCode: 6100,
    city: "Volda",
  },
  id: 59624812343,
};

// // Alias -> name: navn -> name får et nytt alias som er navn.
// // Destructuring av et object.
// const { displayName: gamerTag, name: navn, id, hobbies, adresse } = user;
// console.log(gamerTag, navn, id, hobbies, adresse);

// Dekonstuering av et objekt sendt som parameter inn i en funksjon.
// function processInfo({
//   displayName: gamerTag,
//   name: navn,
//   id,
//   hobbies,
//   adresse,
// }) {
//   console.log(gamerTag, navn, id, hobbies, adresse);
// }

// processInfo(user);

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

// Dekonstruering av en liste av objekter med en for of løkke.
for (let { name, male, age, hobbies } of people) {
  console.log(name, male, age, hobbies);
}
// Samme som den over, men denne er kanskje lettere å lese og forstå.
people.forEach(({ name, male, age, hobbies }) => {
  console.log(name, male, age, hobbies);
});
