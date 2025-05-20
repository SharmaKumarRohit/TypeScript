"use strict";
// <----------------- Generic --------------------->
// Generics let you write code that works with any data type, while still keeping type safety.
// ✅ Now it's flexible and type-safe!
// function identity<T>(value: T): T {
//   return value;
// }
// const str = identity<string>("Hello");
// const num = identity<number>(100);
// console.log(str);
// console.log(num);
// Note --> ❌ You lose type safety — any allows anything, even errors.
// function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
//   return [...arr1, ...arr2];
// }
// const result = mergeArrays<number>([1, 2], [3, 4]);
// console.log(result);
// interface Box<T> {
//   value: T;
// }
// const stringBox: Box<string> = { value: "hello" };
// const numberBox: Box<number> = { value: 42 };
// class DataStorage<T> {
//   private data: T[] = [];
//   add(item: T) {
//     this.data.push(item);
//   }
//   getAll(): T[] {
//     return this.data;
//   }
// }
// const stringStorage = new DataStorage<string>();
// stringStorage.add("Hello");
// console.log(stringStorage.getAll());
// const numberStorage = new DataStorage<number>();
// numberStorage.add(58);
// console.log(numberStorage.getAll());
function printLength(item) {
    console.log(item.length);
}
printLength("hello"); // ✅ string has length
printLength([1, 2, 3]); // ✅ array has length
// printLength(42);           ❌ number doesn't have length
// | Feature         | Purpose                                 |
// | --------------- | --------------------------------------- |
// | `function<T>()` | Generic function                        |
// | `interface<T>`  | Generic interface                       |
// | `class<T>`      | Generic class                           |
// | `extends`       | Add constraints to type variables       |
// | Benefits        | Reusability + Type Safety + Flexibility |
