import React from 'react'

const Login = ({Auth,setisAuth}) => {
  return (
    <div>
      <button onClick={()=>setisAuth(!Auth)}>{Auth?"LogOut":"LogIn"}</button>
    </div>
  )
}

export default Login