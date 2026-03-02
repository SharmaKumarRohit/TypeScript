// any --> any disables type checking. A variable with type any can hold any value, and you can perform any operation on it without errors. It’s flexible but unsafe, and should be avoided when possible.
let someVariable = 12;
// someVariable = "hello";
// console.log(someVariable.toFixed(2));
// unknown --> unknown is a safe alternative to any. A variable of type unknown can hold any value, but you must check its type before using it. This helps prevent runtime errors.
let someVariable2;
someVariable2 = 12;
let boolVar;
if (typeof someVariable2 === "number") {
    console.log(someVariable2.toFixed(2));
}
someVariable2 = true;
if (typeof someVariable2 === "boolean") {
    boolVar = someVariable2;
}
export {};
