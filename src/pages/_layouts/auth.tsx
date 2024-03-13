import { Car } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-7">
      <div className="col-span-5 flex h-full flex-col justify-between border-r border-highlight-700/5 bg-highlight-300/5 p-10 text-primary-600">
        <div className="flex items-center gap-3 text-lg font-medium">
          <Car className="hidden size-10 text-primary-900 md:block" />
        </div>

        <footer className="text-sm">
          Página e API desenvolvidas por{' '}
          <Link to={'https://github.com/RenanFachin'}>Renan Fachin</Link> &copy;
          App HotWheels - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="col-span-2 flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
