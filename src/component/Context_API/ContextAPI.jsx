import React,{useState} from 'react'
import Dashboard from './Dashboard'
import { UseContext } from './UseContext'
const ContextAPI = () => {
    const [name]=useState("Dinesh")
    const [count,setcount]=useState(100);

    const increase=()=>{
      setcount(count+2);
    }
  return (
    <UseContext.Provider value={{name,count,increase}}>
        <h3>Main Task</h3>
        <Dashboard/>
    </UseContext.Provider>
  )
}

export default ContextAPI