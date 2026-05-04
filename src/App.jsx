
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('All');

  const addToCart = (productName) => {
    setCart([...cart, productName]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Challenge: Dynamic CSS Styles
  const appStyle = {
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={appStyle}>
      <h1>Grocery App</h1>
      
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      
      <div style={{ margin: '20px 0' }}>
        <label>Filter by Category: </label>
        <select onChange={handleCategoryChange} value={category}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Fruits">Fruits</option>
        </select>
      </div>

      <Cart cartItems={cart} />
      
      <ProductList category={category} onAddToCart={addToCart} />
    </div>
  );
};

export default App;