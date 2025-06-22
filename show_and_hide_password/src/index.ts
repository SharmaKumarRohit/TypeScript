const inp = document.getElementById("inp") as HTMLInputElement | null;
const btn = document.getElementById("btn") as HTMLButtonElement | null;
if (inp && btn) {
  btn.addEventListener("click", () => {
    if (inp.type === "password") {
      inp.type = "text";
      btn.textContent = "🙈";
    } else {
      inp.type = "password";
      btn.textContent = "👁️";
    }
  });
}
