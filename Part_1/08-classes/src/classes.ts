// <----------------- classes ------------------->
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet(): void {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// }
// const person = new Person("Rohit", 23);
// person.greet();

// class Product {
//   product_name: string;
//   product_price: number;
//   product_ID: number;
//   isOrder: boolean;
//   isBuy: boolean;
//   constructor(product_name: string, product_price: number, product_ID: number) {
//     this.product_name = product_name;
//     this.product_price = product_price;
//     this.product_ID = product_ID;
//     this.isOrder = false;
//     this.isBuy = false;
//   }
//   orderProduct(): void {
//     this.isOrder = true;
//   }
//   buyProduct() {
//     if (this.isOrder) {
//       return `Product ${this.product_name} is ordered in ${this.product_price}`;
//     } else {
//       return "No product ordered";
//     }
//   }
// }
// const product = new Product("Sumsung", 100000, 101);
// console.log(product.buyProduct());
// product.orderProduct();
// console.log(product.buyProduct());

// <---------------- Access Modifiers ------------------>
// classes has by default public
// class User {
//   //   public user_id: number;
//   //   public user_name: string;
//   //   public user_age: number;
//   //   private user_id: number;
//   //   private user_name: string;
//   //   private user_age: number;
//   protected user_id: number;
//   protected user_name: string;
//   protected user_age: number;
//   constructor(user_id: number, user_name: string, user_age: number) {
//     this.user_id = user_id;
//     this.user_name = user_name;
//     this.user_age = user_age;
//   }
//   greet(): void {
//     console.log(
//       `Hi, I'm ${this.user_name} and I'm ${this.user_age} years old. Also user_id is ${this.user_id}`
//     );
//   }
// }
// const user = new User(101, "Rohit", 23);
// // console.log(user.user_id);
// // console.log(user.user_name);
// // console.log(user.user_age);
// // user.greet();
// class UserSubClass extends User {
//   constructor() {
//     super(102, "Abhay", 23);
//   }
//   anotherGreet() {
//     return `user name is ${this.user_name}`;
//   }
// }
// const anotherUser = new UserSubClass();
// anotherUser.greet();
// console.log(anotherUser.anotherGreet());

// class Animal {
//   protected type: string;
//   constructor(type: string) {
//     this.type = type;
//   }
//   makeSound(): void {
//     console.log(`${this.type} makes a sound.`);
//   }
// }

// <-------------- Inheritance ----------------->
// class Animal {
//   protected type: string;
//   constructor(type: string) {
//     this.type = type;
//   }
//   makeSound(): void {
//     console.log(`${this.type} makes a sound.`);
//   }
// }
// class Dog extends Animal {
//   constructor() {
//     super("Dog");
//   }
//   bark(): void {
//     console.log("Woof!");
//   }
// }
// const myDog = new Dog();
// myDog.makeSound();
// myDog.bark();

// class Auth {
//   loggedIn(name: string, password: string): string {
//     if (name && password) {
//       return "You loggedIN";
//     } else {
//       return "Nothing loggedIN";
//     }
//   }
// }
// class Student extends Auth {
//   checkMarks(marks: number): string {
//     if (marks > 33) {
//       return "Pass";
//     } else {
//       return "Failed";
//     }
//   }
// }
// class Teacher extends Auth {
//   subject(sub: string): string {
//     return `My teacher teach ${sub}`;
//   }
// }
// // const s1 = new Student();
// // console.log(s1.loggedIn("Rohit", "password"));
// // console.log(s1.checkMarks(76));
// const t1 = new Teacher();
// console.log(t1.loggedIn("Harshit", "password"));
// console.log(t1.subject("React"));

// <----------------- getter and setter ------------------>
// class User {
//   private _username: string;
//   constructor(username: string) {
//     this._username = username;
//   }
//   get username() {
//     return this._username;
//   }
//   set username(val: string) {
//     this._username = val;
//   }
// }
// const user = new User("admin");
// console.log(user.username);
// user.username = "superadmin";
// console.log(user.username);

// class EmpInfo {
//   _name: string = "Rohit";
//   _email: string = "rohit@gmail.com";
//   get name(): string {
//     return "Mr. " + this._name;
//   }
//   set email(val: string) {
//     this._email = "emp_" + val;
//   }
// }
// const emp1 = new EmpInfo();
// console.log(emp1.name);
// emp1.email = "sam@test.com";
// console.log(emp1._email);

// <--------------- interface with class -------------->
// interface Shape {
//   area():number
// }
// class Rectangle implements Shape {
//   constructor(public width:number, public height:number) {}
//   area():number {
//     return this.width * this.height
//   }
// }

// interface Shape {
//   area(): number;
// }
// class Rectangle implements Shape {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.width * this.height;
//   }
// }
// const rec = new Rectangle(4, 8);
// console.log(rec.area());

// interface CollegeDataType {
//   name: string;
//   displayTeachersName(): void;
//   getStudentList(): string[];
// }
// class CollegeData implements CollegeDataType {
//   name: string;
//   constructor(cName: string) {
//     this.name = cName;
//   }
//   displayTeachersName(): void {
//     console.log("sam", "peter", "jone");
//   }
//   getStudentList(): string[] {
//     return ["harry", "Jane", "papr"];
//   }
// }
// const college = new CollegeData("IIT Delhi");
// college.displayTeachersName();
// console.log(college.getStudentList());

// <---------------- static members ----------------->
// Remember --> Belong to the class, not instances.
// class MathHelper {
//   static PI: number = 3.14159;
//   static square(n: number): number {
//     return n * n;
//   }
// }
// console.log(MathHelper.PI);
// console.log(MathHelper.square(5));

// class Company {
//   static name: string = "Google";
//   static getName() {
//     return "Google ABC";
//   }
// }
// const c1 = new Company();
// // console.log(c1.name);
// // console.log(Company.name);
// console.log(Company.getName());

// <---------------- type guard ------------------->
// Example 1: typeof Type Guard
// Works for primitive types (string, number, boolean, etc.)
// function printId(id: number | string) {
//   if (typeof id === "number") {
//     console.log(id.toFixed(2));
//   } else {
//     console.log(id.toUpperCase());
//   }
// }
// printId(101);
// printId("hii");

// Example 2: instanceof Type Guard
// Works for class instances.
// class Dog {
//   bark() {
//     console.log("Woof!");
//   }
// }
// const a1 = new Dog();
// class Cat {
//   meow() {
//     console.log("Meow!");
//   }
// }
// const a2 = new Cat();
// function speak(pet: Dog | Cat) {
//   if (pet instanceof Dog) {
//     pet.bark();
//   } else {
//     pet.meow();
//   }
// }
// speak(a1);
// speak(a2);

// Example 3: Property Check (in Operator)
// Check if a property exists on an object.
// type Car = { drive: () => void };
// type Boat = { sail: () => void };
// const mastang: Car = {
//   drive() {
//     console.log("drive");
//   },
// };
// const boat: Boat = {
//   sail() {
//     console.log("sail");
//   },
// };
// function move(vehicle: Car | Boat) {
//   if ("drive" in vehicle) {
//     vehicle.drive();
//   } else {
//     vehicle.sail();
//   }
// }
// move(mastang);
// move(boat);

// <------------------ Practice(type guards) -------------------->

// let val: number | string | boolean = "hello";
// val = true;
// // val = 23;
// if (typeof val === "boolean") {
//   console.log("this is boolean type");
// }
// if (typeof val === "string") {
//   console.log("this is string type");
// }
// if (typeof val === "number") {
//   console.log("this is number type");
// }

// class Order {}
// let o1 = new Order();
// class Product {}
// let p1 = new Product();
// function checkDetail(data: Order | Product) {
//   if (data instanceof Order) {
//     console.log("this is order");
//   } else {
//     console.log("this is product");
//   }
// }
// // checkDetail(o1);
// checkDetail(p1);

interface userData {
  name: string;
  city: string;
}
interface userInfo {
  id: number;
  email: string;
}
let data1: userData | userInfo = {
  name: "The Rock",
  city: "Noida",
};
let data2: userData | userInfo = {
  id: 101,
  email: "rock@gmail.com",
};
function checkDetail(data: userData | userInfo) {
  if ((data as userData).name !== undefined) {
    console.log("this is userData");
  } else {
    console.log("this is userInfo");
  }
}
// checkDetail(data1);
checkDetail(data2);
