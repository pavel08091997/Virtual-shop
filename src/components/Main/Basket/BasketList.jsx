import BasketItem from "./BasketItem";

const BasketList = ({basketProducts }) => {
  return (
    <div>
      {basketProducts.map((item) => (
        <BasketItem key={item.id} title={item.title} price={item.price} count={item.count} />
      ))}
    </div>
  );
};

export default BasketList;
