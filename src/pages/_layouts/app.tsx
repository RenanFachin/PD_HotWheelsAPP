import Cookies from 'js-cookie'
import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { AddCarWidget } from '@/components/add-car-widget'
import { GithubWidget } from '@/components/github-widget'
import { Navbar } from '@/components/navbar'
import { CarsContext } from '@/contexts/carsContext'

export function AppLayout() {
  const navigate = useNavigate()
  const { fetchCars } = useContext(CarsContext)

  useEffect(() => {
    const { 'token-hotwheels': token } = Cookies.get()

    // Caso exista, buscar novamente os dados do usuário na api
    if (!token) {
      navigate('/sign-in', { replace: true })
    }

    if (token) {
      fetchCars()
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-primaryapp-100 antialiased">
      <Navbar />

      <div className="relative flex flex-1 flex-col gap-4 p-8 pt-6">
        {/* Contéudo da página */}
        <Outlet />
      </div>

      <div className="fixed bottom-10 right-10 hidden flex-col gap-4 md:flex">
        <AddCarWidget />
        <GithubWidget />
      </div>
    </div>
  )
}
