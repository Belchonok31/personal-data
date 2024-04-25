import React from 'react';
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Контактная информация:</p>
        <p>Телефон: +1234567890</p>
        <p>Email: example@example.com</p>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://vk.com">VK</a>
        <a href="https://web.telegram.org">Telegram</a>
      </div>
    </footer>
  );
};

export default Footer;
