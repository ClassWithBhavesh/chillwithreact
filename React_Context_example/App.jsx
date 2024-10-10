import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import CarCart from './Component/CarCart'
import { CarProvider } from './context/CarContext'


function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Cart",
      element: <CarCart />
    }
  ])

  return (
    <CarProvider>
      <RouterProvider router={route} />
    </CarProvider>
  )
}

export default App
