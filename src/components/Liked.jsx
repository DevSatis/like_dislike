import React from "react";
import Card from "./Card";
import "./Home.css";
import { useSelector } from "react-redux";
import { dummyCards } from "./Home";

const Liked = () => {
  const likedCardIds = useSelector((state) => state.card.liked);
  console.log(likedCardIds);

  return (
    <>
      <h1>Liked Cards</h1>
      <div className="card-container">
      {dummyCards
        .filter((card) => likedCardIds.includes(card.id))
        .map((card) => (
          <Card
            key={card.id}
            card={card}
          />
        ))}
      </div>
    </>
  );
};

export default Liked;
