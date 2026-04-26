import React from 'react'
import { useParams } from 'react-router-dom'
import womenDetails from './womenData'
const WomenProductDetails = () => {
  const {id}=useParams();
  const womenproduct=womenDetails.find((item)=>(item.id)===Number(id));
  console.log(womenproduct);
  
  console.log(womenproduct);
  if(!womenproduct){
    return <h2>Women Product not found</h2>
  }
  return (
    <div>
      <img src={womenproduct.image}/>
      <h2>{womenproduct.category}</h2>
      <p>{womenproduct.price}</p>
    </div>
  )
}

export default WomenProductDetails