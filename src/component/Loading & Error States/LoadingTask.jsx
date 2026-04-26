import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Product.css';
import Loader from './Loader';
const LoadingTask = () => {
    const [products,setproducts]=useState([]);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(()=>{
    // fetch("https://fakestoreapi.com/products")
    // .then((res)=>res.json())
    // .then((dat a)=>setproducts(data))
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{setproducts(res.data) 
                    setloading(false)})
    .catch(()=>{
        setloading(false);
        seterror("Please Try After Sometime")
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
        <div>{loading && (<Loader/>)}</div>
        <div>{error && (<h2>{error}</h2>)}</div>
    </div>

  )
}

export default LoadingTask