import React from "react";
import "./cart-item.css";
import { img } from "./constants";

const CartItem = ({ items, deleteHandler = () => false }) => {
  return (
    <li className="cart-item">
      <img className="cart-image" src={img} alt="cart img" />
      {items.title}
      <div>
        <button className="btn btn-danger delete" onClick={deleteHandler}>
          X
        </button>
      </div>
    </li>
  );
};

export default CartItem;
