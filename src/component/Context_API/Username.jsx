import React from 'react'
import {useContext} from 'react'
import { UseContext } from './UseContext'
const Username = () => {
  const {name,count,increase}=useContext(UseContext)
  return (
    <div>Username-{name}-{count}<br></br>
      <button onClick={increase}>increase</button>
    </div>
  )
}

export default Username