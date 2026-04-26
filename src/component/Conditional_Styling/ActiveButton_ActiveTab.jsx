import React,{useState} from 'react';
import'./ClassName.css';

const ActiveButton_ActiveTab = () => {
    const [active,setactive]=useState(false);
  return (
    <div>
        <button className={active?"clickactive":"clickinactive"} onClick={()=>setactive(!active)}>{active?"Active":"InActive"}</button>
    </div>
  )
}

export default ActiveButton_ActiveTab