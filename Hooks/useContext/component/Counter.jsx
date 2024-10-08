import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'

function Counter() {

    const {count, setCount} = useContext(CountContext);
    console.log(CountContext);

  return (
    <>
        <h1>Count is : {count}</h1>
        <button onClick={() => {setCount(count + 1)}}>Incre</button>
        <button onClick={() => {setCount(count - 1)}}>Decre</button>
    </>
  )
}

export default Counter
