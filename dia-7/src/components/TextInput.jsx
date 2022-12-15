import React from "react";

export const TextInput = ({ regalo, onDeleteIdGift }) => {
  const { id, value } = regalo;
  return (
    <div className="container">
      <li>{value}</li>
      <button
        type="button"
        onClick={() => onDeleteIdGift(id)}
        className="button-form"
      >
        X
      </button>
    </div>
  );
};
