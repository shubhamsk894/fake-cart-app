import React from "react";
import "./item-list.css";

const ItemList = ({ children }) => {
  return <div className="card-deck">{children}</div>;
};

export default ItemList;
