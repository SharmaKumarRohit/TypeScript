// Array
// const fruits: string[] = ["Mango", "Grapes"];
// const numbers: number[] = [2, 3, 5];
// numbers.push(12);
// type inference --> type inference means, typescript detect variable type automatically
const fruits = ["Apple", "Banana"];
const numbers = [1, 2, 3];
// const myArray: (string | number)[] = [1, 2, 3, "1", "5"];
const myArray = [1, "one", 2, "two"];
myArray.push(5);
myArray.push("five");
const person = [{ firstName: "Abhay", lastName: "Sharma" }];
// const person: readonly Person[] = [{ firstName: "Rohit", lastName: "Kumar" }];
// person.push()
// tuples
// array with fixed size and types
const myCustomTuple = ["Mango", 2, 3];
const myCustomTuple2 = ["string1", "string2", 3];
export {};
