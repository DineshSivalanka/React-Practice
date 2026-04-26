import React,{useState} from 'react'
import Child from './component/Child'
const App = () => {
  const [showPassword,setPassword]=useState(false);
  return (
    <div>
        <input type={showPassword ?"text":"password"} placeholder="Enter Password"></input>
        <button onClick={()=>setPassword(!showPassword)}>
        {
          showPassword?"Hide":"Show"
        }
        </button> 
        <Child/>
    </div>
  )
}

export default App