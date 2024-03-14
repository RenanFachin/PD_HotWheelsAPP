import { Car } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-7">
      <div className="hidden h-full flex-col justify-between border-r border-highlight-700/5 bg-highlight-300/5 p-10 text-primaryapp-500 md:col-span-5 md:flex">
        <div className="flex items-center gap-3 text-lg font-medium">
          <Car className="hidden size-10 text-primaryapp-900 md:block" />
        </div>

        <footer className="text-sm">
          Páginas e API desenvolvidas por{' '}
          <Link
            to={'https://github.com/RenanFachin'}
            className="font-bold text-highlight-300"
          >
            Renan Fachin
          </Link>{' '}
          &copy; App HotWheels - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center md:col-span-2">
        <Outlet />
      </div>
    </div>
  )
}
