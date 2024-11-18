// Klasser
//
// Syntax:
// class klassNavn(
//       constructor(){   
//
//       }
//        
//       midMetoder(parametere)(
//             kodeblokk
//       )
//)
//
// Bruk av en klasse:
// const minKlassNavn = new klasseNavn

//class Person{
   //constructor(fNavn,eNavn){
        //this.forNavn = fNavn;
        //this.etterNavn = eNavn;
    //}
    //sihei(){
        //console.log('hei', $(this.forNavn), $(this.etterNavn));
    //}
//}

// Lag en egen klasse Dyr. Den skal ha minst to private og minst en public, variabel. Den skal ha metoder før

class Animal{
    #owner
    #number
    getOwner(){
        return this.#owner;
    }
    setOwner(){
        this.#owner = owner;
    }
    constructor(AnimalOwner, AnimalOwnerNumber, AnimalBreed){
        this.#owner = AnimalOwner;
        this.#number = AnimalOwnerNumber;
        this.breed = AnimalBreed;
    }
    info(){
        console.log('Animal breed is ' + this.breed);
        console.log('Animal Owner is ' + this.#owner);
        console.log('Owner telephone number is ' + this.#number);
    }
}

const mypet = new Animal("Tom","98547188", "German Shepard");

mypet.info();
