import React from 'react'
import womenData from './womenData'
import {Link} from 'react-router-dom'
const Women = () => {
  console.log(womenData);
  return (
    <div className='Container'>
      <h2>women Products</h2>
      <div className='grid'>
        {
          womenData.map((item)=>(
            <div key={item.id} className='card'>
            <h2>{item.name}</h2>
            <Link to={`${item.id}`}><button>Add to cart</button></Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Women