import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    const handleLogin=()=>{
        const loggedin=true;
        if(loggedin){
            navigate("/",{replace:true});
        }
    }
  return (
    <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login