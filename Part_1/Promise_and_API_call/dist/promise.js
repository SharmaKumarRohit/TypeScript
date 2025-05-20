"use strict";
// <--------------- Promises ------------------->
// function test1() {
//   console.log("test1");
// }
// function test2() {
//   console.log("test2");
// }
// test1();
// test2();
// function test1() {
//   setTimeout(() => {
//     console.log("test1");
//   }, 2000);
// }
// function test2() {
//   console.log("test2");
// }
// test1();
// test2();
// function complexLogic(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("result is here");
//     }, 2000);
//   });
// }
// complexLogic().then((data: string) => {
//   console.log(data);
//   test2();
// });
// function test2() {
//   console.log("test2");
// }
// type resultType = {
//   name: string;
//   id: number;
//   email: string;
// };
// function complexLogic(): Promise<resultType> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Rohit", id: 101, email: "rohit@gmail.com" });
//     }, 2000);
//   });
// }
// complexLogic().then((data: resultType) => {
//   console.log(data);
// });
// interface resultType {
//   name: string;
//   id: number;
//   email: string;
// }
// function complexLogic(): Promise<resultType> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Abhay", id: 102, email: "abhay@gmail.com" });
//     }, 2000);
//   });
// }
// complexLogic().then((data) => {
//   console.log(data);
// });
// <------------- Promise ------------------->
// A Promise is an object that represents the eventual result (or failure) of an asynchronous operation.
// a powerful feature for handling asynchronous operations like API calls, file reading, or timeouts. ⚙️⏳
// const myPromise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done!");
//     reject("Something Went Wrong!");
//   }, 1000);
// });
// myPromise.then((data) => {
//   console.log(data);
// });
// myPromise.catch((error) => {
//   console.log(error);
// });
// function fetchUser(): Promise<{ name: string; age: number }> {
//   return new Promise((resolve) => {
//     resolve({ name: "Rohit", age: 23 });
//   });
// }
// fetchUser().then((data: { name: string; age: number }) => {
//   console.log(data);
// });
// async function getData(): Promise<string> {
//   return "Hello, World!";
// }
// async function showData() {
//   const data = await getData();
//   console.log(data);
// }
// showData();
// function fetchData(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Fetched data!");
//     }, 1500);
//   });
// }
// async function run() {
//   const result = await fetchData();
//   console.log(result);
// }
// run();
// async function riskyTask() {
//   try {
//     const result = await Promise.reject("Failed Task");
//     console.log(result);
//   } catch (error) {
//     console.log("Caught error:", error);
//   }
// }
// riskyTask();
// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData();
