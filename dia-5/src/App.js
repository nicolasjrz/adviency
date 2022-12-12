import "./App.css";
import { useState } from "react";
import { TextButton } from "./components/TextButton";

function App() {
  const [regalos, setRegalos] = useState([]);
  const [inputValue, setInputValue] = useState({ id: "", value: "" });

  const handleInput = (event) => {
    const { target } = event;
    setInputValue({ id: new Date().getMilliseconds(), value: target.value });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (inputValue.value.trim().length <= 1) return;
    setRegalos([...regalos, inputValue]);
    setInputValue({ id: "", value: "" });
  };

  const onDeleteGift = (id) => {
    const array = regalos.filter((ragalo) => ragalo.id !== id);
    setRegalos(array);
  };

  const onTrashGift = () => {
    setRegalos([]);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Regalos</h1>
        <div>
          <input
            type="text"
            name=""
            value={inputValue.value}
            onChange={handleInput}
            className="input-form"
          />
          <button type="submit" onClick={handleAdd}>
            agregar
          </button>
        </div>

        <ul>
          {regalos.map((elem) => (
            <TextButton key={elem.id} elem={elem} onDeleteGift={onDeleteGift} />
          ))}
        </ul>

        <button type="button" onClick={onTrashGift}>
          eliminar todo
        </button>
      </div>
    </div>
  );
}

export default App;
