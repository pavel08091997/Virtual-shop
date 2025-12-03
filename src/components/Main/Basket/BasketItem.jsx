import React from "react";
import styles from "./BasketIem.module.css";
import ProductCard from "../Catalog/ProductCard";

const BasketItem = ({ id, title, price, count }) => {
  const totalPrice = price * count
  return (
    <div className={styles.itemContainer}>
      <p className={styles.nameContainer}>{title}</p>
      <button className={`material-icons`}>add</button>
      <p>{count}</p>
      <button className={`material-icons`}>remove</button>
      <p className={styles.priceContainer}>{totalPrice}</p>
      <button className={`material-icons`}>delete</button>
    </div>
  );
};

export default BasketItem;
