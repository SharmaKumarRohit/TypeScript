"use strict";
// <------------- Basics -------------->
// let a = 23;
// let names: string = "hii";
// let n = <number>23;
// console.log(a);
// console.log(names);
// console.log(n);
// <----------- type with function -------------->
// type FuncType = (n: string, m: string) => string;
// const func: FuncType = (n: string, m: string): string => {
//   console.log(m, n);
//   return n + m;
// };
// <------------- Array --------------->
// const arr: string[] = ["hii", "there"];
// const arr2: number[] = [1, 2, 3, 4];
// const arr3: Array<string | number> = ["Hiit", 1, 2, "There", 3, 4];
// tuple
// const tup: [number, number, number] = [1, 2, 3];
// interface User {
//   id: number;
//   name: string;
// }
// const users: User[] = [
//   { id: 101, name: "Rohit" },
//   { id: 102, name: "Abhay" },
// ];
// users.forEach((user) => console.log(user.name));
// <------------- Object --------------->
// let person: object = { name: "John", age: 30 };
// <--------- function ------------->
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//   return m;
// };
// func(2, 3, 4, 8, 9, 10, 5);
// interface Product {
//   readonly id: number;
//   name: string;
//   stock: number;
//   price: number;
//   photo?: string;
// }
// type FuncType = (product: Product) => void;
// const func: FuncType = (product) => {
//   console.log(product);
// };
// const product: Product = {
//   id: 105,
//   name: "same",
//   stock: 420343,
//   price: 483983,
//   photo: "photourl",
// };
// func(product);
// <----------- class in typescript --------------->
// class Player {
//   readonly id: string = Math.random() * 100 + "";
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {}
//   get getHeight() {
//     return this.height;
//   }
//   set setHeight(val: number) {
//     this.height = val;
//   }
// }
// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getPower = () => this.power;
// }
// const p2 = new Player2(100, 500, 300, true);
// console.log("Weight", p2.weight);
// console.log("Power", p2.getPower());
// console.log("special", p2.special);
// console.log("id", p2.id);
// console.log(p2.getHeight);
// p2.setHeight = 200;
// console.log(p2.getHeight);
// <------------- class with interface ------------>
// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   offer?: boolean;
// }
// interface GetID {
//   getId: () => string;
// }
// class Product implements ProductType, GetID {
//   private id: string = Math.random() * 1000 + "";
//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
//   getId = () => this.id;
// }
// const product1 = new Product("Mackbook Air", 20000, 500);
// console.log(product1.getId());
// <---------------- Type Assertion ----------------->
// const btn = document.getElementById('btn') as HTMLElement
// const btn = <HTMLElement>document.getElementById('btn')
// const btn = document.getElementById('btn')!
// const form = document.getElementById("myform") as HTMLFormElement;
// const myInput = document.querySelector("input") as HTMLInputElement;
// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   console.log(typeof +myInput.value);
//   const h2Elem = document.createElement("h2") as HTMLHeadingElement;
//   let add = +myInput.value + 20;
//   h2Elem.textContent = add + "";
//   document.body.appendChild(h2Elem) as HTMLHeadingElement;
// };
// <------------------ Generics ------------------>
// type Person = {
//   name: string;
//   age: number;
// };
// const person: Person[] = [
//   { name: "Rohit", age: 23 },
//   { name: "Abhay", age: 23 },
//   { name: "MyLapi", age: 2 },
// ];
// const filterByPeoples = <T, K extends keyof T>(
//   arr: T[],
//   property: K,
//   value: T[K]
// ): T[] => {
//   return arr.filter((item) => item[property] === value);
// };
// const filteredByPeopleName = filterByPeoples(person, "name", "Rohit");
// const filteredByPeopleAge = filterByPeoples(person, "age", 23);
// console.log(filteredByPeopleAge);
// Another example
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "Rohit", age: 23 };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
