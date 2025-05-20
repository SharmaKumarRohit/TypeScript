"use strict";
// <-------------------- Name space --------------------->
// namespace UserNameSpace {
//   export class Auth {
//     login() {
//       console.log("user login function");
//     }
//   }
//   export function getList() {
//     console.log("get all user lists", ApiURL);
//   }
//   const ApiURL = "www.com";
// }
// namespace AdminNameSpace {
//   export class Auth {
//     login() {
//       console.log("admin login function");
//     }
//   }
//   export function getList() {
//     console.log("get all admin lists");
//   }
// }
// const user = new UserNameSpace.Auth();
// user.login();
// UserNameSpace.getList();
// <-------------------- Name space --------------------->
// they help organize and group related code together.
// A namespace in TypeScript is a way to group variables, functions, classes, and interfaces under a single name.
// namespace MyMath {
//   export function square(x: number) {
//     return x ** 2;
//   }
// }
// console.log(MyMath.square(5));
// Use the namespace keyword.
// Use export to make members accessible outside the namespace.
// Without export, items are private to the namespace.
// namespace Shapes {
//   interface Shape {
//     area(): number;
//   }
//   export class Rectangle implements Shape {
//     constructor(public width: number, public height: number) {}
//     area() {
//       return this.width * this.height;
//     }
//   }
//   export class Circle implements Shape {
//     constructor(public radius: number) {}
//     area() {
//       return Math.PI * this.radius ** 2;
//     }
//   }
// }
// const rect = new Shapes.Rectangle(10, 5);
// console.log(rect.area());
// const cir = new Shapes.Circle(3);
// console.log(cir.area());
// 🧩 Nested Namespaces
// namespace App {
//   export namespace Utils {
//     export function greet(name: string) {
//       console.log(`Hello, ${name}`);
//     }
//   }
// }
// App.Utils.greet("Rohit");
// ⚠️ Important Notes
// Namespaces are mainly used in older TypeScript codebases or in environments without modules (like browser global scripts).
// In modern TypeScript, ES Modules (import / export) are preferred for code organization.
