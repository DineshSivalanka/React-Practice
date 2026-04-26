import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Product.css';

const ApiData = () => {
    const [products,setproducts]=useState([]);

    useEffect(()=>{
    // fetch("https://fakestoreapi.com/products")
    // .then((res)=>res.json())
    // .then((dat a)=>setproducts(data))
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{setproducts(res.data)})
    .catch(()=>{
        console.log("Error fetching data");
    })


},[])

  return (
    <div className='products-container'>
        <h2 className='title'>Leela Products</h2>
        <div className='product-grid'>
            {
                products.map((product)=>(
                    <div className='product-card' key={product.id}>
                        <img className='product-image' src={product.image}/>
                        <h3 className='product-title'>{product.title}</h3>
                        <p className='product-price'>{product.price}</p>
                        <p className='product-rating'>⭐{product.rating.rate}-{product.rating.count}</p>
                    </div>
                ))
            }
        </div>
    </div>

  )
}

export default ApiData