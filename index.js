import { Person } from "./person.js";
import { Student } from "./student.js";
import { Aspirant } from "./aspirant.js";

const person1 = new Person();
const person2 = new Person("Шакшин Илья", 24);

person2.move();
person2.talk();

const students = [
  new Student("Илья", "Шакшин", 24, 1, 4),
  new Student("Петя", "Петров", 24, 1, 5),
  new Aspirant("Саша", "Николаев", 23, 4, 5),
  new Aspirant("Женя", "Макаров", 24, 1, 4),
];

students.forEach((student) => console.log(student.getScholarship()));
