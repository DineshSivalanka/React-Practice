import { useEffect } from "react"
import React,{useState} from 'react'

const Timer = () => {
    const [seconds,setseconds]=useState(0);
    useEffect(()=>{
        console.log("Start Timer");
        const timer= setInterval(()=>{
            setseconds((prev)=>prev+1);
        },1000)
        
        return ()=>{
            console.log("Stop timer");
            clearInterval(timer);
        }; 
    },[]);


  return (
    <div>
        {seconds}
    </div>
  )
}

export default Timer