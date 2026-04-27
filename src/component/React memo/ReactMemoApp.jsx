import React,{ useState} from 'react'
import Child from './Child';

const ReactMemoApp = () => {
    const [count,setcount]=useState(0);
    

  return (
    <div>
        <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increase</button>
    </div>
    <Child name="Dinesh"/>
    </div>
  )
}

export default ReactMemoApp