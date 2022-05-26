import React from "react";
import { Link } from "react-router-dom";

const Tool = ({product}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.img}
          alt="Tools"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p>{product.description}</p>
        <p><span className="font-bold">Available Quantity:</span> {product.availableQuantity}</p>
        <p><span className="font-bold">Minimum Order Quantity:</span> {product.minOrder}</p>
        <p><span className="font-bold">Price/Unit:</span> {product.perUnitPrice}</p>
        <div className="card-actions justify-end">
          <Link to={`purchase/${product._id}`} ><button product={product} className="btn btn-sm btn-primary">Order Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
