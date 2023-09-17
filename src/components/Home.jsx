import React from "react";
import "./Home.css";
import Card from "./Card";
import { Link } from "react-router-dom";

const dummyCards = [
  {
    id: 1,
    title: "Card 1",
    description: "Description for Card 1",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description for Card 2",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Description for Card 3",
  },
  {
    id: 4,
    title: "Card 4",
    description: "Description for Card 4",
  },
  {
    id: 5,
    title: "Card 5",
    description: "Description for Card 5",
  },
  {
    id: 6,
    title: "Card 6",
    description: "Description for Card 6",
  },
];
const Home = () => {
  
  return (
    <div className="card-container">
    {dummyCards.map((card) => (
      <Card
         key={card.id}
         card={card}
      />
    ))}
    <div className="like_dis_link">
      <Link to="/like">TOTAL LIKES </Link> | 
      <Link to="/dislike"> TOTAL DISLIKES</Link>
    </div>
  </div>
      );
};

export  {dummyCards} ;
export default Home;
