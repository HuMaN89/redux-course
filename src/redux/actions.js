import {
  CHANGE_THEME,
  DECREMENT,
  DISABLED_BTNS,
  ENABLED_BTNS,
  INCREMENT,
} from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function disabledBtns() {
  return {
    type: DISABLED_BTNS,
  };
}
export function enabledBtns() {
  return {
    type: ENABLED_BTNS,
  };
}
export function asyncDecrement(addBtn) {
  return function (dispatch) {
    dispatch(disabledBtns());

    setTimeout(() => {
      dispatch({ type: DECREMENT });
      dispatch(enabledBtns());
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
