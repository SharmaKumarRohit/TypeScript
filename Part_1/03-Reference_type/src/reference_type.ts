// <------------------- Array ----------------------->
// In TypeScript, an array is a reference data type used to store multiple values of the same type in a single variable.
// let numbers: number[] = [1, 2, 3, 4, 5];
// let names: string[] = ["Abhay", "myLapi", "Rohit"];
// console.log(numbers);
// console.log(names);

// let numbers: Array<number> = [10, 20, 30, 40, 50];
// let names: Array<string> = ["Rohit", "Abhay", "myLapi"];
// console.log(numbers);
// console.log(names);

// console.log(names[2]);
// console.log(numbers[3]);

// names[1] = "Abhay Sharma";
// names[0] = "Rohit Kumar";
// console.log(names);

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// names.forEach((name) => console.log(name));

// for (let name of names) {
//   console.log(name);
// }

// let original: numbers[] = [1, 2, 3, 4, 5];
// let copy: number[] = original;
// console.log(original);
// console.log(copy);
// copy.push(6, 7);
// console.log(original);
// console.log(copy);

// let original: number[] = [1, 2, 3, 4, 5];
// // let copy: number[] = [...original];
// let copy: number[] = original.slice(0);
// // console.log(original);
// // console.log(copy);
// copy.push(6, 7);
// console.log(original);
// console.log(copy);

// interface todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }
// let todos: todo[] = [
//   { id: 1, title: "Play Cricket", completed: false },
//   { id: 2, title: "play Chess", completed: true },
// ];
// console.log(todos[0].title);
// let [{ title }] = todos;
// console.log(title, typeof title);

// let mixed: (number | string | boolean)[] = [
//   1,
//   "something",
//   true,
//   "another something",
//   false,
//   6,
// ];
// console.log(mixed, typeof mixed);

// let emptyList: string[] = [];

// <--------------------- Tuple data type ---------------------->
// let user: [string, number];

// let user: [string, number] = ["Rohit", 23];
// console.log(user[0]);
// console.log(user[1]);

// let user: [string, number] = [23, "Rohit"] // this line will give you error

// let person:[string, number?] = ["Rohit"] // The second value is optional.

// let rgb:[number, number, number, ...number[]] = [255, 0, 0, 128, 128, 128]

// let point: [x: number, y: number] = [10, 20];
// console.log(point[0]);
// console.log(point[1]);
// point[1] = 30;
// console.log(point);
// point.push(40);
// console.log(point); // TS may allow this, but it's unsafe!

// function getUser(): [string, number] {
//   return ["Rohit", 23]; // Use case - Return multiple typed values.
// }
// console.log(getUser());

// <----------------- object data type ------------------->
// let person: { name: string; age: number } = {
//   name: "Rohit",
//   age: 23,
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age);

// let person = {
//   name: "Rohit",
//   age: 23,
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age);

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };
// let student: Person = {
//   name: "Rohit",
//   age: 23,
//   isStudent: true,
// };
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.isStudent);
// student.name = "Abhay";
// console.log(student);

// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }
// let student: Person = {
//   name: "Abhay",
//   age: 23,
//   isStudent: true,
// };
// console.log(student);
// student.name = "Rohit";
// console.log(student);

// let a = { score: 100 };
// // let b = a;
// let b = { ...a };
// console.log(a);
// console.log(b);
// b.score = 200;
// console.log(a);
// console.log(b);

// type Product = {
//   name: string;
//   price?: number;
// };
// let item: Product = { name: "Book" };

// type Car = {
//   readonly brand: string;
//   model: string;
// };
// let car: Car = {
//   brand: "Toyota",
//   model: "Forturner",
// };
// console.log(car.brand);

// type User = {
//   id: number;
//   username: string;
//   email?: string;
// };
// let user1: User = {
//   id: 101,
//   username: "Rohit@101",
// };
// console.log(user1.email);
// user1.email = "rohitkumar@gmail.com";
// console.log(user1);

// let user: { [key: string]: string | number | boolean | undefined } = {
//   id: 101,
//   name: "Rohit",
//   bool: false,
//   sentace: "Hello",
//   salary: 82000,
//   some: undefined,
// };
// console.log(user);

// let user: { id: number; name: string; address: {} } = {
//   id: 101,
//   name: "Rohit",
//   address: {
//     state: "Bihar",
//     houseNo: 23,
//     distict: "Jamui",
//   },
// };
// console.log(user);
