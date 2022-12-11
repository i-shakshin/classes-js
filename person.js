export class Person {
  fullName;
  age;

  constructor(fullName, age) {
    if (fullName) this.fullName = fullName || "Иван Иванов";
    if (age) this.age = age || 20;
  }

  move() {
    console.log(`Такой-то ${this.fullName} ходит`);
  }

  talk() {
    console.log(`Такой-то ${this.fullName} говорит`);
  }
}
