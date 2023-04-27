import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'

export const mainApi = axios.create({
  baseURL
})
