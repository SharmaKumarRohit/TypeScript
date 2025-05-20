// <---------------- Union Type ----------------->
// A union type allows a variable to hold multiple possible types.
// It uses the | (pipe) symbol to combine types.
// let value:string | number;

// let score: string | number;
// score = 100;
// score = "one hundred";
// score = true;

// function printID(id: number | string) {
//   console.log("ID: ", id);
// }
// printID(123);
// printID("ABC123");

// function printLength(id: number | string) {
//   // console.log(id.length)
//   if (typeof id === "string") {
//     console.log(id.length);
//   }
// }
// printLength("Hello");
// printLength(123);

// let items: (string | number)[] = ["Book", 42, "tables"];

// function formatInput(input: string | number) {
//   //   return input.toString().toUpperCase();
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   } else {
//     return input.toString();
//   }
// }
// console.log(formatInput("Hello"));
// console.log(formatInput(23));

// let names: string | null = null;

// type Status = "success" | "error" | "loading";

// <----------------- Interface -------------------->
// An interface in TypeScript is a way to define the structure (or shape) of an object.
// interface Person {
//     name: string
//     age: number
//     isStudent: boolean
// }

// interface Person {
//   name: string;
//   age: number;
// }
// let user: Person = {
//   name: "Rohit",
//   age: 23,
// };

// interface Car {
//   model: string;
//   year?: number;
// }
// let c: Car = {
//   model: "Tesla",
// };

// interface User {
//   readonly id: number;
//   name: string;
// }
// const u: User = {
//   id: 1,
//   name: "Rohit",
// };
// console.log(u.id);

// interface MathOp {
//   (a: number, b: number): number;
// }
// const add: MathOp = (x, y) => x + y;
// console.log(add(2, 4));

// interface Info {
//   name: string;
//   age?: number;
//   college: string;
// }
// interface TeacherInfo extends Info {
//   subject: string;
// }
// const student: Info = {
//   name: "Rohit",
//   age: 23,
//   college: "B C College",
// };
// const teacher: TeacherInfo = {
//   name: "Anil Shidhu",
//   age: 30,
//   college: "IIF Alwar",
//   subject: "TypeScript",
// };
// const dept: Info = {
//   name: "BCA",
//   college: "B C College",
// };

// interface Animal {
//   name: string;
// }
// interface Dog extends Animal {
//   breed: string;
// }
// let myDog: Dog = {
//   name: "Rex",
//   breed: "Labrador",
// };

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   tags?: string[];
// }

// function displayProducts(p: Product): void {
//   console.log(`${p.name} consts ₹${p.price}`);
// }

// <--------------- Intersection type ------------------>
// An intersection type lets you combine multiple types into one.
// It uses the & (ampersand) symbol.
// type A = { name: string };
// type B = { age: number };
// type C = A & B;

// type Employee = {
//   id: number;
//   name: string;
// };
// type Manager = {
//   department: string;
// };
// type ManagerEmployee = Employee & Manager;
// const sam: ManagerEmployee = {
//   id: 101,
//   name: "sam",
//   department: "IT",
// };

// interface Shape {
//   area: number;
// }
// interface Colorful {
//   color: string;
// }
// type ColorfulShape = Shape & Colorful;
// const square: ColorfulShape = {
//   area: 20,
//   color: "blue",
// };

// type BaseConfige = {
//   debug: boolean;
// };
// type UserConfige = {
//   username: string;
// };
// type FullConfige = BaseConfige & UserConfige;
// const confige: FullConfige = {
//   debug: true,
//   username: "adim",
// };

// type A = { x: string };
// type B = { x: number };
// type C = A & B; // This line give you error because, 'x' can't be both string and number

// <----------------- types keyword ------------------>
// type Username = string;
// const user: Username = "Rohit";

// type Point = {
//   x: number;
//   y: number;
// };
// const p1: Point = {
//   x: 10,
//   y: 20,
// };

// type ID = string | number;
// let userID: ID = "ABC123";
// userID = 123;

// type Direction = "left" | "right" | "up" | "down";
// let move: Direction = "left";

// type Person = { name: string };
// type Employee = { id: number };
// type Staff = Person & Employee;
// const worker: Staff = {
//   name: "Bob",
//   id: 101,
// };

// type greet = (name: string) => string;
// const sayHello: greet = (name) => `Hello, ${name}`;

// type NameList = string[];
// const names: NameList = ["Rohit", "Abhay"];

// type Pair = [number, number];
// let point: Pair = [1, 2];

// type Product = {
//   id: number;
//   name: string;
//   price: number;
// };
// function printProduct(p: Product) {
//   console.log(`${p.name} - ₹${p.price}`);
// }

// <--------------- enum(short for enumeration) ------------------>
// An **enum** (short for enumeration) is a way to define a collection of related values that you can use as named constants.
// enum Direction {
//   left,
//   right,
//   up,
//   down,
// }
// let move: Direction = Direction.left;
// move = Direction.right;
// move = Direction.up;
// move = Direction.down;
// console.log(move); // By default, enums start with 0 and increment.

// enum Status {
//   pending,
//   InProgress,
//   Done
// }

// enum Status {
//   pending = 1,
//   InProgress = 5,
//   Done = 10,
// }

// enum Color {
//   red = "RED",
//   green = "GREEN",
//   blue = "BLUE",
// }
// let paint: Color = Color.green;
// console.log(paint);

// enum Role {
//   Admin = 1,
//   User,
//   Guest,
// }
// console.log(Role[2]);

// const enum Size {
//   Small = "S",
//   Medium = "M",
//   Large = "L",
// }
// let tshirt: Size = Size.Medium;

enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

function handleResponse(status: HttpStatus) {
  if (status === HttpStatus.OK) {
    console.log("Success!");
  } else {
    console.log("Error Occurred.");
  }
}
