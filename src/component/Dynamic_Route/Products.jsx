import React from 'react'
import products from './data';
import { Link } from 'react-router-dom';
import './Dynamic.css'

const Products = () => {
    console.log(products);
  return (
    <div className='Container'>
        <h2>Products List</h2>
        <div className='grid'>
            {
                products.map((product) => (
                <div key={product.id} className="card">
                <h3>{product.name}</h3>
                <Link to={`/products/${product.id}`}><button>Add to Cart</button></Link>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products