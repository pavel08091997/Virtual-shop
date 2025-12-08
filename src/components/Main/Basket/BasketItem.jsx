import React from "react";
import styles from "./BasketIem.module.css";
import ProductCard from "../Catalog/ProductCard";

const BasketItem = ({
  id,
  title,
  price,
  count,
  removeProductFromBasket,
  increase,
  decrease,
}) => {
  const totalPrice = price * count;
  return (
    <>
    <div className={`material-icons ${styles.clearContainer}`}>clear</div>
    <div className={styles.itemContainer}>
      <p className={styles.nameContainer}>{title}</p>
      <button className={`material-icons`} onClick={() => increase(id)}>
        add
      </button>
      <input className="" value={count} id={id} readOnly={true} />
      <button className={`material-icons`} onClick={() => decrease(id)}>
        remove
      </button>
      <p className={styles.priceContainer}>{totalPrice}</p>
      <button
        className={`material-icons`}
        onClick={() => removeProductFromBasket(id)}
      >
        delete
      </button>
      {/* <button className={`material-icons`} onClick={()=> removeProductFromBasket(id)}>delete</button> */}
    </div>
    </>
  );
};

export default BasketItem;
