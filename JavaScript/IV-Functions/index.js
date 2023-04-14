// Getter and Setter in Functions

/*

let person = {
  firstName: "Vinayak",
  lastName: "Vispute",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(values) {
    let part = values.split(" ");
    this.firstName = part[0];
    this.lastName = part[1];
  },
};

console.log(person.fullName);

person.fullName = "Jayesh Yadav";

console.log(person.fullName);
*/

// Error Handling

let person = {
  firstName: "Kartik",
  lastName: "Yadav",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(values) {
    if(typeof values != String){
      throw new Error("Please Enter String")
    }
    let part = values.split(" ");
    this.firstName = part[0];
    this.lastName = part[1];
  },
};


try {
  person.fullName = 5;
} catch (e) {
  console.log(e);
}
