import "./App.css";
import { useState } from "react";
import { TextInput } from "./components/TextInput";

function App() {
  const [regalos, setRegalos] = useState([]);

  const [inputValue, setInputValue] = useState({ id: "", value: "" });

  const onInputGift = (event) => {
    const { target } = event;
    setInputValue({ id: new Date().getMilliseconds(), value: target.value });
  };

  const handleAddGift = (event) => {
    event.preventDefault();
    setRegalos([...regalos, inputValue]);
    setInputValue({ id: "", value: "" });
  };

  const handleDeleteGift = (id) => {
    const array = regalos.filter((regalo) => regalo.id !== id);
    setRegalos(array);
  };

  const handleDeleteAll = () => {
    setRegalos([]);
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>Regalos</h1>
          <input
            type="text"
            name="regalos"
            value={inputValue.value}
            onChange={onInputGift}
            className="input-form"
          />
          <button type="button" onClick={handleAddGift} className="button-form">
            agregar
          </button>
        </div>

        <div>
          {regalos.length === 0 ? (
            <p>no hay regalos en la lista</p>
          ) : (
            <ul>
              {regalos.map((regalo) => (
                <TextInput
                  key={regalo.id}
                  regalo={regalo}
                  handleDeleteGift={handleDeleteGift}
                />
              ))}
            </ul>
          )}

          <button
            type="button"
            onClick={handleDeleteAll}
            className="button-form"
          >
            eliminar lista
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
