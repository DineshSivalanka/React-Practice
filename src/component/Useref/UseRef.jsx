import React,{useState,useRef,useEffect} from 'react'

const UseRef = () => {
    const [count,setCount]=useState(0);
    const inputref=useRef(null);
    
        useEffect(()=>{
          console.log("page rendering");
          inputref.current.focus()
        },[])
    
      return (
        <div>
            <h3>{count}</h3>
            <input ref={inputref}></input>
            <button onClick={()=>setCount(count + Number(inputref.current.value))}>Click</button>
        </div> 

      )
}

export default UseRef