import React from 'react'
import menData from './menData';
import {Link} from 'react-router-dom'
const Men = () => {
  console.log(menData);
  return (
    <div className='Container'>
      <h2>Men Products</h2>
      <div className='grid'>
        {
          menData.map((item)=>(
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

export default Men