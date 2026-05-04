import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, onAddToCart }) => {
  const filteredProducts = category === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === category);

  return (
    <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

  export default ProductList;
