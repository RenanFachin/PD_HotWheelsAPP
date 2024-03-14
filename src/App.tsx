import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from '@/routes'

import { AuthProvider } from './contexts/auth-context'
import { CarsContextProvider } from './contexts/carsContext'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | hotwheels-crud" />
      <Toaster closeButton={true} richColors />

      <AuthProvider>
        <CarsContextProvider>
          <RouterProvider router={router} />
        </CarsContextProvider>
      </AuthProvider>
    </HelmetProvider>
  )
}
