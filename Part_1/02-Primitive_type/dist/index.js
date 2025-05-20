"use strict";
// <--------------------------- Primitive Data Type ---------------------------->
// <--------------- number ---------------------->
// let num: number = 25;
// let price: number = 24.52;
// let hexdecimal: number = 0x0101ff;
// let binary: number = 0b0101;
// let octal: number = 0o744;
// console.log(num);
// console.log(price);
// console.log(hexdecimal);
// console.log(binary);
// console.log(octal);
// let res: number = NaN;
// let res2: number = 0 / 0;
// console.log(res);
// console.log(res2);
// let bigNum: number = Infinity;
// let negBigNum: number = -Infinity;
// console.log(bigNum);
// console.log(negBigNum);
// function add(a: number, b: number): number {
//   return a + b;
// }
// let sum = add(10, 30);
// console.log(sum);
// <------------------- string ------------------->
// let firstName: string = "Rohit";
// let message: string = `Hello, ${firstName}`;
// let city: string = "Kolkata";
// function greetUser(name: string): string {
//   return `Welcom, ${name}`;
// }
// console.log(greetUser("Rohit"));
// let num: number = 23;
// let str: string = "hii";
// let combine: string = num + str;
// let combine2: string = num + "";
// let combine3: string = num.toString();
// let combine4: string = String(num);
// console.log(combine);
// console.log(combine2);
// console.log(combine3);
// console.log(combine4);
// <-------------------- boolean -------------------->
// let isLoggedIn: boolean = true;
// let hasPermission: boolean = false;
// function canAccessContent(userLoggedIn: boolean): string {
//   return userLoggedIn ? "Access granted" : "Access denied";
// }
// console.log(canAccessContent(true));
// console.log(canAccessContent(false));
// <-------------------- null ---------------------->
// null represents the intentional absence(jaanaboojhakar anupasthiti)
// let user: string | null = null;
// console.log(user);
// console.log(typeof user);
// let selectItem: string | null = "ItemA";
// console.log(selectItem);
// selectItem = null;
// console.log(selectItem);
// let name_:string = null; // not allowed
// let name_: string | null = null; // Allowed
// <----------------------- undefined ---------------->
// undefined means a variable has been declared but not yet assigned a value.
// let count: number | undefined;
// console.log(count);
// console.log(typeof count);
// function printMessage(msg?: string) {
//   console.log(msg);
// }
// printMessage();
// <--------------- null & undefined -------------->
// console.log(undefined == null);
// console.log(undefined === null);
// <--------------------- BigInt --------------------->
// console.log(Number.MAX_SAFE_INTEGER);
// let bigNum = 9007199254740991n;
// let bigNum:bigint = 9007199254740991n;
// let bigNum = 9007199254740991n;
// let a = 1n;
// let b = 4n;
// console.log(bigNum);
// // console.log(bigNum + a);
// console.log(bigNum + b);
// console.log(bigNum + a);
// let bigNumber: bigint = 1233345464387439473974394773847n;
// let anotherBig: bigint = BigInt(1233345464387439473974394773847);
// console.log(bigNumber);
// console.log(anotherBig);
// let large1: bigint = 9007199254740993n;
// let large2: bigint = 9007199254740995n;
// let sum = large1 + large2;
// console.log(sum);
// let x: number = 10;
// let y: bigint = 20n;
// You cannot mix number and bigint types in arithmetic
// let result = x + y // type error
// let result = BigInt(x) + y;
// console.log(result);
// Note :- Number.MAX_SAFE_INTEGER = 2^53 - 1 = 9007199254740991
// <---------------- Symbol ---------------------->
// Feature          Description
// Unique	        Every symbol is unique (even with same label)
// Immutable	    Cannot be changed after creation
// Hidden keys	    Don’t show up in loops or Object.keys()
// Use cases	    Private props, avoiding key collisions
// let sym1: symbol = Symbol();
// let sym2: symbol = Symbol("description");
// console.log(sym1);
// console.log(sym2);
// let id1: symbol = Symbol("userID");
// let id2: symbol = Symbol("userID");
// console.log(id1 == id2);
// console.log(id1 === id2);
// const userId: symbol = Symbol("userID");
// const user = {
//   name: "Rohit",
//   // [userId]: 12345,
// };
// console.log(user);
// console.log(user[userId]);
// for (let key in user) {
//   console.log(key);
// }
// console.log(Object.getOwnPropertySymbols(user));
// <------------ use typescript with HTML elements ------------->
// function getInputVal(): void {
//   const username = document.getElementById("username") as HTMLInputElement;
//   const name: string = username.value;
//   const userEmail = document.getElementById("email") as HTMLInputElement;
//   const email: string = userEmail.value;
//   const userAge = document.getElementById("age") as HTMLInputElement;
//   const age: number = +userAge.value;
//   console.log("UserName", name);
//   console.log("UserEmail", email);
//   console.log("UserAge", age);
// }
// function getInputValue(): void {
//   const username = document.getElementById("username") as HTMLInputElement;
//   const name: string = username.value;
//   console.log("username:", name);
// }
// Note :- We use type assertion (as HTMLInputElement) so TypeScript knows we're dealing with an input element that has a .value.
function getAge() {
    const userAge = document.getElementById("age");
    const age = +userAge.value;
    if (!isNaN(age)) {
        console.log("Age:", age);
    }
    else {
        console.log("Invalid age input");
    }
}
