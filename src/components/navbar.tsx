import { Car, CarFront, Home, LayoutGrid, Plus } from 'lucide-react'
import { useContext } from 'react'

import { CarsContext } from '@/contexts/carsContext'

import { NavLink } from './nav-link'

export function Navbar() {
  const { cars } = useContext(CarsContext)

  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-3 px-2 md:gap-10 md:px-8">
        <Car className="hidden size-7 text-primary-900 md:block" />

        <hr className="hidden h-9 border-l border-slate-300 md:block" />

        <nav className="flex items-center space-x-8">
          <NavLink to="/">
            <Home className="size-4" />
            Home
          </NavLink>

          <NavLink to="/cars">
            <CarFront className="size-4" />
            Carros
            {cars.length > 0 && (
              <div className="absolute -top-2 left-2 size-4 rounded-full bg-highlight-500">
                <p className="flex items-center justify-center text-xs text-white">
                  {cars.length}
                </p>
              </div>
            )}
          </NavLink>

          <NavLink to="/about">
            <LayoutGrid className="size-4" />
            Sobre
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <NavLink to="/add-cars">
            <Plus className="size-4" />
            Adicionar
          </NavLink>
        </div>
      </div>
    </div>
  )
}
