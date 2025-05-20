"use strict";
// <------------------ Utility types ------------------->
// 1. Partial<Type>✅
// Makes all properties optional.
// type UserInfo = {
//   name: string;
//   age: number;
// };
// const user: Partial<UserInfo> = { // { name?: string; age?: number }
//   name: "Rohit",
// };
// type UserInfo = {
//   name: string;
//   age?: number;
// };
// const user: UserInfo = {
//   name: "Abhay",
// };
// type UserInfo = {
//   name: string;
//   age: number;
// };
// function getUser(data: Partial<UserInfo>) {
//   return data;
// }
// getUser({ name: "Rohit" });
// 2. Required<Type>✅
// Makes all properties required (opposite of Partial).
// interface OptionalUser {
//     name?:string
//     age?:number
// }
// const fullUser:Required<OptionalUser> = {
//     name: "Rohit",
//     age: 23
// }
// interface OptionalUser {
//   name?: string;
//   age?: number;
// }
// function getUser(data: Required<OptionalUser>) {
//   return data;
// }
// getUser({ name: "Abhay", age: 23 });
// 3. Readonly<Type>✅
// Makes all properties read-only.
// type User = {
//     name: string
//     age: number
// }
// const user:Readonly<User> = {
//     name: "MyLapi",
//     age: 2
// }
// user.name = "My curse" // can't modify properties
// 4. Pick<Type, Keys>✅
// Create a type by picking specific properties.
// type User = {
//   id: number;
//   name: string;
//   age: number;
// };
// const user: Pick<User, "id" | "name"> = {
//   id: 101,
//   name: "Rohit",
// };
// 5. Omit<Type, Keys>✅
// Create a type by omitting specific properties.
// type CollegeType = {
//   collegeName: string;
//   location: string;
//   students: number;
//   branch: string;
// };
// const stu1: Omit<CollegeType, "students" | "branch"> = {
//   collegeName: "B C College",
//   location: "Asansol",
// };
// 6. Exclude<UnionType, ExcludedMembers>✅
// Removes members from a union type.
// type Roles = "admin" | "user" | "guest";
// let role1: Exclude<Roles, "guest"> = "admin"; // "admin" | "user"
// role1 = "user";
// 7. Extract<Type, Union>✅
// Extracts common members from a union type.
// type APIStatus = "fulfilled" | "pending" | "rejected";
// let status1: Extract<APIStatus, "fulfilled" | "rejected"> = "fulfilled";
// status1 = "rejected";
// status1 = "fulfilled";
// 8. NonNullable<Type>✅
// Removes null and undefined from a type.
// type RadomType = number | string | null | undefined | string[];
// let randomType: NonNullable<RadomType> = 23;
// randomType = "Hello";
// 9. Record<Keys, Type>✅
// Creates an object type with specific keys and a uniform value type.
// type Role = "admin" | "user";
// let roles: Record<Role, boolean> = {
//   admin: true,
//   user: false,
// };
// 10. ReturnType<Function>✅
// Gets the return type of a function.
// function greet() {
//   return "Hello";
// }
// type GreetReturn = ReturnType<typeof greet>; // string
// 11. Parameters<Function>✅
// Gets the parameter types of a function as a tuple.
// function add(a: number, b: number) {
//   return a + b;
// }
// type AddParams = Parameters<typeof add>; // [number, number]
// Utility         -->    Type	Description
// Partial<T>	     -->    Makes all properties optional
// Required<T>	   -->    Makes all properties required
// Readonly<T>	   -->    Makes all properties readonly
// Record<K, T>	   -->    Object with specific keys and value type
// Pick<T, K>	     -->    Picks specific properties
// Omit<T, K>	     -->    Omits specific properties
// Exclude<T, U>   -->    Removes from union
// Extract<T, U>   -->    Extracts from union
// NonNullable<T>  -->    Removes null and undefined
// ReturnType<T>   -->    Gets function return type
// Parameters<T>   -->    Gets function parameter types
