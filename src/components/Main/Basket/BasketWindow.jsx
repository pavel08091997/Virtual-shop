import styles from "./basket.module.css";
import BasketList from "./BasketList";

const BasketWindow = ({ basketProducts,removeProductFromBasket }) => {
  return (
    <div className={styles.openBasket}>
      <BasketList basketProducts={basketProducts} removeProductFromBasket={removeProductFromBasket} />
    </div>
  );
};

export default BasketWindow;
