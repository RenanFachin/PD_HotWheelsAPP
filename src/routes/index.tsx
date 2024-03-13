import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { NotFound } from '@/pages/404'
import { About } from '@/pages/app/about'
import { AddCars } from '@/pages/app/add-cars'
import { Cars } from '@/pages/app/cars'
import { Home } from '@/pages/app/home'
import { Signin } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'

export const router = createBrowserRouter([
  // App Routes
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
  // Auth Routes
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/sign-in',
        element: <Signin />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
