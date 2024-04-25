import React from 'react'
import { useParams } from 'react-router-dom';
import styles from "./ProductDetail.module.css"

const products = [
    {id: 1, name: "Хлеб", price: 30, image: "https://cdn4.iconfinder.com/data/icons/bakery-69/512/bakery-basket-bread-bake-1024.png"},
    {id: 2, name: "Молоко", price: 80, image: "https://cdn-icons-png.freepik.com/512/372/372973.png"},
    {id: 3, name: "Шоколад", price: 100, image: "https://cdn-icons-png.freepik.com/512/9745/9745062.png"},
    {id: 4, name: "Пицца", price: 120, image: "https://cdn-icons-png.freepik.com/512/3595/3595458.png"},
    {id: 5, name: "Соль", price: 10, image: "https://cdn-icons-png.freepik.com/512/2102/2102350.png"}
  ];

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id));

    if (!product) {
        return <div>Продукт не найден</div>;
    }
    return (
        <div className={styles.product}>
            <p>ID: {product.id}</p>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Цена: {product.price}р.</p>
        </div>
    );
}

export default ProductDetail;