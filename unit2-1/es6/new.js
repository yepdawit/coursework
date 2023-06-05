// new constructor method we use function to create a new object
//
function Pet(name, age, breed, sound) {
  console.log("in pet constructor");
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.sound = sound;
}
Pet.prototype.speak = function () {
  console.log(this.sound);
}; // we can add a method to the prototype of the object
// prototype will help us in the future to add more methods to the object

const ernie = new Pet("Ernie", 1, "pug", "yip yip");
ernie.speak();
const vera = new Pet("Vera", 8, "border collie", "woof woof");
const scofield = new Pet("Scofield", 6, "Doberman", "woof woof");
const edel = new Pet("Edel", 7, "German Shorthaired Pointer", "woof woof");

console.log(ernie);
console.log(vera);
console.log(scofield);
console.log(edel);
//
