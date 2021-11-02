import {
  SUCCESS_SIGNUP,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  ERROR_OCCURRED,
} from "./types.js";

import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const signupRequest = async (data) => {
  try {
    const request = await axios.post(`${API_URL}/auth/signup`, data);

    return {
      type: SUCCESS_SIGNUP,
      payload: request,
    };
  } catch (error) {
    return {
      type: ERROR_OCCURRED,
      payload: error,
    };
  }
};

export const loginRequest = async (data) => {
  try {
    const request = await axios.post(`${API_URL}/auth/login`, data, {
      withCredentials: true,
    });
    return {
      type: SUCCESS_LOGIN,
      payload: request,
    };
  } catch (error) {
    return {
      type: ERROR_OCCURRED,
      payload: error,
    };
  }
};

export const logoutRequest = (id) => {
  const request = axios
    .get(`${API_URL}/auth/${id}/logout`, { withCredentials: true })
    .then((response) => {
      console.log(response);
      return response.data;
    });

  return {
    type: SUCCESS_LOGOUT,
    payload: request,
  };
};
