import Cookies from 'js-cookie'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { redirect } from 'react-router-dom'

import { api } from '@/lib/axios'

type SignInRequestData = {
  email: string
  password: string
}

type User = {
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  signIn: (data: SignInRequestData) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInRequestData) {
    const user = await api.post('/sessions', { email, password })

    Cookies.set('token-hotwheels', user.data.token, { expires: 7 })

    setUser(user.data.user)

    api.defaults.headers.Authorization = `Bearer ${user.data.token}`
  }

  async function signOut() {
    Cookies.remove('token-hotwheels')
  }

  async function getUserProfile() {
    const response = await api.get('/me')
    // console.log(response.data.user)

    setUser(response.data.user)
  }

  useEffect(() => {
    // Verificando se existe um token salvo nos cookies
    const { 'token-hotwheels': token } = Cookies.get()

    // Caso exista, buscar novamente os dados do usuário na api
    if (token) {
      getUserProfile()
    }
    // console.log(token)
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
