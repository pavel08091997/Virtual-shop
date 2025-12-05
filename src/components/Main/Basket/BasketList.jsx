import BasketItem from "./BasketItem";

const BasketList = ({basketProducts,removeProductFromBasket}) => {
  return (
    <div>
      {basketProducts.map((item) => (
        <BasketItem key={item.id} id={item.id} title={item.title} price={item.price} count={item.count} removeProductFromBasket={removeProductFromBasket} />
      ))}
    </div>
  );
};

export default BasketList;
