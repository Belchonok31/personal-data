import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Content.module.css'
import Home from './Home/Home'
import Products from './Products/Products'
import ProductDetail from './Products/ProductDetail/ProductDetail'
import About from './About/About'
import Cart from './Cart/Cart'
const Content = () => {
  return (
    <main className={styles.content}>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </main>
  );
};

export default Content;
