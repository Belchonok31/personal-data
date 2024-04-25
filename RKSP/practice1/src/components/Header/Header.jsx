import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>ПП</div>
        <h1>Интернет-платформа для покупки продуктов</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Продукты</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/cart">Корзина</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
