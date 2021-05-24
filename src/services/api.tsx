import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export const apiLocation = axios.create({
  baseURL: 'https://source.unsplash.com/random/?office/600x600'
})