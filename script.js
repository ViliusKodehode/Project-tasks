//-------------------------------------------------------------------------------------------------------------
//Task 1

let words = "Random words, for this task";
 function SwapHalf(words1){
   let mid = Math.floor(words1.length / 2);
   let FirstHalf = words1.slice(0, mid);
   let SecondHalf = words1.slice(mid);
   return SecondHalf + FirstHalf;
 }
 console.log(SwapHalf(words));

//Task 2

function ConvertText(Word,UpperCase) {
   if (UpperCase) {
      return Word.toUpperCase();
   } else {
      return Word.toLowerCase()
   }
}
console.log(ConvertText("My Text", true));
console.log(ConvertText("My text", false));

//-------------------------------------------------------------------------------------------------------------
//Task 3

 let days = ("Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday","Sunday")
 function Dayname(day){
   switch(day) {
      case "Monday":
         console.log("It's Monday");
         break;
      case "Tuesday":
         console.log("It's Tuesday");
         break;
      case "Wednesday":
         console.log("It's Wednesday");
         break;
      case "Thursday":
         console.log("It's Thursday");
         break; 
      case "Friday":
         console.log("It's Friday");
         break;
      case "Saturday":
         console.log("It's Saturday");
         break;
      case "Sunday":
         console.log("It's Sunday");
         break;
      default:
         console.log("Day don't exist");
}
}
 Dayname("Friday");

//-------------------------------------------------------------------------------------------------------------
//Task 4

function BeginAndSameLetter(words) {
   let BeginLetter = words.charAt(0).toLowerCase();
   let SameLetter = words.charAt(words.length - 1).toLowerCase();
   return BeginLetter === SameLetter;
}
console.log(BeginAndSameLetter("Roar"));
console.log(BeginAndSameLetter("Boar"));  

//-------------------------------------------------------------------------------------------------------------
//Task 5

function textcheck(searching,list) {
   for (let item of list) {
      if (item === searching) {
         return console.log(true)
      }
   }
   return console.log(false)
} 
let list = [1,2,3,4,5,6,7]
let searching = (1)
textcheck(searching,list)

//-------------------------------------------------------------------------------------------------------------
//Task 6

function listofwords(text10){
   let words = text10.split(" ");
   let firstWord = words[0];
   let lastWord = words[words.length - 1];
   console.log(firstWord, lastWord);
}
listofwords("Hello, how you doing, Tom")
//-------------------------------------------------------------------------------------------------------------
//Task 7

 function Compare(tall1, tall2) {
   if ((tall1) === (tall2))
      console.log("Strings are equal");
   else 
      console.log("Strings are not equal");
}
Compare(40,20);

//-------------------------------------------------------------------------------------------------------------
//Task 8

 function Javascript(words3) {
   if (words3.includes("JavaScript"))
   console.log("There is JavaScript word in this text");
   else
   console.log("There is no JavaScript word in this text"); 
 }
 Javascript("Random words and than i put JavaScript word");

//-------------------------------------------------------------------------------------------------------------
//Task 9

function Age(myage) {
   if (myage < 13)
      console.log("Barn");
   else if (myage <= 19)
      console.log("Tenåring");
   else if (myage < 64)
      console.log("Voksen");
   else if (65 <= myage)
      console.log("Pensjonist");
}
Age(66);

//-------------------------------------------------------------------------------------------------------------
//Task 10

let vokal = ["A","E","I","O","U","Y","Æ","Ø","Å"];
let konsonant = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Z"];
function Bokstav(letter){
   if (vokal.includes(letter)) {
      console.log("It's vokal bokstav");
   }else if (konsonant.includes(letter)) {
      console.log("It's konsonant bokstav");
   }else {
      console.log("Letter not found. Check if a letter is Uppercase");
   }
 }
 Bokstav("C")
   
 //-------------------------------------------------------------------------------------------------------------
 //Task 11

 let Months = ("December", "Januar","Februar", "Mars", "April", "Mai","Juni", "Juli", "August", "September", "Oktober", "Novermber")
 function Monthname(Month){
   switch(Month) {
      case "December":
         console.log("It's vinter");
         break;
      case "Januar":
         console.log("It's vinter");
         break;
      case "Februar":
         console.log("It's vinter");
         break;
      case "Mars":
         console.log("It's vår");
         break; 
      case "April":
         console.log("It's vår");
         break;
      case "Mai":
         console.log("It's vår");
         break;
      case "Juni":
         console.log("It's sommer");
         break;
      case "Juli":
         console.log("It's sommer");
         break;
      case "August":
         console.log("It's sommer");
         break; 
      case "September":
         console.log("It's høst");
         break;
      case "October":
         console.log("It's høst");
         break;
      case "November":
         console.log("It's høst");
         break;
      default:
         console.log("Month don't exist try check your spelling");
}
}
Monthname("Juli");

//-------------------------------------------------------------------------------------------------------------
 //Task 12 
 
 let weatherlist = ["Rainy","Sunny","Snowy","Windy"];
 function Weather(){
   console.log(weatherlist.slice(1, -1));
 }
Weather();