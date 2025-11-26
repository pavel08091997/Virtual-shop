import styles from "./basket.module.css";
import BasketList from "./BasketList";

const BasketWindow = () => {
  return (
    <div className={styles.openBasket}>
      <BasketList />
    </div>
  );
};

export default BasketWindow;
