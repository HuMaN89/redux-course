import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { DECREMENT, INCREMENT } from "./redux/types";
import thunk from "redux-thunk";
import "./styles.css";
import {
  asyncDecrement,
  changeTheme,
  decrement,
  increment,
} from "./redux/actions";
import logger from "redux-logger";

const addBtn = document.querySelector("#add"),
  subBtn = document.querySelector("#sub"),
  asBtn = document.querySelector("#async"),
  counter = document.querySelector("#counter"),
  theme = document.querySelector("#theme");

const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));
addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});
subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});
store.subscribe(() => {
  counter.textContent = store.getState().counter;
  document.body.className = store.getState().theme.value;
});

asBtn.addEventListener("click", () => {
  store.dispatch(asyncDecrement(addBtn));
});
theme.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  store.dispatch(changeTheme(newTheme));

  // document.body.classList.toggle("dark");
});
store.dispatch({ type: "START" });
