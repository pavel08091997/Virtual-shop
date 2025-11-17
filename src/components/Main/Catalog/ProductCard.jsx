import React from "react";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="images/sample-1.jpg" />
        <span className="card-title">Card Title</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">add_shopping_cart</i>
        </a>
      </div>
      <div className="card-content">
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
        <p>Category</p>
        <p>Price</p>
      </div>
    </div>
  );
};

export default ProductCard;
