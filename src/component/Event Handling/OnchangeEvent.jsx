import React,{useState} from 'react'

const OnchangeEvent = () => {
    const [text,setText]=useState("");
  return (
    <div>
        <input type="text" placeholder="Enter your Name..." onChange={(e)=>setText(e.target.value)}></input>
        <h3>{text}</h3>
    </div>
  )
}

export default OnchangeEvent