import React, { useRef, useState } from 'react'

function UseRef() {

    console.log("Top Scope of the function");

    const increState = () => {
        // setState(state + 1);
        domRef.current = 41;
        console.log(domRef.current);
        // console.log("value of state reference : ", stateRef.current);
        domRef.current.style.backgroundColor = "red";
      }
      
      const decreState = () => {
        // setState(state - 1);
        domRef.current = 39;
        console.log(domRef.current);
        // console.log("value of state reference : ", stateRef.current);
        domRef.current.style.backgroundColor = "blue";
    }

    // const [state, setState] = useState(0);
    // const stateRef = useRef(0);

    const domRef = useRef(40);
    console.log(domRef);

    
    // console.log("value of state : ", state);
    

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px", placeItems: "center", placeContent: "center"}}>
        <button ref={domRef} onClick={increState}>+</button>
        {/* <div>Current value of Count is : {stateRef.current}</div> */}
        <button onClick={decreState}>-</button>
    </div>
  )
}

export default UseRef