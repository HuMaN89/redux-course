import "./styles.css";

const addBtn = document.querySelector("#add"),
  subBtn = document.querySelector("#sub"),
  asBtn = document.querySelector("#async"),
  counter = document.querySelector("#counter"),
  theme = document.querySelector("#theme");

let state = 0;

function render() {
  counter.textContent = state;
}
function add() {
  state++;
  render();
}
function del() {
  state--;
  render();
}
function as() {
  setTimeout(() => {
    state++;
    render();
  }, 2000);
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", del);
asBtn.addEventListener("click", as);
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

render();
