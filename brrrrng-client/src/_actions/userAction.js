import axios from "axios";
import {
  GET_USERINFO,

  DELETE_USER,

  ADD_TO_MYCARLIST,
  REMOVE_FROM_MYCARLIST,
  ADD_TO_ADDRESSLIST,
  REMOVE_FROM_ADDRESTLIST,
} from "./types";

const API_URL = "https://api.brrrrng.ga"

export const getUserInfo = (id) => {
  //ec2-52-78-43-100.ap-northeast-2.compute.amazonaws.com/user/:id/info
  const userInfo = axios.post(`${API_URL}/user/${id}/info`, id).then(response => response.data.userInfo);

  return {
    type: GET_USERINFO,
    payload: userInfo,
  };

  
};

export const deleteUser = (id) => {
  const resResult = axios.delete(`${API_URL}/user/${id}/delete`).then(response => response.data.success)

  return {
    type: DELETE_USER,
    payload: resResult
  }
}

export const addToMycarList = (id, data) => {
  const resResult = axios
    .put(`${API_URL}/user/${id}/mycar`, data)
    .then((result) => result.data.success);

  return {
    type: ADD_TO_MYCARLIST,
    payload: resResult,
  };
};

export const removeFromMycarList = (id, idx) => {
  const resResult = axios
    .delete(`${API_URL}/user/${id}/mycar`, idx)
    .then((result) => result.data.success);

  return {
    type: REMOVE_FROM_MYCARLIST,
    payload: resResult,
  };
};

export const addToMyaddressList = (id, data) => {
  const resResult = axios
    .put(`${API_URL}/user/${id}/address`, data)
    .then((result) => result.data.success);

  return {
    type: ADD_TO_ADDRESSLIST,
    payload: resResult,
  };
};

export const removeFromMyaddressList = (id, idx) => {
  const resResult = axios
    .delete(`${API_URL}/user/${id}/address`, idx)
    .then((result) => result.data.success);

  return {
    type: REMOVE_FROM_ADDRESTLIST,
    payload: resResult,
  };
};
