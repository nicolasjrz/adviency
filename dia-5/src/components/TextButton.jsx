import React from "react";
import "../App.css";
export const TextButton = ({ elem, onDeleteGift }) => {
  return (
    <div className="container">
      <li key={elem.id}>{elem.value}</li>
      <button onClick={() => onDeleteGift(elem.id)}>X</button>
    </div>
  );
};
