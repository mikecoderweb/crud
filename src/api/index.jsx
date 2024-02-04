import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const apiUrl = "https://omofood.pythonanywhere.com/api/v1/"  ;
export const baseUrl = apiUrl;

const token = localStorage.getItem("user");

axios.defaults.baseURL = baseUrl;

// Set the default headers with the Authorization token


export const api = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});