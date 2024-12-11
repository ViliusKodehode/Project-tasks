//Asynchronous Javascript

// CALLBACK HELL! Old way of doing async javascript
// console.log("Start");

// Simulating asynchronous operations with nested callbacks
/* setTimeout(() => {
  console.log("Step 1: Preparing data...");
  setTimeout(() => {
    console.log("Step 2: Fetching data from API...");
    setTimeout(() => {
      console.log("Step 3: Processing data...");
      setTimeout(() => {
        console.log("Step 4: Saving data...");
        setTimeout(() => {
          console.log("Step 5: Operation complete!");
        }, 1000); // Step 5
      }, 1000); // Step 4
    }, 1000); // Step 3
  }, 1000); // Step 2
}, 1000); // Step 1

console.log("End"); */

// ES 6 (2015) Promises
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rndNumber = Math.random();
//     if (rndNumber > 0.5) {
//       resolve(rndNumber); //resolve er en variabel med en funksjon som verdi. vi sender vårt svar som parameter til denne funksjonen.
//     } else {
//       reject(new Error("FEILMELDING!!!!!"));
//     }
//   }, 1000);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// STANDARD ERROR HÅNDTERING / ERROR HANDLING
// try {
//   console.log(MinVariabelSomIkkeEksisterer);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("DETTE KJØRES UANSETT OM DET ER FEIL ELLER IKKE");
// }

//API - Application Programming Interface //Kommunikasjon mellom to pc'er
//RESTful API
//JSON - JavaScript Object Notation != JS Object (NESTEN IDENTISK)

// JS Objekt:
// const person = {
//   name: "Alice",
//   age: 25,
//   isStudent: true,
//   skills: ["JavaScript", "Python", "HTML"],
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
// };

// JSON Objekt:
/*
{
    "name": "Alice",
    "age": 25,
    "isStudent": true,
    "skills": ["JavaScript", "Python", "HTML"],
    "address": {
      "city": "New York",
      "zip": "10001"
    }
  }
*/

//Fetch
// Hva er en URL: Uniform Resource Locator.
// Eksempler på url:
// http:/vg.no  -> Nettstedsadresse
// 192.168.1.1/ -> Ip adresse
// C:\minMappe\minFil.txt  -> Path (Filsti)

//Tar i mot en URL til en ressurs som er et API endepunkt (API Endpoint)
//Har innebygd promise, så må vi bruke .then og .catch
//.json er også en async funksjonskall. HUSK Å CHAINE .then igjen etter denne!
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) =>
//     res.json().then((data) => {
//       console.log(data);
//     })
//   )
//   .catch((err) => {
//     console.log(err); //Returner en feilmelding
//   });

// fetch("https://random.dog/woof.json")
//   .then((res) =>
//     res.json().then((data) => {
//       getData(data.url);
//     })
//   )
//   .catch((err) => {
//     console.log(err); //Returner en feilmelding
//   });

// function getData(imgsrc) {
//   const dogImgElem = document.createElement("img");
//   dogImgElem.src = imgsrc;
//   dogImgElem.style.height = "200";
//   document.body.append(dogImgElem);
// }

const apiEndpoint = "http://gutendex.com/books";

//OBS: Denne funksjonen må være async fordi den bruker async funksjoner som fetch og .json
async function getBook(id) {
  //try/catch
  try {
    // const result = await fetch(`${apiEndpoint}/${id}`);
    const result = await fetch(`${apiEndpoint}`);
    const data = await result.json();
    renderSite(data);
  } catch (error) {
    // Error has happend
    console.log(error);
  }
}
function renderSite(data) {
  console.log(data);
}
getBook(1);
