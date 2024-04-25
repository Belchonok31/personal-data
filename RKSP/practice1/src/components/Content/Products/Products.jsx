import React from 'react';
import styles from './Products.module.css'; // Импорт модуля CSS
import Product from './Product/Product';

const products = [
  {id: 1, name: "Хлеб", price: 30, image: "https://cdn4.iconfinder.com/data/icons/bakery-69/512/bakery-basket-bread-bake-1024.png"},
  {id: 2, name: "Молоко", price: 80, image: "https://cdn-icons-png.freepik.com/512/372/372973.png"},
  {id: 3, name: "Шоколад", price: 100, image: "https://cdn-icons-png.freepik.com/512/9745/9745062.png"},
  {id: 4, name: "Пицца", price: 120, image: "https://cdn-icons-png.freepik.com/512/3595/3595458.png"},
  {id: 5, name: "Соль", price: 10, image: "https://cdn-icons-png.freepik.com/512/2102/2102350.png"}
];

function Products() {
  return (
    <div className={styles.main}>
      <h2>Наши продукты</h2>
      <div className={styles.products}>
        {products.map(product => (
        <Product {...product} />
      ))}
      </div>
    </div>
  );
}

export default Products;