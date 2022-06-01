import { combineReducers } from "redux";
import {
  CHANGE_THEME,
  DECREMENT,
  DISABLED_BTNS,
  ENABLED_BTNS,
  INCREMENT,
} from "./types";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
}

function themeReducer(state = { value: "light", disabled: false }, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload };
    case ENABLED_BTNS:
      return { ...state, disabled: false };
    case DISABLED_BTNS:
      return { ...state, disabled: true };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
