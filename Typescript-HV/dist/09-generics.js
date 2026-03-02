// generics
// Generics allow you to create reusable components that work with different data types while maintaining
// type safety. They use a placeholder type (like <T>) that is specified when the function, class, or interface is used.
// identity(5) => 5
// identity("hello world") => "hello world"
// function identity(data: any) {
//   return data;
// }
// console.log(identity(5));
// console.log(identity("hello world"));
// const val = identity(5);
// val.toLowerCase();
// const val = identity("Hello World");
// console.log(val.toLowerCase());
// identity function with generics
// function identity<T>(data: T): T {
//   return data;
// }
// const val: string = identity<string>("Hello World");
// console.log(val.toUpperCase());
// const val2: number = identity<number>(5);
// const val3: boolean = identity(true); // type inference
// Add constraint in generic function
// Esh generic function mai extends keyword ka meaning hai, ya generic function string and number data type he accept karega.
// function identityWithConstraints<T extends string | number>(data: T): T {
//   return data;
// }
// const val = identityWithConstraints<string>("hello there");
// const val2 = identityWithConstraints<number>(5);
// const val3 = identityWithConstraints<boolean>(true) // throw error because this generic function accept only number and string
// use array in generic
// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }
// console.log(getFirstElement<string>(["abcd", "efgh"]));
// console.log(getFirstElement<number>([5, 6]));
// pair("hello", 5) => ["hello", 5]
// function pair<T, U>(key: T, value: U): [T, U] {
//   return [key, value];
// }
// console.log(pair("name", "rohit"));
function getLength(data) {
    return data.length;
}
console.log(getLength("hello"));
console.log(getLength([1, 5, 8]));
export {};
