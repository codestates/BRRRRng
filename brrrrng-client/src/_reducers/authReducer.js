import {
  SUCCESS_SIGNUP,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  AUTH_USER,
} from "../_actions/types";

export default function auth (state = {}, action) {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        loginSuccess: action.payload
      };
    case SUCCESS_SIGNUP:
      return {
        ...state,
        register: action.payload
      };
    case SUCCESS_LOGOUT:
      return {
        ...state
      };
    case AUTH_USER:
      return {
        ...state,
        isAuth: action.payload
      };
    default:
      return state;
  }
}
