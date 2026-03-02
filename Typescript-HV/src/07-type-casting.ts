// type casting / assertion
// DOM
// Type assertion helps override TypeScript's inferred type when you are certain about the value's type.

// addOrConcat(2, 3, "add") --> 5
// addOrConcat(2, 3, "concat") --> 23

// function addOrConcat(
//   a: number,
//   b: number,
//   c: "add" | "concat",
// ): number | string {
//   if (c === "add") {
//     return a + b;
//   }
//   return "" + a + b;
// }

// console.log(addOrConcat(2, 3, "add"));
// console.log(addOrConcat(2, 3, "concat"));

// const value: string = addOrConcat(2, 3, "concat") as string;
// const value2: number = addOrConcat(2, 3, "add") as number;

// another syntax to implement type casting
// const value3: string = <string>addOrConcat(2, 3, "concat");
// const value4: number = <number>addOrConcat(2, 3, "add");
// console.log(value4);

// Use type assertion in DOM
const nameInput = document.getElementById("name")! as HTMLInputElement;
const ageInput = document.getElementById("age")! as HTMLInputElement;
const form = document.getElementById("user-form")! as HTMLFormElement; // ! means form null nahi hoga
const output = document.getElementById("output")! as HTMLDivElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameVal = nameInput.value;
  const ageVal = ageInput.value;
  output.innerHTML = `<p>${nameVal} : ${ageVal}</p>`;
});
