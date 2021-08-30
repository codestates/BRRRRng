import axios from "axios";
import {
  GET_USERINFO,

  DELETE_USER,

  ADD_TO_MYCARLIST,
  REMOVE_FROM_MYCARLIST,
  ADD_TO_ADDRESSLIST,
  REMOVE_FROM_ADDRESTLIST,
} from "./types";

export const getUserInfo = (id) => {
  const userInfo = axios.get(`http://localhost:4000/user/${id}/info`).then(response => response.data.userInfo);

  return {
    type: GET_USERINFO,
    payload: userInfo,
  };

  
};

export const deleteUser = (id) => {
  const resResult = axios.delete(`http://localhost:4000/user/${id}/delete`).then(response => response.data.success)

  return {
    type: DELETE_USER,
    payload: resResult
  }
}

export const addToMycarList = (id, data) => {
  const resResult = axios
    .put(`http://localhost:4000/user/${id}/edit`, data)
    .then((result) => result.data.success);

  return {
    type: ADD_TO_MYCARLIST,
    payload: resResult,
  };
};

export const removeFromMycarList = (id, idx) => {
  const resResult = axios
    .put(`http://localhost:4000/user/${id}/edit`, idx)
    .then((result) => result.data.success);

  return {
    type: REMOVE_FROM_MYCARLIST,
    payload: resResult,
  };
};

export const addToMyaddressList = (id, data) => {
  const resResult = axios
    .put(`http://localhost:4000/user/${id}/edit`, data)
    .then((result) => result.data.success);

  return {
    type: ADD_TO_ADDRESSLIST,
    payload: resResult,
  };
};

export const removeFromMyaddressList = (id, idx) => {
  const resResult = axios
    .put(`http://localhost:4000/user/${id}/delete`, idx)
    .then((result) => result.data.success);

  return {
    type: REMOVE_FROM_ADDRESTLIST,
    payload: resResult,
  };
};
