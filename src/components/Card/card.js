import React from "react";
import "./card.css";

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="card-wrapper">{children}</div>
    </div>
  );
};

export default Card;
