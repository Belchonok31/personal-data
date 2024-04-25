import React from 'react';
import styles from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../store/actions/actions';
function Cart() {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className={styles.main}>
      <h2>Корзина</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}р.
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Итоговая сумма: {cartItems.reduce((total, item) => total + item.price, 0)}р.</p>
    </div>
  );
}

export default Cart;