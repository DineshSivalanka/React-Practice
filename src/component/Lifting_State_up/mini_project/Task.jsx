import React,{useState} from 'react'
import Display from './Display'
import Input from './Input'
const Task = () => {
    const [name,setname]=useState("");
  return (
    <div>
        <Display name={name}/>
        <Input name={name} setname={setname}/>
    </div>
  )
}

export default Task