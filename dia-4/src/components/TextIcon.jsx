import React from "react";
import "../App.css";
import { FaTrash } from "react-icons/fa";
export const TextIcon = ({ elem, handleDelete }) => {
  const { value } = elem;
  return (
    <div className="container">
      <li className="title-icon">{value}</li>

      <button className="list-button" onClick={() => handleDelete(elem.id)}>
        <FaTrash color="black" />
      </button>
    </div>
  );
};
