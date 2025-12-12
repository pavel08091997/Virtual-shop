import React from "react";
import styles from "./basket.module.css";

const Basket = ({ onClick, basketProducts }) => {
  return (
    <div>
      <div className={styles.contentPopup}>
        <button
          onClick={onClick}
          className={`material-icons ${styles.buttonContainer}`}
        >
          add_shopping_cart
        </button>
        <span>{basketProducts.length}</span>
      </div>
    </div>
  );
};

export default Basket;
