import React,{useEffect, useState} from 'react'
const UserefComes = () => {
    const [count,setCount]=useState(0);
    const [input,setinput]=useState(0);

    useEffect(()=>{
      console.log("rerendering");
    },[input])

  return (
    <div>
        <h3>{count}</h3>
        <input  onChange={(e)=>setinput(e.target.value)}></input>
        <button onClick={()=>setCount(count + Number(input))}>Click</button>
    </div> 
  )
}

export default UserefComes