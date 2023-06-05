// we are gonna create a class to help us not to repeat ourselves

class Pet {
  constructor(name, age, breed, sound) {
    console.log("in pet constructor");
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  speak() {
    console.log(this.sound);
  }
}
const ernie = new Pet("Ernie", 1, "pug", "yip yip");
ernie.speak();
const vera = new Pet("Vera", 8, "border collie", "woof woof");
const scofield = new Pet("Scofield", 6, "Doberman", "woof woof");
const edel = new Pet("Edel", 7, "German Shorthaired Pointer", "woof woof");

console.log(ernie);
console.log(vera);
console.log(scofield);
console.log(edel);
