import React from "react";

export const TextInput = ({ regalo, onDeleteIdGift }) => {
  const { id, value } = regalo;
  return (
    <div>
      <li>{value}</li>
      <button type="button" onClick={() => onDeleteIdGift(id)}>
        X
      </button>
    </div>
  );
};
