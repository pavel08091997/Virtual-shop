import styles from "./basket.module.css";
import BasketList from "./BasketList";

const BasketWindow = ({
  basketProducts,
  removeProductFromBasket,
  increase,
  decrease,
}) => {
  return (
    <div className={styles.openBasket}>
      <BasketList
        basketProducts={basketProducts}
        removeProductFromBasket={removeProductFromBasket}
        increase={increase}
        decrease={decrease}
      />
    </div>
  );
};

export default BasketWindow;
