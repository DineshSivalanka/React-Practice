import React from 'react'

const Child = ({name}) => {
    console.log("child re-reder");
  return (
    
    <div>
        <h2>{name}</h2>Child</div>
  )
}

export default React.memo(Child)