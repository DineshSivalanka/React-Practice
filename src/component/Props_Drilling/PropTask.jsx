import React,{useState} from 'react'
import Dashboard from './Dashboard'
const PropTask = () => {
    const [name]=useState("Dinesh")
  return (
    <div>
      <h1>Main Task</h1>
        <Dashboard name={name}/>
    </div>
  )
}

export default PropTask