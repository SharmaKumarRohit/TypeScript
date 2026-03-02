// classes
// declare a class
// class Animal {
//   name: string;
//   age: number;
//   species: string;
//   constructor(name: string, age: number, species: string) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
// }
// const tom = new Animal("Tom", 8, "Dog");
// console.log(tom);
// readonly property
// class Animal {
//   name: string;
//   age: number;
//   readonly species: string;
//   constructor(name: string, age: number, species: string) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
// }
// const tom = new Animal("Tom", 8, "Dog");
// console.log(tom);
// tom.name = "Tomy";
// tom.species = "Lion" // throw error because species readonly property
// class fields
// public, private modifiers
// By default shb kuch public hai
// class Animal {
//   public name: string;
//   public age: number;
//   public species: string;
//   private isHungry: boolean = true; // say, class field property with private modifier
//   constructor(name: string, age: number, species: string) {
//     console.log("constructor called"); // You creating new object, then constructor automatically called
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
//   hungerStatus(): string {
//     return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
// }
// const tom = new Animal("Tom", 8, "Dog");
// const tomy = new Animal("Tom", 8, "Dog");
// console.log(tom.hungerStatus());
// private methods --> You creating private method, this method only use within class
// getters, setters
// class Animal {
//   public name: string;
//   public age: number;
//   public species: string;
//   public isHungry: boolean = true;
//   constructor(name: string, age: number, species: string) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
//   public get hungerStatus(): string {
//     return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
//   public set feed(food: string) {
//     this.isHungry = false;
//     console.log(`${this.name} has been fed with ${food}`);
//   }
//   public get info(): string {
//     return `${this.name} is a ${this.age} year old ${this.species}`;
//   }
// }
// const tom = new Animal("Tom", 8, "Dog");
// const tomy = new Animal("Tom", 8, "Dog");
// console.log(tom.hungerStatus);
// tom.feed("bread");
// tom.feed = "bread";
// console.log(tom.hungerStatus);
// console.log(tom.info);
// child class in class
// super keyword
// parent class / base class
// class Animal {
//   public name: string;
//   public age: number;
//   public species: string;
//   public isHungry: boolean = true;
//   constructor(name: string, age: number, species: string) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
//   public get hungerStatus(): string {
//     return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
//   public set feed(food: string) {
//     this.isHungry = false;
//     console.log(`${this.name} has been fed with ${food}`);
//   }
//   public get info(): string {
//     return `${this.name} is a ${this.age} year old ${this.species}`;
//   }
// }
// // child class / derived
// class Dog extends Animal {
//   breed: string;
//   skills: string[];
//   constructor(name: string, age: number, breed: string, skills: string[]) {
//     super(name, age, "Dog");
//     this.breed = breed;
//     this.skills = skills;
//   }
// }
// const tom = new Dog("Tom", 8, "greyhound", ["sit", "come"]);
// console.log(tom.hungerStatus);
// tom.feed = "bread";
// console.log(tom.hungerStatus);
// protected modifier
// class Animal {
//   public name: string;
//   public age: number;
//   protected myProtectedProperty: number = 12;
//   public species: string;
//   public isHungry: boolean = true;
//   constructor(name: string, age: number, species: string) {
//     console.log(this.myProtectedProperty);
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
//   public get hungerStatus(): string {
//     return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
//   public set feed(food: string) {
//     this.isHungry = false;
//     console.log(`${this.name} has been fed with ${food}`);
//   }
//   public get info(): string {
//     return `${this.name} is a ${this.age} year old ${this.species}`;
//   }
// }
// child class / derived
// class Dog extends Animal {
//   breed: string;
//   skills: string[];
//   constructor(name: string, age: number, breed: string, skills: string[]) {
//     super(name, age, "Dog");
//     console.log(this.myProtectedProperty);
//     this.breed = breed;
//     this.skills = skills;
//   }
// }
// const tom = new Dog("Tom", 8, "greyhound", ["sit", "come"]);
// tom.feed = "bread";
// console.log(tom.myProtectedProperty)
// abstract classes and methods
// abstract classess ko create ham esh liya karte hai, because classes ko aaga extend kar shaka or abstract classes ka instance create nahi kar shakte ho.
// An abstract class is a class that cannot be instantiated directly. It is used as a base class for other classes.
// abstract class Animal {
//   public name: string;
//   public age: number;
//   public species: string;
//   public isHungry: boolean = true;
//   constructor(name: string, age: number, species: string) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
//   public get hungerStatus(): string {
//     return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
//   public set feed(food: string) {
//     this.isHungry = false;
//     console.log(`${this.name} has been fed with ${food}`);
//   }
//   public get info(): string {
//     return `${this.name} is a ${this.age} year old ${this.species}`;
//   }
//   // An abstract method is a method declared without implementation. Any class that extends the abstract class must implement that method.
//   abstract makeSound(): string;
// }
// class Dog extends Animal {
//   breed: string;
//   skills: string[];
//   constructor(name: string, age: number, breed: string, skills: string[]) {
//     super(name, age, "Dog");
//     this.breed = breed;
//     this.skills = skills;
//   }
//   makeSound(): string {
//     return `${this.name} is barking`;
//   }
// }
// const tom = new Dog("Tom", 8, "greyhound", ["sit", "come"]);
// console.log(tom.makeSound());
// const tom = new Animal("Tom", 8, "Dog") // Do not create abstract class instance, always extend abstract class and use it.
// implements interfaces
// interface IAnimal {
//   name: string;
//   age: number;
//   dummyMethod(): string;
// }
// abstract class Animal implements IAnimal {
//   public name: string;
//   public age: number;
//   public species: string;
//   public isHungry: boolean = true;
//   constructor(name: string, age: number, species: string) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
//   dummyMethod(): string {
//     return "";
//   }
//   public get hungerStatus(): string {
//     return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
//   public set feed(food: string) {
//     this.isHungry = false;
//     console.log(`${this.name} has been fed with ${food}`);
//   }
//   public get info(): string {
//     return `${this.name} is a ${this.age} year old ${this.species}`;
//   }
//   abstract makeSound(): string;
// }
// class Dog extends Animal {
//   breed: string;
//   skills: string[];
//   constructor(name: string, age: number, breed: string, skills: string[]) {
//     super(name, age, "Dog");
//     this.breed = breed;
//     this.skills = skills;
//   }
//   makeSound(): string {
//     return `${this.name} is barking`;
//   }
// }
// const tom = new Dog("Tom", 8, "greyhound", ["sit", "come"]);
// console.log(tom.makeSound());
// short syntax for constructor method
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.isHungry = true;
    }
    get hungerStatus() {
        return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
    }
    set feed(food) {
        this.isHungry = false;
        console.log(`${this.name} has been fed with ${food}`);
    }
    get info() {
        return `${this.name} is a ${this.age} year old ${this.species}`;
    }
}
class Dog extends Animal {
    constructor(name, age, breed, skills) {
        super(name, age, "Dog");
        this.breed = breed;
        this.skills = skills;
    }
    makeSound() {
        return `${this.name} is barking`;
    }
}
const tom = new Dog("Tom", 8, "greyhound", ["sit", "come"]);
tom.feed = "bread";
console.log(tom);
export {};
