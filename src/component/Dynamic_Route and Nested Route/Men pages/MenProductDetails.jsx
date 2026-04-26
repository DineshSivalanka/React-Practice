import React from 'react'
import { useParams } from 'react-router-dom'
import menDetails from './menData'
const MenProductDetails = () => {
  const {id}=useParams();
  const menproduct=menDetails.find((item)=>(item.id)===Number(id));
  console.log(menproduct);
  
  console.log(menproduct);
  if(!menproduct){
    return <h2>Men Product not found</h2>
  }
  return (
    <div>
      <img src={menproduct.image}/>
      <h2>{menproduct.category}</h2>
      <p>{menproduct.price}</p>
    </div>
  )
}

export default MenProductDetails