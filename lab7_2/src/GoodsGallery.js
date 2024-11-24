import React from "react";
import GoodsCard from "./GoodsCard";
import "./index.css";

function GoodsGallery() {
  const goods = [
    {
      id: 1,
      name: "Артефакт «Кристал»",
      price: "1200 ₴",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnAu5Z8Rh3blhSVFES6mr9KsxV95iwTlX4macAagw7lOxpiGsQzDqyihwcp1HeGoXlaU&usqp=CAU",
    },
    {
      id: 2,
      name: "Артефакт «Медуза»",
      price: "950 ₴",
      image: "https://png.klev.club/uploads/posts/2024-06/png-klev-club-wi8z-p-meduza-stalker-png-30.png",
    },
    {
      id: 3,
      name: "Артефакт «Кров каменю»",
      price: "700 ₴",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIJj89WWGYN8m4NWnoYE8asUP6fdBIr4DTQ&s",
    },
    {
      id: 4,
      name: "Артефакт «Золотий рибка»",
      price: "1500 ₴",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1_C8XedC4n0jVEvy330qYpCEWjAB-GSWAgU2cBFbQIK-5DuwwxkrbIvlWPAG_dUSNiI&usqp=CAU",
    },
    {
      id: 5,
      name: "Артефакт «Батарейка»",
      price: "800 ₴",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3oM36fXm5W7-u0xDA_2ErHRGdX_aRw7xfQ&s",
    },
    {
      id: 6,
      name: "Артефакт «Вогник»",
      price: "1100 ₴",
      image: "https://ae04.alicdn.com/kf/Aee1f165e726840b3a6d82b8463ae0360w.jpg_480x480.jpg",
    },
  ];

  return (
    <div className="goods-gallery">
      {goods.map((good) => (
        <GoodsCard key={good.id} name={good.name} price={good.price} image={good.image} />
      ))}
    </div>
  );
}

export default GoodsGallery;
