// console.log("Hello, World!");

// [SECTION] JavaScript Object
// imitates real-world descriptions and real-world objects

let arr = [1, 2, 3]; // same dapat lagi data type

let obj = {          // kahit anong data type ok lng
    name: "Carlo",
    age: 22
}

console.log(typeof arr); // Child ng object/ Nagawa dahil sa obj
console.log(typeof obj); // first developed

let person = {
    completeName: "Juan Dela Cruz",    // left side properties and right side is value all is key pair
    age: 25,
    height: 160,
    weight: 85,
    contactNumber: [1234, 4567],
    address: {
        houseNumber: 1,
        brgy: "Del pilar",
        city: "CFTP",
    }
}

console.log(person);

// Dot notation  -> best practice
// Access values inside an object property

console.log(person.completeName);

console.log(`Hi, my name is ${person.completeName} and I am ${person.age} years old!`);

console.log(person[`completeName`]);

//Updating a value via dot notation
person.completeName = "John Doe";

console.log(person);


//Adding a new property to an object
person.email = "jdoee@mail.com";

console.log(person);

//Class and objects
//to add properties in a class use "this" keyword
function Animal(name, breed, color, kind){
    //constructors -> they explain
    this.name = name;
    this.kind = kind;
    this.breed = breed;
    this.color = color;
    this.makesound = function(){
        if(this.kind == "Dog") {
            console.log("Woof! Woof!");
        }else if(this.kind == "Cat") {
            console.log("Meow! Meow!");
        }else{
            console.log("cannot provide sound for given animal.");
        }
        
    }
}



//instance -> copy/duplicate of a function class

let dog = new Animal("Bruno", "Aspin", "Brown", "Woof");
console.log(dog);

console.log(dog.name);
dog.makesound();

let cat = new Animal("Luna", "Puspin", "Gray", "Meow");
console.log(cat.name);
cat.makesound();
console.log(cat);

let trex = new Animal("Rex", "Dino", "Green", "dinosour");
console.log(trex);

console.log(person.contactNumber[1]);
console.log(person.address.brgy);

// [SECTION] POKEMON

function Pokemon(name, level, health, mana){
    this.name = name;
    this.level = level;
    this.health = health * level;
    this.mana = mana;

    this.tackle = function(target) {
        let damage = 40;
        console.log(`${this.name} used Tackle!`);
        target.health -= damage;
        this.mana += 40;
        console.log(`${this.name}. mana: ${this.mana}. ${target.name} health: ${target.health}`);
    }

    this.useHealthPotion = function() {
        let totalHealth = 100 * this.level;
        if(this.health < totalHealth) {
            if((this.health + 150) > totalHealth) {
                this.health = totalHealth;
                console.log(`${this.name} HEALTH: ${this.health}`);
            } else {
                this.health += 150;
                console.log(`${this.name} HEALTH: ${this.health}`);
            }
        } else {
            console.log(`${this.name} 's health is full!`);
        }
    }  

    this.useSkill = function(target){
        if (this.name == "Pikachu"){
            if (this.mana < 50) {
                console.log(`${this.name} 's mana is not enough! MANA: ${this.mana}`);
            }else {
            let damage = 150;
            console.log(`${this.name} used Thunderbolt!`);
            target.health -= damage;
            this.mana -= 50;
            console.log(`${this.name}. mana: ${this.mana}. ${target.name} health: ${target.health}`);
            }
        }else if (this.name == "Charmander"){
                if (this.mana < 50) {
                console.log(`${this.name} 's mana is not enough! MANA: ${this.mana}`);
            }else {
            let damage = 150;
            console.log(`${this.name} used Flamethrower!`);
            target.health -= damage;
            this.mana -= 50;
            console.log(`${this.name}. mana: ${this.mana}. ${target.name} health: ${target.health}`);
            }
        }
    }
}


// //potion
//     this.usePotion = function() {
//         if (this.health < 500) {
//             this.health += 150;
//             if (this.health > 500) {
//                 this.health = 500;
//             }
//             console.log(`${this.name} used a health potion! Health: ${this.health}`);
//         } else {
//             console.log(`${this.name} 's health is already at maximum!`);
//         }
//     }
// //

let pikachu = new Pokemon("Pikachu", 5, 100, 100);
console.log(pikachu);


let charmander = new Pokemon("Charmander", 5, 100, 100);
console.log(charmander);

// pikachu.tackle(charmander);
// pikachu.tackle(charmander);
// pikachu.tackle(charmander);

// console.log(charmander);

// charmander.tackle(pikachu);
// console.log(pikachu);

// charmander.useSkill(pikachu);
// charmander.useSkill(pikachu);
// charmander.useSkill(pikachu);
// console.log(charmander);
// console.log(pikachu);




//create  a function constructor use health potion that will add 150 health  in pokemon
//500 maximum health. lock in just 500
//tackle add 40 in mana
// 100 max mana

pikachu.tackle(charmander);
pikachu.tackle(charmander);
console.log(charmander);

pikachu.useSkill(charmander);
console.log(charmander);


charmander.useHealthPotion();
console.log(charmander);

