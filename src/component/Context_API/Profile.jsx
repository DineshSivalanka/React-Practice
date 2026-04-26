import React from 'react'
import Username from './Username'
import {useContext} from 'react'
import { UseContext } from './UseContext'

const Profile = () => {
  const {name,count,increase}=useContext(UseContext)
  return (
    <div>Profile-{name}-{count}<br></br>
      <button onClick={increase}>increase</button>
    </div>
  )
}

export default Profile