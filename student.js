import { Person } from "./person.js";

export class Student extends Person {
  firstName;
  lastName;
  group;
  averageMark;

  constructor(firstName, lastName, age, group, averageMark) {
    super(`${firstName} ${lastName}`, age);
    if (group) this.group = group;
    if (averageMark) this.averageMark = averageMark;
  }

  getScholarship() {
    if (this.averageMark === 5) {
      return "100 USD";
    }

    return "80 USD";
  }
}
