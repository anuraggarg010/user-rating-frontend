import React, { useState } from 'react';

function Product({ product, onRateProduct }) {
  const [rating, setRating] = useState(0);

  const handleRateProduct = async () => {
    const isAuthenticated = localStorage.getItem('token') !== null;

    if (!isAuthenticated) {
      // login page redirect code pending
      alert('Please log in to rate the product.');
      return;
    }

    
    try {
      const response = await fetch(`/api/products/${product._id}/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // jwt token name
        },
        body: JSON.stringify({ rating }),
      });

      if (response.ok) {
        onRateProduct(product._id, rating); 
        setRating(0); 
      } else {       
        console.error('Rating failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    // css code pending
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="rating">Rating: {product.rating}</p>
      <div className="rating-container">
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          className="rating-input"
        />
        <button onClick={handleRateProduct} className="rate-button">Rate</button>
      </div>
    </div>
  );
}

export default Product;






