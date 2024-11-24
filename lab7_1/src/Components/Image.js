import React from "react";

function Image({ width = 300 }) {
  return (
    <a href="https://city-adm.lviv.ua/">
      <img
        src="https://inlviv.in.ua/wp-content/uploads/2018/04/vyd-na-lviv-z-ratushi-vden.jpg"
        alt="Львів"
        style={{
          width: `${width}px`,
          height: "auto",
          borderRadius: "8px",
          display: "block",
          margin: "10px auto",
        }}
      />
    </a>
  );
}

export default Image;
