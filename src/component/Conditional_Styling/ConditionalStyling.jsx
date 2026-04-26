import React,{useState} from 'react'
import './ClassName.css'
const ConditionalStyling = () => {
    const [tab,setTab]=useState("Home");
  return (
    <div>
        <button className={tab=="Home"?"active":"inactive"} onClick={()=>setTab("Home")}>Home</button>
        <button className={tab=="About"?"active":"inactive"} onClick={()=>setTab("About")}>About</button>
        <button className={tab=="Contact"?"active":"inactive"} onClick={()=>setTab("Contact")}>Contact</button>
    </div>
  )
}

export default ConditionalStyling