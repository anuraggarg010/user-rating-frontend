import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import ProductList from './components/productList';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes using the 'Route' component */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;
