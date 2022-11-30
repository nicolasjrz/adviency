import React, { useState } from "react";
import "./App.css";
export const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [gifts, setGifts] = useState(["Medias", "Caramelos", "Vitel Tone"]);
  return (
    <div className="App">
      <h1>Regalos</h1>
      {gifts.map((elem) => (
        <ul key={elem}>
          <li className="list">{elem}</li>
        </ul>
      ))}
    </div>
  );
};
