import React from 'react'
import { useParams } from 'react-router-dom'
import products from './data'
const ProductDetail = () => {
  const {id}=useParams();
  const product=products.find((item)=>(item.id)===Number(id));
  console.log(product);
  
  if(!product){
    return <h2>Product not found</h2>
  }
  return (
    <div>
      <img src={product.image}/>
      <h2>{product.category}</h2>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductDetail