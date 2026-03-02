function add(a: number, b: number): number {
  return a + b;
}

const add2 = function (a: number, b: number): number {
  return a + b;
};

const add3 = (a: number, b: number): number => {
  return a + b;
};

const add4 = (a: number, b: number): number => a + b;

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

// The double question mark (??) is called the nullish coalescing operator.
// ?? returns "guest" only if is null or undefined
// Otherwise, it uses the actual value of name
function greet2(name?: string): void {
  console.log(`Hello ${name ?? "guest"}`);
}

// default parameter
function greet3(name: string = "guest"): void {
  console.log(`Hello ${name}`);
}

// never return type
// The never return type is used for functions that never successfully return a value. These functions either throw an error or run infinite loop.
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("custom error message");

// function overloading
// function overloading allows you to define multiple function signatures for the same function with different
// parameter types of counts, while using one implementation. Typescript uses these signatures for type
// checking, but only the implementation contains the actual logic.
function combine(a: number, b: number): number; // function signature
function combine(a: string, b: string): string; // function signature

// actual implementation of function
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  } else {
    throwError("invalid args");
  }
}

console.log(combine(2, 3));
console.log(combine("hello", "world"));

// function overloading by parameter count
function greet4(): string;
function greet4(name: string): string;

function greet4(name?: string): string {
  return `Hello ${name ?? "guest"}`;
}

console.log(greet4());
console.log(greet4("Rohit"));
