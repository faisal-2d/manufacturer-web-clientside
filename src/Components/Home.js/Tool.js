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
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to="" ><button className="btn btn-sm btn-primary">Order Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
