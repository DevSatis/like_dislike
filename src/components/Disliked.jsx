import React from "react";
import Card from "./Card";
import "./Home.css";
import { useSelector } from "react-redux";
import { dummyCards } from "./Home";

const Disliked = () => {
  const dislikedCardsIds = useSelector((state) => state.card.disliked);

  return (
    <>
      <h1>Disliked Cards</h1>
      <div className="card-container">
        {dummyCards
          .filter((card) => dislikedCardsIds.includes(card.id))
          .map((card) => (
            <Card key={card.id} card={card} />
          ))}
      </div>
    </>
  );
};

export default Disliked;
