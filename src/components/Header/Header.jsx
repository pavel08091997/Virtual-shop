import React from "react";
import styles from './Header.module.css'

const Header = () => {

  const linkTG = 'https://t.me/Pm08091997'
  return (
    <nav>
     <div>
        <a href="#" className="brand-logo">
          project-shop
        </a>
        <a className={styles.link} onClick={()=> window.open(linkTG)}>Telegram</a>
      </div>
    </nav>
  );
};

export default Header;
