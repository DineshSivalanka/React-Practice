import React from 'react'

const Input = ({setname}) => {
  return (
    <div>
        <input onChange={(e)=>{setname(e.target.value)}}></input>
    </div>
  )
}

export default Input