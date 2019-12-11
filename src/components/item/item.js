import React from "react";
import "./item.style.css";
import faker from "faker";

const Item = ({ item, fakeImage, handler = () => false, ...props }) => {
  const burger =
    "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg";

  return (
    <div class="card" style={{ maxWidth: "14rem", minWidth: "14rem" }}>
      <img class="card-img-top" src={item.src} alt="Card" />
      <div class="card-body">
        <h2 class="card-title">{item.title}</h2>
        <p class="card-text">
          Get now at an exiting price of <h3>{item.price}</h3> only!
        </p>
        <button class="btn btn-warning" onClick={handler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
