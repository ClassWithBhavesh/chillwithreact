import React from 'react'
import Counter from './Component/Counter'
import { CountProvider } from './context/CountContext'


function App() {

  return (
    <>
      <CountProvider>
        <Counter />
      </CountProvider>
    </>
  )
}

export default App
