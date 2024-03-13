import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { NotFound } from '@/pages/404'
import { About } from '@/pages/app/about'
import { AddCars } from '@/pages/app/add-cars'
import { Cars } from '@/pages/app/cars'
import { Home } from '@/pages/app/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cars',
        element: <Cars />,
      },
      {
        path: '/add-cars',
        element: <AddCars />,
      },
    ],
  },
])
