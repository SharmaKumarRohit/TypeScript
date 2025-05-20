"use strict";
// const input = document.getElementById("username") as HTMLInputElement; // syntax one
// const input = <HTMLInputElement>document.getElementById("username");
// console.log(input.value);
// const input = document.getElementById("username") as HTMLInputElement;
// const button = document.getElementById("submit") as HTMLInputElement;
// button.addEventListener("click", () => {
//   if (input) {
//     console.log("Username:", input.value);
//   }
// });
// const input = document.getElementById("username") as HTMLInputElement | null;
// if (input) {
//   console.log(input?.value);
// }
// <------ mini project theme switcher ------>
// Get references to button and body
const button = document.getElementById("themeToggle");
const body = document.body;
// Detect current theme from body class
let currentTheme = body.classList.contains("dark")
    ? "dark"
    : "light";
// Function to toggle theme
function toggleTheme() {
    if (currentTheme === "light") {
        body.classList.remove("light");
        body.classList.add("dark");
        button.textContent = "Switch to Light Theme";
        currentTheme = "dark";
    }
    else {
        body.classList.remove("dark");
        body.classList.add("light");
        button.textContent = "Switch to Dark Theme";
        currentTheme = "light";
    }
}
// Add event listener
button.addEventListener("click", toggleTheme);
