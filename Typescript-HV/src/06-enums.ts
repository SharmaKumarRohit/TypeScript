// enums --> Enums are used to define a set of named constants, making code more readable and maintainable. They can represent related values as numeric or string types.
// group of named constants
// enums is special feature of typescript, not in javascript.

// enum Direction {
//   UP,
//   DOWN,
//   LEFT,
//   RIGHT,
// }

// function getDirection(direction: Direction): void {
//   if (direction === Direction.UP) {
//     console.log("user is going up");
//   } else if (direction === Direction.DOWN) {
//     console.log("user is going down");
//   } else if (direction === Direction.LEFT) {
//     console.log("user is going left");
//   } else if (direction === Direction.RIGHT) {
//     console.log("user is going right");
//   }
// }
// getDirection(Direction.UP);

// enum OrderStatus {
//   DELIVERED,
//   CANCELED,
//   RETURNED,
//   PENDING,
// }

// function generateMessageForOrderStatus(status: OrderStatus): void {
//   if (status === OrderStatus.DELIVERED) {
//     console.log("successfully delivered");
//   }
// }
// generateMessageForOrderStatus(OrderStatus.DELIVERED);

// also you can use type for your constant value, instead of use enums
// type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

// enum default value 0 (start) or other enum (after start enum), increment by 1
// enum Direction {
//   UP,
//   DOWN,
//   LEFT,
//   RIGHT,
// }
// console.log(Direction.UP);

// also you can assign value on enum
// enum Direction {
//   UP = 10,
//   DOWN = 20,
//   LEFT = 30,
//   RIGHT,
// }
// console.log(Direction.RIGHT); // enums are incrementated value by 1 now this console output is 31

// also assign string value on enum. And also mix the value on enum like number or string
// enum OrderStatus {
//   DELIVERED = "DELIVERED",
//   CANCELED = "CANCELED",
//   RETURNED = "RETURNED",
//   PENDING = 30,
// }
// console.log(OrderStatus.DELIVERED);

// Constant enums are enums that are completely removed at compile time and replaced with their literal values. This improves performance and reduces generated Javascript code.
const enum Direction {
  UP = 10,
  DOWN = 20,
  LEFT = 30,
  RIGHT,
}
console.log(Direction.UP);
