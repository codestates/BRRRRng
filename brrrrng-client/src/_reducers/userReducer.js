import {
  GET_USERINFO,
  DELETE_USER,
  ADD_TO_MYCARLIST,
  REMOVE_FROM_MYCARLIST,
  ADD_TO_ADDRESSLIST,
  REMOVE_FROM_ADDRESTLIST,
} from "../_actions/types";

export default function user (state = {}, action){

  switch (action.type) {
    case GET_USERINFO:
      return { 
        ...state, 
        userInfo: action.payload 
      };
    case DELETE_USER: 
      return {
        
      }
    case ADD_TO_ADDRESSLIST:
      return {
        ...state,
        success: action.payload,
      };
    case REMOVE_FROM_ADDRESTLIST:
      return {
        ...state,
        success: action.payload,
      };
    case ADD_TO_MYCARLIST:
      return {
        ...state,
        success: action.payload,
      };
    case REMOVE_FROM_MYCARLIST:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
}
