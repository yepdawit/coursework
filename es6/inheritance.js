class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("Hello", this.name);
    console.log("You are", this.age, "years old");
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  hello() {
    super.hello();
    console.log("Your grade is", this.grade);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  hello() {
    super.hello();
    console.log("Your subject is", this.subject);
  }
}

// }

// const teacher = new Teacher("John", 20, "Math");

const student = new Student("John", 20, 10);
console.log(student);
