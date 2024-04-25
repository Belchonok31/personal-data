import React from 'react';
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.main}>
      <h2>Добро пожаловать на главную страницу!</h2>
      <p>Здесь вы можете найти информацию о нашей платформе и особенностях использования.</p>
    </div>
  );
}

export default Home;