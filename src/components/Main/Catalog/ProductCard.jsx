import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ title, description, price, slug, image }) => {
  return (
    <div className={`card ${styles.cardConteiner}`}>
      <div className="card-image">
        <img className={styles.imageConteiner} src={image} />
        <span className="card-title">{title}</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className={`card-content ${styles.cardContent}`}>
        <p>{description}</p>
        <p>{slug}</p>
        <p className={styles.priceConteiner}>{price} $ </p>
      </div>
    </div>
  );
};

export default ProductCard;
