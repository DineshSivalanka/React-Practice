import React from 'react'

const Child = ({handleFun}) => {
    console.log("Child re-rendering");
  return (
    <div>
        <button onClick={handleFun}>Child Increase</button>
    </div>
  )
}

export default React.memo(Child);