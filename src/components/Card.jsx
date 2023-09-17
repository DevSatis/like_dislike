import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setLikedCards,
  setDislikedCards,
} from "../features/cardSlice";

const Card = ({card}) => {

  const dispatch = useDispatch();
  const likedCards = useSelector((state) => state.card.liked);
  const dislikedCards = useSelector((state) => state.card.disliked);

  useEffect(() => {
    const storedLikedCards =
      JSON.parse(localStorage.getItem("likedCards")) || [];
    const storedDislikedCards =
      JSON.parse(localStorage.getItem("dislikedCards")) || [];

    dispatch(setLikedCards(storedLikedCards));
    dispatch(setDislikedCards(storedDislikedCards));
  }, [dispatch]);

  const isLiked = (cardId) => likedCards.includes(cardId);
  const isDisliked = (cardId) => dislikedCards.includes(cardId);

  const handleLike = (cardId) => {
    if (likedCards.includes(cardId)) {
      const updatedLikedCards = likedCards.filter((id) => id !== cardId);
      dispatch(setLikedCards(updatedLikedCards));
      localStorage.setItem('likedCards', JSON.stringify(updatedLikedCards));
    } else {
      const updatedLikedCards = [...likedCards, cardId];
      const updatedDislikedCards = dislikedCards.filter((id) => id !== cardId);
  
      dispatch(setLikedCards(updatedLikedCards));
      dispatch(setDislikedCards(updatedDislikedCards));
  
      localStorage.setItem('likedCards', JSON.stringify(updatedLikedCards));
      localStorage.setItem('dislikedCards', JSON.stringify(updatedDislikedCards));
    }
  };
  
  const handleDislike = (cardId) => {
    if (dislikedCards.includes(cardId)) {
      const updatedDislikedCards = dislikedCards.filter((id) => id !== cardId);
      dispatch(setDislikedCards(updatedDislikedCards));
      localStorage.setItem('dislikedCards', JSON.stringify(updatedDislikedCards));
    } else {
      const updatedDislikedCards = [...dislikedCards, cardId];
      const updatedLikedCards = likedCards.filter((id) => id !== cardId);
  
      dispatch(setDislikedCards(updatedDislikedCards));
      dispatch(setLikedCards(updatedLikedCards));
  
      localStorage.setItem('dislikedCards', JSON.stringify(updatedDislikedCards));
      localStorage.setItem('likedCards', JSON.stringify(updatedLikedCards));
    }
  };
  return (
    <div
      key={card.id}
      className={`card ${isLiked(card.id) ? "liked" : "cards"} ${
        isDisliked(card.id) ? "disliked" : "cards"
      }`}
    >
      <div
        style={{
          background: "red",
          width: "1px",
          height: "100%",
          position: "absolute",
          left: "20px",
          top: "0",
        }}
      ></div>
      <div
        style={{
          background: "red",
          width: "100%",
          height: "1px",
          position: "absolute",
          left: "0",
          top: "90px",
        }}
      ></div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <div className="buttons">
        <button className={`btn likebtn`} onClick={() => handleLike(card.id)}>
          <ThumbUpAltIcon
            style={{
              color: isLiked(card.id) ? "green" : "black",
              fontSize: "medium",
            }}
          />
        </button>
        <button
          className={`btn likebtn`}
          onClick={() => handleDislike(card.id)}
        >
          <ThumbDownAltIcon
            fontSize="small"
            style={{
              color: isDisliked(card.id) ? "red" : "black",
              fontSize: "medium",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
