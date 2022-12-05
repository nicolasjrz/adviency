import { useState } from "react";
import "./App.css";

function App() {
  const [gifs, setGifs] = useState([
    "placa de video",
    "un lambo",
    "silla gamer",
  ]);
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const onSend = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setGifs((regalos) => [inputValue, ...regalos]);
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="form-section">
        <form onSubmit={onSend}>
          <input
            className="input-form"
            type="text"
            name="regalo"
            onChange={onChangeInput}
            value={inputValue}
            placeholder="Agregar regalo...."
          />
          <button className="button-form" type="submit">
            send
          </button>
        </form>
      </div>
      <div className="list-section">
        <div>
          <h1 className="title">Regalos</h1>
          <ul className="list-item">
            {gifs.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
