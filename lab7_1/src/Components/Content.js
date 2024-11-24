import React, { Component } from "react";
import Image from "./Image";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStack: [],
      imageWidth: 300,
    };
  }

  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  handleListItemClick = (event) => {
    const target = event.target;
    target.style.backgroundColor = this.getRandomColor();
    target.style.color = this.getRandomColor();
  };

  handleAddImage = () => {
    const { imageStack } = this.state;
    this.setState({
      imageStack: [...imageStack, <Image key={imageStack.length} />],
    });
  };

  handleIncreaseImage = () => {
    this.setState((prevState) => ({
      imageWidth: prevState.imageWidth + 50,
    }));
  };

  handleDecreaseImage = () => {
    this.setState((prevState) => ({
      imageWidth: prevState.imageWidth > 50 ? prevState.imageWidth - 50 : 50,
    }));
  };

  handleRemoveImage = () => {
    const { imageStack } = this.state;
    if (imageStack.length > 0) {
      this.setState({
        imageStack: imageStack.slice(0, -1),
      });
    }
  };

  render() {
    const { imageStack, imageWidth } = this.state;

    return (
      <div>
        <h3>Хобі</h3>
        <ul>
          <li onClick={this.handleListItemClick}>Спорт</li>
          <li onClick={this.handleListItemClick}>Відеоігри</li>
          <li
            id="eight"
            onClick={(e) => {
              e.target.style.backgroundColor = this.getRandomColor();
              e.target.style.color = this.getRandomColor();
            }}
          >
            Готування
          </li>
        </ul>

        <h3>Улюблені фільми</h3>
        <ol>
          <li onClick={this.handleListItemClick}>Venom</li>
          <li onClick={this.handleListItemClick}>Дедпул</li>
          <li onClick={this.handleListItemClick}>Сам у дома</li>
        </ol>

        <p>
          Львів — місто в Україні, адміністративний центр області...
        </p>
        <Image width={imageWidth} />

        <div>
          <button onClick={this.handleAddImage}>Додати</button>
          <button onClick={this.handleIncreaseImage}>Збільшити</button>
          <button onClick={this.handleDecreaseImage}>Зменшити</button>
          <button onClick={this.handleRemoveImage}>Видалити</button>
        </div>

        <div>{imageStack}</div>
      </div>
    );
  }
}

export default Content;
