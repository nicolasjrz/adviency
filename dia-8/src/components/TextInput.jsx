import React from "react";

export const TextInput = ({ regalo, handleDeleteId }) => {
  return (
    <div className="container">
      <li>
        {regalo.gift} ({regalo.cant})
      </li>
      <button
        type="button"
        onClick={() => handleDeleteId(regalo.id)}
        className="button-form"
      >
        X
      </button>
    </div>
  );
};
