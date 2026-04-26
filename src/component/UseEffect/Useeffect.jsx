import React,{useState} from 'react'
import Timer from './Timer';
const Useeffect = () => {
    const [text,settext]=useState(false);
  return (
    <div>
        <h2>{text && <Timer/>}</h2>

        <button onClick={()=>settext(!text)}>
            {text?"Stop Timer":"Start Timer"}
        </button>
    </div>
  )
}

export default Useeffect