import axios from 'axios'
import Cookies from 'js-cookie'

import { env } from '@/env'

const { 'token-hotwheels': token } = Cookies.get()

export const api = axios.create({
  baseURL: env.VITE_API_URL,
})

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}
