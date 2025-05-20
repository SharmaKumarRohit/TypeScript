// <------------- function return type ---------------->
// function greeting(): string {
//   return "Hello";
// }

// function functioName(param1: type, param2: type): returnType {
//     // function body
// }

// function add(a: number, b: number): number {
//   return a + b;
// }

// function multiply(a: number, b: number) {
//   return a * b; // inferred(Anuman) as number
// }

// function logMessage(msg: string): void {
//   console.log(msg);
// }

// Never :- never ka use tab karo jab koi function kabhi return nahi karta (jaise ki woh error throw karta hai ya phir hamesha ke liye chalne lagta hai).
// function throwError(): never {
//   throw new Error("Something Went Wrong!");
// }

// function square(n: number) {
//   return n * n;
// }

// function createUser(name: string, age: number): { name: string; age: number } {
//   return { name, age };
// }

// function getStatus(code: number): string | null {
//   if (code === 200) return "OK";
//   return null;
// }

// <--------------- never type ------------------->
// never :- Use never when a function never returns (e.g., it throws an error or runs forever):
// function throwError(): never {
//   throw new Error("Something went wrong!");
// }

// function simple(): never {
//   while (true) {
//     console.log("Hii Hello, Hii Hello");
//   }
// }

// function sayHello():never { // throw Error, because this function void type
//   console.log("Hello")
// }

// <----------------- function params type ------------------>
// function paramsType(price: number, item: number, text: string) {
//   console.log(text + price * item);
// }
// paramsType(100, 50, "Price = ");

// function greet(
//   someVal: number | string | boolean | string[] | { id: number } | undefined
// ) {
//   console.log(someVal);
// }
// greet(42);
// greet("some text");
// greet(true);
// greet(["item"]);
// greet({ id: 101 });

function greet(someVal: unknown) {
  console.log(someVal);
}
greet(42);
greet("some text");
greet(true);
greet(["item"]);
greet({ id: 101 });
