import React, { useCallback, useState } from 'react'
import Child from './Child';

const UseCallback = () => {
    const [count,setCount]=useState(0);
    console.log("Parent re-render");

    const handleFun=useCallback(()=>{
        setCount((prev)=>prev+1);
    },[]);

  return (
    <div>
        <div>
        <h2>{count}</h2>
        <button onClick={handleFun}>Increase</button>
    </div>
    <Child handleFun={handleFun}/>
    </div>
  )
}

export default UseCallback