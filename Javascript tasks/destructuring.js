// // const intervalID = setInterval(() =>{
// //     console.log("Dette kjører hvert sekund");
// // }, 1000);
// // console.log(intervalID);


// // clearInterval(intervalID);

// // setTimeout(()=>{
// //     console.log("Dette kjører en gang etter angitt tic");
// // },3000); 

// const numbers = [1,2,3,4,5,6];

// let tall = numbers[0];
// let tall2 = numbers[1];
// let tall3 = numbers[2];
// let tall4 = numbers[3];
// let tall5 = numbers[4];
// let tall6 = numbers[5];

// // console.log(tall,tall2,tall3,tall4,tall5,tall6);

// const [firstnumber, secondnumber, thirdnumber, ...othernumbers] = numbers;
// const [four,five,six] = othernumbers;
// // console.log(firstnumber,secondnumber,thirdnumber);
// // console.log(othernumbers);
// // console.log(four,five,six);

// function colors(){
//     return ["blue", "red", "green", "yellow"];

// }
// const [farge1,farge2, ... resten] = colors();
// console.log(farge1, farge2, resten);

// const matrix = [
//     [1,2,3,4,5,6,7,8],
//     [10,11,12,13,14,15,16,17],
//     [18,19,20,21,22,23,24,25],
//     [26,27,28,29,30,31,32,33],
// ]

// // matrix.forEach((element)=>{
// //     console.log(`rad: ${element[7]} Verdi: ${element[2]}`)
// // });

// const position = [
//     ["x", 89],
//     ["y", 14],
//     ["z", -15]
// ];

// position.forEach(([axis, value]) => {
//     console.log(`Axis: ${axis} Value: ${value}`);
// });

const user = {
    name: "Nicklas",
    displayName: "NicklasDK96",
    hobbies: ["Gaming","Coding", "Hund"],
    adresse: {streetName: "Gamlevegen", streetNumber: 666, postalCode: 6100, city: "Volda"},
    id: 53535342
};

// const {displayName, name: navn, id, hobbies, adresse,} = user;
// console.log(displayName,navn,id,hobbies,adresse);

// function processInfo({
//     displayName: gamerTag,
//     name: navn,
//     id,
//     hobbies,
//     adresse,

// }) {
//     console.log(gamerTag,navn,id,hobbies,adresse);
// }

// processInfo(user);


