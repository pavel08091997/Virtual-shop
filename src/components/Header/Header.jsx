import React from "react";
import styles from './Header.module.css'

const Header = () => {

  const linkTG = 'https://t.me/Pm08091997'
  return (
    <nav className={styles.nav}>
     <div className={styles.header}>
        <a href="#" className={`brand-logo ${styles.logo}`}>
          project-shop
        </a>
        <a className={styles.link} href={linkTG}>Telegram</a>
      </div>
    </nav>
  );
};

export default Header;
