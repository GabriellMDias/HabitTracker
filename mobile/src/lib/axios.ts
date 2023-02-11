import axios from "axios";

export const api = axios.create({
  baseURL: 'https://serverhabits.onrender.com/'
})