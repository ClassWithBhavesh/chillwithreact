import React from 'react'
import Counter from './Component/Counter'
import { Provider } from 'react-redux'
import { counterStore } from './Store/counterStore'

function App() {



  return (
    <Provider store={counterStore}>
      {/* <div>{count}</div> */}
      <Counter />
    </Provider>
  )
}

export default App