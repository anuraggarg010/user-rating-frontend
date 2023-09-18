import React, { useEffect, useState } from 'react';
import Product from './product.js';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  }, []);

  const handleRateProduct = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId ? { ...product, rating: newRating } : product
      )
    );
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            onRateProduct={handleRateProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
