//   y++      (Post increment)    x = y++	    y=6, x=5
//   ++y      (Pre increment)     x = ++y	    y=6, x=6
//   --y      (Pre decrement)	  x = --y	    y=4, x=4
//   y--      (Post decrement)	  x = y--	    y=4, x=5
//    %	        (Remainder)	      x = y % 2	    y=5, x=1
//   ===	(equal value and type)     	x === 5	      true
//   !==	(not equal value or type)	x !== "5"	  true
//   &&	              AND	           (x < 10 && y > 1) is true
//   ||	              OR	           (x === 5 || y === 5) is false
//   !	              NOT	               !(x === y) is true
//   +=     operator concatenates (adds) strings           

//-------------------------------------------------------------------------------------------------------------
//Task 1 

 let sum = 0 
 for (let i = 1; i<= 100; i++)
    sum += i;
 console.log(sum)

//-------------------------------------------------------------------------------------------------------------
//Task 2

for (let i = 1; i <=10; i++){
    console.log(5*i);
}

//-------------------------------------------------------------------------------------------------------------
//Task 3

 let word = "JavaScript";
 for (let i = 0; i < word.length;i++){
        console.log(word);
    }

//-------------------------------------------------------------------------------------------------------------
//Task 4

let list5 = [15,2,23,4,54,6,77,84,9,103];
let maxnumber = list5[0];

for (let i = 1; i < list5.length; i++){
        if (list5[i]>maxnumber) {
            maxnumber=list5[i];
        }
}
console.log("Biggest number " + maxnumber);


//-------------------------------------------------------------------------------------------------------------
//Task 5

let word2 = "table";
let reversedword = "";
for (let i = word2.length - 1; i >= 0; i--){
    reversedword += word2[i];
}
console.log(reversedword);

//-------------------------------------------------------------------------------------------------------------
//Task 6

 for (let i = 1; i <= 20; i++){
    if (i === 10)
        continue
    else console.log(i);
 }

//-------------------------------------------------------------------------------------------------------------
//Task 7

let sum1 = 0;
for (let i = 1; i <= 50; i++){
    if (i % 2 === 0) {
        sum1 += i;
    }
 }  
console.log(sum1); 

//-------------------------------------------------------------------------------------------------------------
//Task 8

for (let i = 1; i <= 4; i++) {
    let mønster = '';
    for (let o = 1; o <= i; o++) {
        mønster += '*'
    }
    console.log(mønster);
}

//-------------------------------------------------------------------------------------------------------------
//Task 9

function diamant(pattern) {
    let middle = Math.floor(pattern / 2);

    for(let i = 0; i <= middle; i++) {
        let symbol = '';
        for(let o = 0; o < pattern; o++) {
            if (o >= middle - i && o <= middle + i) {
                symbol += '*';
            } else {
                symbol += ' ';
            }
        }
        console.log(symbol)
    }
    
    for (let i = middle - 1; i >= 0; i--) {
       let symbol = '';
       for (let o = 0; o < pattern; o++) {
           if(o >= middle - i && o <= middle + i) {
               symbol += '*';
           } else {
               symbol += ' ';
           }
        }
        console.log(symbol);
    }
}
let pattern = 7;
diamant(pattern);

//-------------------------------------------------------------------------------------------------------------
//Task 10

function RepeatedWords(words) {
    let wordlist = words.toLowerCase().replace().split(/\s+/);            //  " "    > splits the array at one single space character.
    let CounterWords = {};                                                //  /\s/   > splits the array at every kind of whitespace character.
                                                                          //   +     > Matches between one and unlimited times.
    for (let item of wordlist) {
        if (CounterWords[item]) {
            CounterWords[item] += 1;
        } else {
            CounterWords[item] = 1
        }
    }

    let RepeatedWords = [];
    for (let item in CounterWords) {
        if (CounterWords[item] > 1) {
            RepeatedWords.push(item);
        }
    }

    return RepeatedWords;
}
let randomtext = "In the box there is another box. There you go have another box";
let repeatedwords = RepeatedWords(randomtext);
console.log(repeatedwords);

//-------------------------------------------------------------------------------------------------------------
//Task 11

function TextFibonacci(tall) {
    let tall2 = 0, tall3 = 1, tall4;
    console.log(tall2);
    console.log(tall3);
    for (let i = 2; i < tall; i++) {
        tall4 = tall2 + tall3;
        console.log(tall4)
        tall2 = tall3;
        tall3 = tall4;
    }
}

TextFibonacci(10)

//-------------------------------------------------------------------------------------------------------------
//Task 12

function Primenumbercheck(tall) {
    if (tall <= 1)
        console.log("The number is a prime");
    for (let i = 2; i  <= Math.sqrt(tall); i++){    
        if (tall % i === 0) {
            console.log("The number is not a prime");
            return;
        }
    }
    console.log("The number is a prime");
}
Primenumbercheck(80)

//-------------------------------------------------------------------------------------------------------------
//Task 13

let list = [50, 8 ,12, 54, 65, 23, 45, 232, 9, 22];
function Numbershorter(list) {
    for (let i = 0; i <= list.length; i++)
        for (let o = 0; o < i; o++){
            if (list[i] < list[o]) {
               let tall = list[i];
               list[i] = list[o];
               list[o] = tall;
               }
        }
    console.log(list)
}
Numbershorter(list);

//-------------------------------------------------------------------------------------------------------------
//Task 14

let palindromelist = [342,101,202,451,303,909,4040,9650, 9999, 5490, 5431, 4003]
function palindrome(tall) {
    let string = tall.toString();
    return string = string.split('').reverse().join('');
}
let Ispalindrome = palindromelist.filter(palindrome);
let Biggestpalindrome = Math.max(...Ispalindrome)

console.log(Biggestpalindrome);
