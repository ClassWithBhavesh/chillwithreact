import React, { useMemo, useState } from 'react'

function UseMemoHook() {

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);

    const incre1 = () => {
        setCount1(count1 + 1);
        console.log(count1);
    }
    
    const incre2= () => {
        setCount2(count2 + 1);
        console.log(count2);
    }

    const checkEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++;
        return count1%2 === 0;
    }, [count1]);


  return (
    <>
        <div>{count1}</div>
        <button onClick={incre1}>Incre Count1</button>
        <div>{count2}</div>
        <button onClick={incre2}>Incre Count2</button>

        <div>count1 is {checkEven? "odd" : "even"}</div>
    </>
  )
}

export default UseMemoHook