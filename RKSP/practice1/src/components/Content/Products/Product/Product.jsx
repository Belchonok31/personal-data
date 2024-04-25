import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Product.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/actions/actions';

function Product(props) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props));
  };

  return (
    <div className={styles.product}>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Цена: {props.price}р.</p>
      <Link to={'/products/' + props.id}>Подробнее...</Link>
      <button className ={styles.button} onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
}

export default Product;