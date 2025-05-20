// <---------------- index signature ---------------->
// type userInfo = {
//     [key:string]:number | string
// };
// const user: userInfo = {
//   id: 101,
//   name: "Rohit",
//   age: 23,
//   mobileNo: 9999,
//   semester: 3,
//   city: "Lachhaur"
// };

type userData = {
  id: number;
  name: string;
  age: number;
  readonly [key: string]: number | string;
};
const person: userData = {
  id: 105,
  name: "Abhay",
  age: 23,
  address: "Bihar",
};
// person.city = "Lachhuar";

// <---------------- index signature ---------------->
// An index signature lets you define types for objects with unknown or dynamic keys.
// type userRoles = {
//   [username: string]: string;
// };
// const roles: userRoles = {
//   Rohit: "Programmer",
//   Abhay: "Front-end Developer",
//   myLapi: "together",
// };

// type ScoreBoard = {
//   [id: number]: number;
// };
// const scores: ScoreBoard = {
//   1: 100,
//   2: 150,
//   3: 300,
// };

// type Product = {
//   id: number;
//   name: string;
//   [key: string]: string | number;
// };
// const item: Product = {
//   id: 101,
//   name: "Laptop",
//   price: "58,000",
//   brand: "HP",
// };
