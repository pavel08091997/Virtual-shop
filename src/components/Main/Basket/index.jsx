import React from "react";
import styles from "./basket.module.css";


const Basket = ({ onClick }) => {
  return (
    <div className={styles.overvlayPopup}>
      <div className={styles.contentPopup}>
        <button
          onClick={onClick}
          className={`material-icons ${styles.buttonContainer}`}
        >
          add_shopping_cart
        </button>
           </div>
    </div>
  );
};

export default Basket;
