import React from 'react'
// import LandingPageAlfaiz from './Component/LandinPageAlfaiz'
// import AboutBalram from './Component/AboutBalram'
// import About from './Component/About'
// import LandingPage from './Component/LandingPage'
// import UseReducerCompo from './Component/UseReducerCompo'
// import UseCallbackHook from './Component/UseCallbackHook'
// import UseMemoHook from './Component/UseMemoHook'
// import Ref from './Component/Ref'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Component/LandingPage'
import About from './Component/About'
import AboutBalram from './Component/AboutBalram'
import LandingPageAlfaiz from './Component/LandinPageAlfaiz'

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/About", 
      element: <About />
    },
    {
      path: "/contact",
      element: <AboutBalram />
    },
    {
      path: "/Features",
      element: <LandingPageAlfaiz />
    }
  ])
x
  return (
    <>
      <RouterProvider router={route} />
      {/* <Ref /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseReducerCompo /> */}
      {/* <LandingPage /> */}
      {/* <About /> */}
      {/* <AboutBalram /> */}
      {/* <LandingPageAlfaiz /> */}
    </>
  )
}

export default App
