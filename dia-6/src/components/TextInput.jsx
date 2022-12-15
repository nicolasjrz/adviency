import React from "react";
import "../App.css";
export const TextInput = ({ regalo, handleDeleteGift }) => {
  return (
    <div className="container">
      <li>{regalo.value}</li>
      <button
        type="button"
        className="button-form"
        onClick={() => handleDeleteGift(regalo.id)}
      >
        X
      </button>
    </div>
  );
};
