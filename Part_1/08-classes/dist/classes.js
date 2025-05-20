"use strict";
// <----------------- classes ------------------->
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet(): void {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// }
// const person = new Person("Rohit", 23);
// person.greet();
let data1 = {
    name: "The Rock",
    city: "Noida",
};
let data2 = {
    id: 101,
    email: "rock@gmail.com",
};
function checkDetail(data) {
    if (data.name !== undefined) {
        console.log("this is userData");
    }
    else {
        console.log("this is userInfo");
    }
}
// checkDetail(data1);
checkDetail(data2);
