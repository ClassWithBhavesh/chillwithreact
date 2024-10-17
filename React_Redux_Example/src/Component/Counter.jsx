import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, increByMultipleValue, INCREMENT, RESET } from '../Store/Slices/counterSlice';

function Counter() {

  const count = useSelector((state) => state.counter.value);

  const dispatach = useDispatch();

  return (
    <>
      <div style={{textAlign: "center"}}>{count}</div><br /><br /><br />
      <button onClick={() => dispatach(DECREMENT())}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatach(RESET())}>R</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatach(INCREMENT())}>+</button>
      <button onClick={() => dispatach(increByMultipleValue(5))}>5+</button>
    </>
  )
}

export default Counter