import React from "react";

const ProductCard = ({ title, description, price, slug, category }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={category}/>
        <span className="card-title">{title}</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons"></i>
        </a>
      </div>
      <div className="card-content">
        <p>{description}</p>
        <p>{slug}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
