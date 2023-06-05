class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print() {
    console.log(`${this.make} ${this.model} (${this.year})`);
  }
}

const car1 = new Car("Eagle", "Talon TSi", 1993);
console.log(car1);

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  print() {
    super.print();
    console.log(`Range: ${this.range} miles`);
  }
}

const car2 = new ElectricCar("Tesla", "Model S", 2017, 500);
console.log(car2);
car2.print();

// declare prototype method
Car.prototype.print = function () {
  console.log(`${this.make} ${this.model} (${this.year})`);
};

/* 





class pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    birthday() {
        return '${this.name} is now ${this.age + 1} years old';
}
}

// const ziggy = new pet('ziggy', 10);
// console.log(ziggy.birthday());

// define a subclass - a class that inherits from another class
class Dog extends Pet {
    v]constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    bark() {
        return '${this.name} says woof!';
    }
}
//amother subclass
class Cat extends Pet {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    meow() {
        return '${this.name} says meow!';
    }
}


// create some new instances of Dog and Cat
const  pet1 = new Pet('ziggy', 10);
console.log(pet1.birthday());// ziggy is now 11 years old


const pet2 = new Dog('scooby', 7, 'dane');
console.log(pet2.birthday());// scooby is now 8 years old
console.log(pet2.bark());// scooby says woof!

const pet3 = new Cat('garfield', 6, 'orange tabby');
console.log(pet3.birthday());// garfield is now 7 years old
console.log(pet3.meow());// garfield says meow!

//check if instances are instances of the respective class
console.log(pet1 instanceof Pet);// true
console.log(pet2 instanceof Dog);// true
console.log(pet3 instanceof Cat);// true
 */
