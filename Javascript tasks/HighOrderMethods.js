function minFunksjon(){
    console.log("her er min funkson");
}
minFunksjon();

                        // V not variable, it's parameter
function minAndreFunksjon(tall){
    console.log(tall);
}
minAndreFunksjon(10);
minAndreFunksjon(-5);
minAndreFunksjon("Dette er en tekst");

// Arrow funksjoner: Arrow funskoner er "unnamed" funksjoner.
const Returnverdi = (tekst) => {
    return tekst;
};
console.log(Returnverdi("Ny test"));

// En linje Arrow funksjon
// Så er return statement implied
const svar = (tall) => tall * 2; // => er opperator.
console.log(typeof svar);
console.log(svar(5));

// High order function/metoder
// En funksjon (ikkje arrow) som returnerer en funksjon

// Deklarerer en funkson med nav number som tar to paremetere.
// Parameter nr1: nummer  -> Denne funksjon forventer en array av nummer
// Paremter nr2: callback -> callback funksjon du vil skal kjores på arrayen.
function nummer(nummer,callback){
    // Funksjonskodeblokk
    return nummer.map(callback);
}

const numbers = [1,2,3,4,5]; // Oppretter en array av nummer 1 til 5
const dobbel = nummer(numbers, num => num * 2);
console.log(dobbel)
const numbers100 = nummer(numbers, num => num * 100);
console.log(numbers100);

function summering(tall1,callback){
    return tall1.map(callback)
}

const numberlist = [2,4,6,8,10];
const plus = nummer(numberlist, num => num + 6);
console.log (plus);
const plus10 = nummer(numberlist, num => (num + 10) * 5 - 25 * 3);
console.log(plus10);

// ForEach
const nyArray = [];

numbers.forEach((e, i) => {
    nyArray[i] = e * 3;
    console.log(e)
});
console.log("Ny tabell: ");
console.log(nyArray);

// Filter metode - High order.
const frukter = ["Pære","Appelsin", "Melon", "Mango","Kiwi", "Eple","Tomat"];

// const korrigertFrukter = frukter.fillter(frukt => frukt.startswith("M"));
// console.log(frukter);
// console.log(korrigertFrukter);

// const korrigertFrukter2 = frukter.fillter(frukt => {
//     return frukt[0].toLowerCase() === 'M';
// });
// console.log(frukter);
// console.log(korrigertFrukter);

// High order metode sort()
const sortFrukter = frukter.sort((a,b) => {
    return b.length - a.length;
});
console.log(sortFrukter);

const sortertliste = frukter.sort((a,b) => a.length - b.length);
console.log(sortertliste);

// Andre high order metoder:
// reduce()  // Slår sammen alle verdier i en liste til en enkelt verdi [1,2,3] = avhengig av callback function som du angir.
// some()   // Boolean tester
// every() // Boolean tester

//Eksempel på chaining uten utfylling av parametere til metodene.
// const whatEver = frukter.sort().map().filter(); //Chaning commands.
//Oppgave: Chain disse tre metodene:
// 1: Sort skal sortere listen etter bokstav nr 3 (index 2);
// 2: Map skal legge til ! bakerst på alle elementene
// 3. filter skal filtrere listen, der kun frukter som starter på m blir med.
// Rekkefølge på chaining er valgfri. HUSK at kommandoene kjøres fra venstre til høyre.


                                        // The localeCompare() method compares two strings in the current locale.
                                        // The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
const task = frukter.sort((a,b) => a[2].localeCompare(b[2])).map(frukter => frukter + "!").filter(frukter => frukter.startsWith("M"));

console.log(task);

// 1. Use .filter() to extract all products that cost less than 200
// 2. Use .map() to make a list that only contain the product names
// 3. Use a chained combination of .filter() and .map() to list only
// the names of all products in a specific category (e.g. 'electronics')
// 4. Use .some() to check if there are any products that cost more than 1000
// 5. Use .reduce() to find the total cost of all the products.


const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];
// 1 task
const priceless200 = products.filter(product => {
    return product.price < 200;
})
console.log(priceless200);

// 2 task
const listofnames = products.map(product => product.name);
console.log(listofnames);

// 3 task
const chaincombo = products.filter(product => product.category === "clothing").map(product => product.name);
console.log(chaincombo);

// 4 task
const price1000 = products.some(product => product.price > 1000);
console.log(price1000)

// 5 task
const totalprice = products.reduce((fromzero,product) => {
    return fromzero + product.price;
}, 0);
console.log(totalprice);