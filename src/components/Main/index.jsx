import React, { useEffect, useState } from "react";
import Catalog from "./Catalog";
import ProductList from "./Catalog/ProductList";
import Basket from "./Basket";
import BasketWindow from "./Basket/BasketWindow";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [openBasket, setOpenBasket] = useState(false);

  const onClick = () => {
    setOpenBasket(!openBasket);
  };

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, data.length - 3));
      });
  }, []);

  return (
    <div>
      <Basket onClick={onClick} />
      {openBasket && <BasketWindow />}
      <Catalog />
      <ProductList products={products} />
    </div>
  );
};

export default Main;
