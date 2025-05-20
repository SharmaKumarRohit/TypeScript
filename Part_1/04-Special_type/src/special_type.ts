// <--------------- Any --------------------->
// Any :- The any type TypeScript ka type checking off kar deta hai uss variable ke liye. Aap usme kuch bhi assign kar sakte ho, aur uske saath kuch bhi kar sakte ho.
// let value: string | number | boolean | string[] | {} = "hey";
// let value: any = "Hey";
// value = 500;
// value = true;
// value = ["Hii"];
// value = { id: 100 };
// console.log(value.toUpperCase()); // No error, even if it might crash at runtime
// // Be careful: any removes all safety. It’s like working in plain JavaScript.

// <------------------- Unknown ------------------->
// unknown type ek safe alternative hai any ka. Aap isme kuch bhi assign kar sakte ho, lekin jab tak aap iska type narrow (specify) nahi karte, tab tak aap isse use nahi kar sakte.
// let value:string | number | boolean | string[] | {} | undefined = "Hey"
// let value: unknown = "Hey";
// value = 500;
// value = false;
// value = ["Hii"];
// value = { id: 101 };
// if (typeof value === "string") {
//   value.toUpperCase(); // Safe now!
// }

// function handleData(input: unknown) {
//   if (typeof input === "string") {
//     console.log("Uppercase: ", input.toUpperCase());
//   } else if (typeof input === "number") {
//     console.log("Double: ", input * 2);
//   } else {
//     console.log("Unsupported type.");
//   }
// }
// handleData("Hii");
// handleData(10);
// handleData(true);
