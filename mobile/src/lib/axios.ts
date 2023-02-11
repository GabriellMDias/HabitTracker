import axios from "axios";

export const api = axios.create({
  baseURL: 'https://habit-tracker-server.onrender.com/'
})