import styles from "./basket.module.css";
import BasketList from "./BasketList";

const BasketWindow = ({ basketProducts }) => {
  return (
    <div className={styles.openBasket}>
      <BasketList basketProducts={basketProducts} />
    </div>
  );
};

export default BasketWindow;
