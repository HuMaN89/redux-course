import "./styles.css";

const addBtn = document.querySelector("#add"),
  subBtn = document.querySelector("#sub"),
  asBtn = document.querySelector("#async"),
  counter = document.querySelector("#counter"),
  theme = document.querySelector("#theme");

counter.innerHTML = 0;

function add() {
  return (counter.innerHTML = +counter.innerHTML + 1);
}
function del() {
  return (counter.innerHTML = +counter.innerHTML - 1);
}
function as() {
  return (counter.innerHTML = Math.round(Math.random() * 10));
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", del);
asBtn.addEventListener("click", as);
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
