"use strict";
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
if (inp && btn) {
    btn.addEventListener("click", () => {
        if (inp.type === "password") {
            inp.type = "text";
            btn.textContent = "🙈";
        }
        else {
            inp.type = "password";
            btn.textContent = "👁️";
        }
    });
}
