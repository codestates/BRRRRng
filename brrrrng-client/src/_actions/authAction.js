import {
  SUCCESS_SIGNUP,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  AUTH_USER,
} from "./types.js";

import axios from "axios";
const API_URL = "https://api.brrrrng.ga"

export const signupRequest = (data) => {

  const request = axios.post(`${API_URL}/auth/signup`, data).then(response => response.data)

  return {
    type: SUCCESS_SIGNUP,
    payload: request
  }
}

export const loginRequest = (data) => {

  const request = axios.post(`${API_URL}/auth/login`, data).then(response => {
    return response.data
  })
console.log(request)
  return {
    type: SUCCESS_LOGIN,
    payload: request
  }

}

export const logoutRequest = () => {

  const request = axios.get(`${API_URL}/auth/logout`,{withCredentials: true}).then(response => {
    console.log(response)
    return response.data
  })

  return {
    type: SUCCESS_LOGOUT,
    payload: request
  }
}

export const auth = () => {

  const request = axios.get(`${API_URL}/auth/authtest`).then(response => response.data)

  return {
    type: AUTH_USER,
    payload: request
  }
}