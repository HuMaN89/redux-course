import { ASYNC_DECREMENT, CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function asyncDecrement(addBtn) {
  return function (dispatch) {
    addBtn.disabled = true;

    setTimeout(() => {
      dispatch({ type: ASYNC_DECREMENT });
      addBtn.disabled = false;
    }, 2000);
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}
export function changeTheme(newTheme) {
  return {
    payload: newTheme,
    type: CHANGE_THEME,
  };
}
