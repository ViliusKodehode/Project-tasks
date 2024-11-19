// Oppgave 1
// Variabler og Datatyper
// Opprett en variabel som inneholder navnet ditt og skriv det ut i konsollen.
// Lag en funksjon som tar to tall som argumenter og returnerer summen.
console.log ('\x1b[36m%s\x1b[0m', 'Task 1 or 1.1');

let name = "Vilius";
console.log("My name is:", name);

function sum(tall1,tall2){
    return tall1 + tall2;
}
console.log("Total number:", sum(6,5));


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------",);
// Oppgave 2
// Beregning av alder
// Lag en funksjon som tar fødselsår som number input og returnerer alderen i år, og skriv ut teksten "Jeg er X år gammel".
// Her kan du hardkode 2024 som gjeldende år. 
console.log ('\x1b[36m%s\x1b[0m', 'Task 2 or 1.2');

function fodselsaar(aar){
    age = 2024 - aar;
     return console.log("Jeg er " + age + " gammel år");
}
fodselsaar(1934);


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 3
// Betinget Logikk
// Lag en funksjon som sjekker om et tall er positivt, negativt eller null.
console.log ('\x1b[36m%s\x1b[0m', 'Task 3 or 1.3');

function checknumber(tall){
    if (tall === 0){
        return console.log("Your number " + tall + " is zero");
    }
    else if (tall > 0 ){
        return console.log("Your number " + tall + " is positive");
    }
    else if (tall <= -1){
        return console.log("Your number " + tall + " is negative");
    }
}
checknumber(-2);


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 4
// Skriv ut alle tall fra 1 til 20 med en for-løkke.
// Lag en funksjon som returnerer summen av alle partall mellom 1 og 100.
console.log ('\x1b[36m%s\x1b[0m', 'Task 4 or 1.4');


for (let i = 0; i<=20; i++){
    console.log(i);
}

////////////////////////////////////////////////////////////////////////////

function suball(total){
    if (total <= 100){
        for (let i = 1; i <= total; i++){
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    } else if(total > 100){
        return console.log("Choose number from 1 to 100");
    }
}

suball(100);


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 5 
// Lag en funksjon som tar en streng som input og returnerer den omvendte strengen.
// Lag en funksjon som bytter om det 3 og 5 og 7 tegnet i en input string. 
// Rekkefølgen blir 5,7,3. Funksjonen skal gi feilmelding hvis dette ikke går.
console.log ('\x1b[36m%s\x1b[0m', 'Task 5 or 1.5');

function reversestring(word){
    let reversedword = "";
    for (let i = word.length - 1; i >= 0; i--){
        reversedword += word[i];
    }
    return reversedword;
}  
console.log(reversestring("house"));

////////////////////////////////////////////////////////////////////////////

function threefiveseven(word){
    if (word.length < 8) {
        return "Word is too short";
    }

    let letter1 = word[2];
    let letter2 = word[4];
    let letter3 = word[6];

    let finallletters = letter2 + letter3 + letter1;
    return finallletters; 
}
console.log(threefiveseven("Computer"));


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 6
// Array Manipulering
// Lag en funksjon som finner medianen av alle tallene i en liste (array).
// Lag en funksjon som returnerer antall unike verdier i et array.
console.log ('\x1b[36m%s\x1b[0m', 'Task 6 or 1.6');

function medianen(talllist){
    if (talllist.length === 0) {
        return "Medianen can't be found";
    }
    for (let i = 0; i < talllist.length; i++) {
        for (let o = 0; o <talllist.length - i - 1; o++){
            if (talllist[o] > talllist[o +1]) {
                let numbers = talllist[o];
                talllist[o] = talllist[o + 1]
                talllist[o + 1] = numbers
            }
        }
    }
    let length = talllist.length;
    let mid = length / 2;

    if (length % 2 === 0) {
        let mid1 = talllist[mid -1];
        let mid2 = talllist[mid];
        return (mid1 + mid2) / 2;
    } else {
        return talllist[(mid - 0.5)];
    }
}
console.log(medianen([8,14,20,28,31]));

////////////////////////////////////////////////////////////////////////////

function unique(talllist){
    if (talllist.length === 0){
        return "Maybe, add some numbers in a list? Don't forget use array for it []";
    }
    let uniquenumbers = new Set(talllist);
    return uniquenumbers.size;
}
console.log(unique([5,5,13,15,17,12,16]))


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 7
// Seleksjonsstrukturer
// Lag en funksjon som sjekker om et gitt år er et skuddår.
// Lag en funksjon som som tar en string med tegn bestående kun av "><v^". Hvert av disse tegnene representerer en retning. 
// Skriv ut retningene med tekst for stringen. 
console.log ('\x1b[36m%s\x1b[0m', 'Task 7 or 1.7');

function leapyear(year){
    if (year % 4 === 0){
        console.log("It's a leap year")
    } else {
        console.log("It's not a leap year")
    }
}
leapyear(2019);

////////////////////////////////////////////////////////////////////////////

function arrowheads(direction){
    for (let symbols of direction) {
        if(symbols === ">") {
            console.log("Right arrowhead");
        } else if (symbols === "<") {
            console.log("Left arrowhead");
        } else if (symbols === "v") {
            console.log("Down arrowhead");
        } else if (symbols === "^") {
            console.log("Up arrowhead");
        } else {
            console.log("Provided symbol is not existing, try again");
        }
    }

}
arrowheads(">><<vv");


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 8
// Matematiske Beregninger
// Lag en funksjon som beregner faktorisering til et tall. 
// En faktorial til tallet 10 = 1*2*5. Faktorialer kan kun bestå av primtall. 12 faktorisert = 1*2*2*3.
console.log ('\x1b[36m%s\x1b[0m', 'Task 8 or 1.8');

function faktorialen(tall){
    let faktor = [];
    let devide = 2;
    while (tall > 1) {
        while (tall % devide === 0) {
            faktor.push(devide);                                                                           /// The push() method adds new items to the end of an array.
            tall /= devide;                                                                                /// The push() method changes the length of the array.
        }                                                                                                  /// The push() method returns the new length.
        devide++;
    }
    return console.log(faktor);
}

faktorialen(10);


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 9
// Beregning av alder
// Lag en funksjon som tar fødselsdato som string input og returnerer alderen i år, måneder og dager basert på dagens dato.
// Sjekk ut Date objektet ved f.eks. console.log(new Date().toString());
console.log ('\x1b[36m%s\x1b[0m', 'Task 9 or 1.9');

function datecheck(date){
    let currentdate = new Date();                                                       // new Date() Object of current date and time
    let borndate = new Date(date);
    let personyear = currentdate.getFullYear() - borndate.getFullYear();                // 4 digit year a date object
    let personmonth = currentdate.getMonth() - borndate.getMonth();                     // 0 - 11 month date object
    let personday = currentdate.getDate() - borndate.getDate();                         // 1-31 days date object

    if (personmonth < 0) {
        personyear --;
        personmonth += 12;
    }

    if (personday < 0) {
        personmonth--;
        let daysPreviousMonth = new Date(
            currentdate.getFullYear(),
            currentdate.getMonth(),
            0
        ).getDate();
        personday += daysPreviousMonth;
    }

    return `A person is ${personyear} years, ${personmonth} months, ${personday} days old `;                       // `` symbols are needed for use of $
}

console.log(datecheck("2007-5-20"));


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 10
// Array-søk
// Lag en funksjon som tar et array og en verdi som input og sjekker om verdien finnes i arrayet (returner true eller false).
console.log ('\x1b[36m%s\x1b[0m', 'Task 10 or 1.10');

let listofwords = ["Apple", "Banana", "Peer", "Strawberry", "Grapes", "Watermelon", "Orange"];

function check(fruit){
    for (let i = 0; i < listofwords.length; i++){
        if (listofwords[i] === fruit){
            return console.log(true);
        }
    }
    return console.log(false);
}
check("Potato");


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 11
// Fibonacci-sekvens
// Lag en funksjon som returnerer de første n tallene i Fibonacci-sekvensen.
console.log ('\x1b[36m%s\x1b[0m', 'Task 11 or 2.1');

function fibonacci(number) {
    if (number <= 0) {
        return [];
    }
    if (number === 1) {
        return [0];
    }
    if (number === 2) {
        return [0, 1]
    }

    let sekvensen = [0, 1];
    for (let i = 2; i < number; i++) {
        let nextnumber = sekvensen[i - 1] + sekvensen[i - 2];
        sekvensen.push(nextnumber);
    }

    return sekvensen
} 
console.log(fibonacci(7));

console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 12
// Palindromsjekk
// Lag en funksjon som sjekker om en gitt streng er et palindrom.
console.log ('\x1b[36m%s\x1b[0m', 'Task 12 or 2.2');

function palindrome(word){
    let palindrome = word.split('').reverse().join('');
    if (palindrome === word){
        return "It's a palindrome";
    } else {
        return "It's not a palindrome";
    }
}    
console.log(palindrome("noon"));


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 13
// Matrise (2D Array) Summering
// Lag en funksjon som summerer alle verdiene i en todimensjonal matrise (array av arrays).
console.log ('\x1b[36m%s\x1b[0m', 'Task 13 or 2.3');

function sumarrays(tall) {
    let sum = 0;

    for (let line of tall) {
        for (let value of line) {
            sum += value
        }
    }
    return sum;
}
console.log(sumarrays([[4,8,10,20],[2,4,5,10]]));


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 14
// Sortering
// Lag en funksjon som sorterer en liste med tall uten å bruke innebygde sorteringsfunksjoner (bruk f.eks. boblesortering).
console.log ('\x1b[36m%s\x1b[0m', 'Task 14 or 2.4');

function sortering(tall){
    let number = tall.length;
    for(let i = 0; i < number - 1; i++ ) {
        for (let o = 0; o < number - i - 1; o++){
            if (tall[o] > tall[o + 1]) {
                let fornow = tall[o];
                tall[o] = tall[o + 1];
                tall[o + 1] = fornow;
            }
        }
    }
    return tall;
}
console.log(sortering([20,5,12,13,31,8, 18]));

console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 15
// Filtrering av objekter i array
// Lag en funksjon som tar en liste med objekter og filtrerer ut de objektene som oppfyller en bestemt betingelse.
console.log ('\x1b[36m%s\x1b[0m', 'Task 15 or 2.5');

function filtrering(data) {
    return data.filter(country => population => capital);                                         
}
let countries = [
    {country: "Norway", population:"5.49 millions ", capital: "Oslo"},
    {country: "Sweden", population:"10.52 millions ", capital: "Stockholm"},               // The filter() method creates a new array filled with elements that pass a test provided by a function.
    {country: "Finland", population:"5.56 millions ", capital: "Helsinki" },               // The filter() method does not execute the function for empty elements. 
    {country: "Denmark", population:"5.93 millions ", capital: "Copenhagen" },             // The filter() method does not change the original array.
    {country: "Iceland", population:"0.38 millions ", capital: "Reykjavik" },
];
console.log(filtrering(countries));

console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 16
// Telle forekomst
// Lag en funksjon som teller antall forekomster av hvert tegn i en streng.
console.log ('\x1b[36m%s\x1b[0m', 'Task 16 or 2.6');

function charactersinwordprint(word){
    let characters = {};
    for (let i of word) {
        if (characters[i]) {
            characters[i]++;
        } else {
            characters[i] = 1;
        }
    }
    return characters;
}
console.log(charactersinwordprint("checking if it works"));   


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 17
// Gruppe Array-elementer
// Lag en funksjon som grupperer like verdier i et array i separate arrays (f.eks. [1, 2, 2, 3, 3, 3] blir [[1], [2, 2], [3, 3, 3]]).
console.log ('\x1b[36m%s\x1b[0m', 'Task 17 or 2.7');

function seperatearrays(numberlist){
    let numbers = {};
    for (let i of numberlist) {
        if (!numbers[i]) {                                      // Falsy value = undefined, null, false, 0, NaN, "".
            numbers[i]=[];
        }
            numbers[i].push(i);
        }
        return Object.values(numbers);                          // The Object.values() method returns an array of the property values of an object.
}                                                               // The Object.values() method does not change the original object.
console.log(seperatearrays([3,4,5,3,2,1,3,3,5]));


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 18
// Summere tall i en tekst
// Lag en funksjon som tar en streng med tall og bokstaver, og returnerer summen av alle tallene i strengen.
console.log ('\x1b[36m%s\x1b[0m', 'Task 18 or 2.8');

function textnumbercombine(textnumbers){
    let total = 0;
    let number = 0;

    for(let i = 0; i < textnumbers.length; i++){
        let characters = textnumbers[i];
        if (characters >= '0' && characters <= '9') {
            number = number * 10 +(characters - '0');
        } else {
            total += number;
            number = 0;
        }
    }
    total += number;
    return total;
}
console.log(textnumbercombine("test320test350test30"));


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 19
// Temperaturkonvertering
// Lag funksjoner som konverterer temperaturer mellom Celsius, Fahrenheit og Kelvin.
console.log ('\x1b[36m%s\x1b[0m', 'Task 19 or 2.9');

function celsius(celsius){
    let fahrenheit = (celsius * 9) / 5 + 32;
    let kelvin = celsius + 273.15;
    return {
        fahrenheit: fahrenheit,
        kelvin: kelvin
    };
} 
function fahrenheit(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9;
    let kelvin = celsius + 273.15;
    return {
        celsius: celsius,
        kelvin: kelvin
    };
}
function kelvin(kelvin){
    let celsius = kelvin - 273.15;
    let fahrenheit = (celsius * 9) / 5 + 32;
    return {
        celsius: celsius,
        fahrenheit: fahrenheit
    };
}

console.log(celsius(15));
console.log(fahrenheit(59));
console.log(kelvin(288));


console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 20
// Labyrintløser (Rekursjon)
// Lag en funksjon som tar en todimensjonal labyrint (representert som en array av arrays) og finner en vei fra start til slutt ved å bruke rekursjon.
// Hindringer kan være angitt som 1, og fri sti som 0.
console.log ('\x1b[36m%s\x1b[0m', 'Task 20 or 3.1');

function labyrinth(path){
    let labyrinth = [
        ['Start', 'Open', 'Open', 'Open', 'Open', 'Open','Obstacle'],
        ['Obstacle','Obstacle', 'Obstacle', 'Obstacle', 'Obstacle', 'Open','Obstacle'],
        ['Obstacle', 'Open', 'Open', 'Open', 'Open', 'Open','Obstacle'],
        ['Obstacle', 'Open', 'Obstacle', 'Obstacle', 'Obstacle', 'Obstacle'],
        ['Obstacle', 'End','Obstacle','Obstacle','Obstacle','Obstacle']
        ];

    let Start, End;

    for(let row = 0; row < labyrinth.length;row++){
        for (let col = 0; col < labyrinth[row].length; col++){
            if (labyrinth[row][col] === 'Start') Start = [row, col];
            if (labyrinth[row][col] === 'End') End = [row, col];
        }
    }

    function pathfinder(row,col,path,visitedspot){
        if (row < 0 || row >= labyrinth.length || col >= labyrinth[0].length) return false;
        if (labyrinth[row][col] === 'Obstacle' || visitedspot.length[row][col]) return false;
        if (labyrinth[row][col] === 'End') {
            path.push([rol][col]);
            return true;
        }
        visitedspot[row][col]= true;
        path.push([row][col]);
        }

        if (pathfinder(row -1, col, path, visitedspot) || pathfinder(row +1, col, path, isitedspot) ||
            pathfinder(row, col -1, path, visitedspot) || pathfinder(row, col +1, path, visitedspot)){
            return true;
        }
}

labyrinth();

console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 21
// Balanserte Parenteser
// Lag en funksjon som tar en streng og sjekker om parentesene er balansert. Eksempler på balanserte strenger: "(())", "{[()]}".
console.log ('\x1b[36m%s\x1b[0m', 'Task 21 or 3.2');

function parenthese(symbols){
    let items = [];

    let matchingsymbols = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for( let i of symbols) {
        if(Object.values(matchingsymbols).includes(i)) {
            items.push(i);
        }
        else if (Object.keys(matchingsymbols).includes(i)) {
            if (items.length === 0 || items[items.length - 1] !== matchingsymbols[i]){
               return false; 
            }
            items.pop();
        }
    }
    return items.length === 0;
}
console.log(parenthese("()()()()"));
console.log(parenthese("(((()(){][["));

console.log('\x1b[36m%s\x1b[0m',"-----------------------------------------------------");
// Oppgave 22
// Kompresjonsalgoritme
// Lag en funksjon som implementerer en enkel kompresjonsalgoritme for strenger. F.eks. skal inputen "aaabbcccc" bli komprimert til "a3b2c4".
// Sørg for at funksjonen også kan håndtere dekomprimering.
console.log ('\x1b[36m%s\x1b[0m', 'Task 22 or 4.1');