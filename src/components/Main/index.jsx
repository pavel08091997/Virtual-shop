import React, { useEffect, useState } from "react";
import Catalog from "./Catalog";
import ProductList from "./Catalog/ProductList";
import Basket from "./Basket";
import BasketWindow from "./Basket/BasketWindow";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [openBasket, setOpenBasket] = useState(false);
  const [basketProducts, setBasketProducts] = useState([]);

  const addProductToBasket = (product) => {
    //поиск товара из корзины
    const findProductFromBasket = basketProducts.find((item) => {
      return item.id === product.id;
    });
    if (findProductFromBasket) {
      const updeteBasketProducts = basketProducts.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setBasketProducts(updeteBasketProducts);
    } else {
      const newProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        count: 1,
      };
      setBasketProducts([...basketProducts, newProduct]);
    }
  };
  const removeProductFromBasket = (id) => {
    const filterBasketProduct = basketProducts.filter(
      (item) => item.id !== id
    );
    setBasketProducts(filterBasketProduct);
  };

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
      {openBasket && <BasketWindow basketProducts={basketProducts} removeProductFromBasket ={removeProductFromBasket}/>} 
      <Catalog />
      <ProductList
        products={products}
        addProductToBasket={addProductToBasket}
      />
    </div>
  );
};

export default Main;
