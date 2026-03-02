// (type) and (interface) are used to define the shape of object.

// type
// Type is more flexible; it can define objects, unions, intersections, and primitives.
// type Person = {
//   firstName: string;
//   lastName: string;
//   age?: number;
// };

// const person: Person = {
//   firstName: "Rohit",
//   lastName: "Kumar",
// };

// interface
// Interface is mainly used for object structures and can be extended and reopened.
// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }

// const person: Person = {
//   firstName: "Rohit",
//   lastName: "Kumar",
//   age: 24,
// };

// Differences between type and interface
// Interface can be extended and merged
// Type cannot be merged but supports unions and intersections.
// Interface is mainly used for object shapes.
// Type is more flexible and can define primitives, unions, and tuples.

import { Person as BasePerson } from "./my-interfaces";

// In interface extend other interface type using (extends) keyword
// interface Person extends BasePerson {
//   heightInCm: number;
// }

// In 'type' extend other interface type using '&' intersection operator
type Person = BasePerson & {
  heightInCm: number;
};

const person: Person = {
  firstName: "Rohit",
  lastName: "Kumar",
  age: 24,
  address: {
    country: "asdf",
    zipcode: "werw",
    houseNumber: 123,
    city: ";lkl;k",
    state: "asdfwe",
  },
  heightInCm: 5,
};
console.log(person);
