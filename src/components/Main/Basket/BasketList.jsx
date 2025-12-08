import BasketItem from "./BasketItem";

const BasketList = ({ basketProducts, removeProductFromBasket, increase,decrease }) => {
  return (
    <div>
      {basketProducts.map((item) => (
        <BasketItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          count={item.count}
          removeProductFromBasket={removeProductFromBasket}
          increase={increase}
          decrease={decrease}
        />
      ))}
    </div>
  );
};

export default BasketList;
