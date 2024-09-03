import React, { useEffect } from 'react'
import { useState } from 'react'

function UseEffectExample() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        // functionality to perform in useEffect
        console.log(`current state is : ${number}`);
        // other functionalities performed by the useEffect


        // using clean up function
        return () => {
            console.log("clean up function is working, useEffect is going to destroy itself!");
        }

    }, [number])

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>{number}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
    </>
  )
}

export default UseEffectExample
