import React from "react";
import "./index.css";

function GoodsCard({ name, price, image }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-image" />
      <h3>{name}</h3>
      <p>Ціна: {price}</p>
    </div>
  );
}

export default GoodsCard;
