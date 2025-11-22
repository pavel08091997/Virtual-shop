import React from "react";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products = [] }) => {
  return (
    <div className={styles.list}>
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            title={item.title}
            slug={item.slug}
            price={item.price}
            description={item.description}
            image={item.images[0]}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
