import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register/register/Register';
import Login from './pages/register/login/Login';
import Home from './pages/register/Home';
import ProductHome from './pages/components/ProductHome';
import Product from './pages/Products';
import Cart from './pages/Cart';

const App = () => {
    return (
        <Router>
          
            <Routes>
            
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} /> 
                <Route path="/product" element={<Cart />} /> 
            </Routes>
            <ProductHome />
           <Product />
        </Router>
    );
};

export default App;
