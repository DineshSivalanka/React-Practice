import React,{useState} from 'react'

const Child = () => {
    const [showtext,setText]=useState(false);
  return (
    <div>
        <button onClick={()=>setText(!showtext)}>
            {
                showtext?"Hide":"show"
            }
        </button>
        {
        showtext && <p>This is a seceret message</p>
        }
        </div>
  )
}

export default Child