import React from 'react'
const Events = () => {
    const click=(name)=>{
        alert(`HI,${name}`)
    }
  return (
    <div>
        <button onClick={()=>click("Dinesh")}>submit</button>
    </div>
  )
}

export default Events