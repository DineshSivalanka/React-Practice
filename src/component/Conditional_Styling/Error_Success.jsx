import React,{useState} from 'react'
import './ClassName.css'
const Error_Success = () => {
    const [name,setName]=useState("");
    const [msg,setmsg]=useState("");
    const [type,settype]=useState("");

    const handlecheck=()=>{
        if(name.trim()===""){
            setmsg("Please Enter Your Name")
            settype("error")
        }else{
            setmsg("Name looks good");
            settype("success");
        }
    } 
  return (
    <div>
        <input type="text" placeholder='Enter your name:' onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handlecheck}>submit</button>
        <h3> {msg && <p className={type}>{msg}</p>}</h3>
    </div>
  )
}

export default Error_Success