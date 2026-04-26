import React from "react";

const products = [
  { id: 1, name: "Shoes", price: 1999 },
  { id: 2, name: "T-Shirt", price: 799 },
  { id: 3, name: "Watch", price: 2999 },
];

const Home = () => {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;