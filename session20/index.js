// console.log("Hello World!");

//[SECTION] Array
// An array is also a storage for multiple elements/values
// The best practice is value/elements stored in an array should be of the same data type.

let pokemon = ["pikachu", "charmander", "squirtle"];
console.log(pokemon);

console.log(pokemon[0]);
console.log(pokemon[2]);

console.log(`My favorite pokemon is ${pokemon[0]}.`);

console.log(`My favorite pokemon is ${pokemon[0].toLocaleUpperCase()}.`);

//get the length of an array
console.log(pokemon.length);

//Accessing an index that is not existing will result -> undefined
console.log(pokemon[5]);

// Array Mutation
// Modifying Array Elements 

pokemon[3] = "bulbasaur";

console.log(pokemon);
console.log(pokemon.length);

pokemon[1] = "Charmeleon";

console.log(pokemon);
console.log(pokemon.length);

pokemon[10] = "Mew";
console.log(pokemon);
console.log(pokemon.length);

//Add an element on the tail of an array without knowing the actual index number.

console.log(pokemon.length);
pokemon[pokemon.length] = "snorlax";

console.log(pokemon);
console.log(pokemon.length);

//access the last element on the array
console.log(pokemon[pokemon.length - 1]);

//[SECTION] ->modern array mutation methods

let fruits = ["apple", "banana", "melon"];

// push() -> adds an element at the end of the array
console.log("Original Array: " + fruits);
fruits.push("Strawberry");
console.log("Push Method: " + fruits);

//pop() -> removes the last element of the array
console.log("Original Array: " + fruits);
fruits.pop(); //removes strawberry
fruits.pop(); //removes melon
console.log("Pop Method: " + fruits); 

// unshift() -> adds an element at the beginning of the array
console.log("Original Array: " + fruits);
fruits.unshift("strawberry"); //adds strawberry at the beginning
console.log("Unshift Method: " + fruits);

fruits.unshift("grapes","melon", "kiwi"); //adds melon at the beginning
console.log("Unshift Method: " + fruits);

// shift() -> removes the first element of the array
fruits.shift(); //removes strawberry
fruits.shift(); //removes grapes
console.log("Shift Method: " + fruits);

//Sort() -> sorts the elements of an array in alphabetical order
fruits.sort();
console.log(fruits);

//reverse() -> reverses the order of the elements in an array
fruits.reverse();
console.log(fruits);

//splice() -> adds or removes elements from an array at a specific index
fruits.splice(1, 2,  "Blue Berry");
console.log(fruits);

fruits.splice(1, 1,);
console.log(fruits);    

//forEach() -> reads each element of an array

fruits.forEach((x) => {
    console.log(x);
});

