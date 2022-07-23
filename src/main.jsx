import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductListPage from './pages/ProductListPage';
import CartItem from './components/CartItem';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<ProductListPage />} />
    <Route path="/productlist" element={<ProductListPage />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/productlist/product/:id" element={<ProductPage />} />
    <Route path="/shoppingcart" element={<ShoppingCart />} />
    <Route path="/cartprev" element={<CartItem />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
