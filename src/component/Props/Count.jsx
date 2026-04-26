import React, { useState ,useEffect} from 'react'

const Count = () => {
    const [count,setcoun]=useState(0);
    function click(){
        setcoun(count+1);
    }
    useEffect(()=>{
            console.log("Count Increased");[]
    },[count])

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={click}>increase</button>
    </div>
  )
}

export default Count