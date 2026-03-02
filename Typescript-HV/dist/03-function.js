function add(a, b) {
    return a + b;
}
const add2 = function (a, b) {
    return a + b;
};
const add3 = (a, b) => {
    return a + b;
};
const add4 = (a, b) => a + b;
function greet(name) {
    console.log(`Hello ${name}`);
}
// The double question mark (??) is called the nullish coalescing operator.
// ?? returns "guest" only if is null or undefined
// Otherwise, it uses the actual value of name
function greet2(name) {
    console.log(`Hello ${name !== null && name !== void 0 ? name : "guest"}`);
}
// default parameter
function greet3(name = "guest") {
    console.log(`Hello ${name}`);
}
// never return type
// The never return type is used for functions that never successfully return a value. These functions either throw an error or run infinite loop.
function throwError(message) {
    throw new Error(message);
}
// actual implementation of function
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    else {
        throwError("invalid args");
    }
}
console.log(combine(2, 3));
console.log(combine("hello", "world"));
function greet4(name) {
    return `Hello ${name !== null && name !== void 0 ? name : "guest"}`;
}
console.log(greet4());
console.log(greet4("Rohit"));
export {};
