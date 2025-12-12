import { useEffect } from "react";
import styles from "./basket.module.css";
import BasketList from "./BasketList";

const BasketWindow = ({
  basketProducts,
  removeProductFromBasket,
  increase,
  decrease,
  onClick,
  clearBasket,
}) => {
  const handleClick = (event) => {
    if (event.target.getAttribute("data-modal")) {
      onClick();
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClick();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div data-modal className={styles.overlay} onClick={handleClick}>
      <div className={styles.openBasket}>
        <button
          className={`material-icons ${styles.clearContainer}`}
          onClick={onClick}
        >
          clear
        </button>
        <button className={"material-icons"} onClick={clearBasket}>
          refresh
        </button>
        <BasketList
          basketProducts={basketProducts}
          removeProductFromBasket={removeProductFromBasket}
          increase={increase}
          decrease={decrease}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default BasketWindow;
