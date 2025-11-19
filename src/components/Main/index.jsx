import React, { useEffect, useState } from "react";
import Catalog from "./Catalog";
import ProductList from "./Catalog/ProductList";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Catalog />
      <ProductList products={products}/>
    </div>
  );
};

export default Main;
