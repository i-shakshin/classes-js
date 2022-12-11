import { Student } from "./student.js";

export class Aspirant extends Student {
  constructor(firstName, lastName, age, group, averageMark) {
    super(firstName, lastName, age, group, averageMark);
  }

  getScholarship() {
    if (this.averageMark === 5) {
      return "200 USD";
    }

    return "180 USD";
  }
}
