const counter = document.getElementById("count") as HTMLElement;
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");
let count = 0;

const updateCount = () => {
  counter.textContent = count.toString();
};
increment?.addEventListener("click", () => {
  count++;
  updateCount();
});
reset?.addEventListener("click", () => {
  count = 0;
  updateCount();
});
decrement?.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});
