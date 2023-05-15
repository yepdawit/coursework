/* const ernie = {
  animal: "dog",
  age: 1,
  breed: "pug",
  bark: function () {
    console.log("Woof!");
  },
};
const vera = {
  animal: "dog",
  age: 8,
  breed: "Border Collie",
  bark: function () {
    console.log("Woof!");
  },
};
const scofield = {
  animal: "dog",
  age: 6,
  breed: "Doberman",
  bark: function () {
    console.log("Woof!");
  },
};
const edel = {
  animal: "dog",
  age: 7,
  breed: "German Shorthaird Pointer",
  bark: function () {
    console.log("Woof!");
  },
}; */

// lets create different objects for each pet instead of repeating the same code
// Path: course work/unit2-1/es6/pets.js
// we are gonna use class to create objects
// first we will need to figure out what properties are common to all pets
// we will create a class called Pet

class Pet {
  // this is the blueprint for creating objects
  // we will add a constructor method to the class
  constructor(animal, age, breed, sound) {
    // we will pass in the properties that are common to all pets
    this.animal = animal; //
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
}
// we will add a const method to the class then we will add the method to the class
const ernie = new Pet("dog", 1, "pug", "Woof!"); // ernie is an instance of the class Pet
// new keyword is used to create a new instance of the class Pet
// we will pass in the properties that are unique to ernie
const vera = new Pet("dog", 8, "Border Collie", "Woof!");
const scofield = new Pet("dog", 6, "Doberman", "Woof!");
const edel = new Pet("dog", 7, "German Shorthaird Pointer", "Woof!");

console.log(ernie);
console.log(vera);
console.log(scofield);
console.log(edel);
console.table(Pet);
