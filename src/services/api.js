import axios from 'axios'

export const api = axios.create({
  baseURL: `https://api-foodexplorer-gry4.onrender.com`,
  /* baseURL: `http://localhost:3000`, */
})
