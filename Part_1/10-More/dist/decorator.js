"use strict";
// <--------------- Decorator ---------------->
// function classLogger(constructor: Function) {
//   console.log(constructor.name);
// }
// function getProperty(target: any, key: any) {
//   console.log(key.name);
// }
// @classLogger
// class CustomMaths {
//   @getProperty
//   value1: number;
//   value2: number;
//   constructor(x: number, y: number) {
//     this.value1 = x;
//     this.value2 = y;
//   }
// }
// const cm1 = new CustomMaths(10, 5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// <--------------- Decorator ------------------>
// A decorator is a special kind of declaration that can attach behavior to a class or class member (like a method or property).
// function MyDecorator(constructor: Function) {
//   console.log("Decorator called on:", constructor.name);
// }
// @MyDecorator
// class MyClass {}
// 🔧 Types of Decorators✅
// 1. Class Decorator✅
// Applies to the entire class.
// function Logger(constructor: Function) {
//   console.log("Logging class:", constructor.name);
// }
// @Logger
// class Person {}
// 2. Property Decorator✅
// Used on class properties.
// function LogProperty(target: any, propertyKey: string) {
//   console.log(`Property Decorator: ${propertyKey}`);
// }
// class Product {
//   @LogProperty
//   title: string = "Book";
// }
// 3. Method Decorator✅
// Used on class methods.
// function LogMethod(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.value;
//   descriptor.value = function (...args: []) {
//     console.log(`Calling ${methodName} with`, args);
//     return original.apply(this, args);
//   };
// }
// class Calculator {
//   @LogMethod
//   add(a: number, b: number): number {
//     return a + b;
//   }
// }
// const c1 = new Calculator();
// console.log(c1.add(2, 5));
// 4. Parameter Decorator✅
// Used on parameters of methods.
// function LogParameter(target: Object, methodName: string, index: number) {
//   console.log(`Parameter in ${methodName} at index ${index}`);
// }
// class Greeter {
//   greet(@LogParameter message: string) {
//     console.log(message);
//   }
// }
//  Real-world Example: @readonly Decorator.✅
// function readonly(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   descriptor.writable = false;
// }
// class Example {
//   @readonly
//   greet() {
//     return "Hello";
//   }
// }
// const e1 = new Example();
// console.log(e1.greet());
// <---------- override function with decorator --------->
function updateSum(target, key, descriptor) {
    descriptor.value = function sum(x, y) {
        // return `The output of ${x} and ${y} is ${x + y}`;
        return `${x} + ${y} = ${x + y}`;
    };
}
class CustomMaths {
    sum(a, b) {
        return a + b;
    }
}
__decorate([
    updateSum
], CustomMaths.prototype, "sum", null);
const cm1 = new CustomMaths();
console.log(cm1.sum(10, 20));
