import React from "react";

function Card({ cardImage, cardTitle, cardLikes, onCardClick }) {

  function handleClick() {
    onCardClick({ link: cardImage, name: cardTitle });
  }

  return (

    <li className="cards__element">
      <img alt={cardTitle} className="cards__image" src={cardImage} onClick={handleClick} />
      <button type="button" className="trash-button"></button>
      <div className="cards__row">
        <h3 className="cards__title">{cardTitle}</h3>
        <div className="cards__column">
          <button type="button" className="like-button"></button>
          <span className="like-button__amount">{cardLikes}</span>
        </div>
      </div>
    </li>

  );
}

export default Card;
