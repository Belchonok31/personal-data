import React from 'react';
import styles from './About.module.css'; // Импорт модуля CSS

function About() {
  return (
    <div className={styles.main}>
      <h2>О нашей компании</h2>
      <p>Здесь вы можете узнать больше о нашей компании, наших целях и ценностях.</p>
    </div>
  );
}

export default About;