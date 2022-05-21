// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }
  static introducePeople(...args) {
    args.forEach((el, i) => {
      if (!Array.isArray(el)) {
        console.log("introducePeople only takes an array as an argument.");
      } else if (!(el[i] instanceof Person && el[i + 1] instanceof Person)) {
        console.log("All items in array must be Person class instances.");
      } else {
        el[i].introduce();
        el[i + 1].introduce();
      }
    });
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
