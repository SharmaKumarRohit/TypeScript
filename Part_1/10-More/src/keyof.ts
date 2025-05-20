// <------------------ keyOf operator ----------------->
// The keyof operator takes an object type and returns a union of its keys as string or number literal types.
// type personT = {
//   name: string;
//   age: number;
//   isEmp: boolean;
// };

// let personData: personT = {
//   name: "Rohit",
//   age: 23,
//   isEmp: true,
// };

// type personDataX = keyof personT;
// let personX: personDataX;

// let personX: keyof personT;

// let personX: keyof typeof personData;

// personX = "name";
// personX = "age";
// personX = "isEmp";

// let user: keyof typeof personData = "name";

// <----------------- keyof ----------------->
// type Person = {
//   name: string;
//   age: number;
// };
// type PersonKeys = keyof Person; // name | age
// // Now PersonKeys is a union of the keys of Person.
// let user: PersonKeys = "name";

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
// const person = { name: "Rohit", age: 23 };
// let personName = getProperty(person, "name");
// let personAge = getProperty(person, "age");
// console.log(personName);
// console.log(personAge);

// function printProperty<T, K extends keyof T>(obj: T, key: K) {
//   console.log(`value of ${String(key)} = ${obj[key]}`);
// }
// printProperty({ id: 1, title: "Book" }, "title");

// let settings = {
//   theme: "dark",
//   fontSize: 14,
// };
// type Settings = typeof settings;
// type SettingsKeys = keyof Settings; // theme | fontSize
// type SettingsKey = keyof typeof settings;
