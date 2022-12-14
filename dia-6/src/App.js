import "./App.css";
import { useState } from "react";

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

  console.log(regalos.length);
  const verdad = false;
  return (
    <div className="App">
      <div>
        <h1>Regalos</h1>
        <input
          type="text"
          name="regalos"
          value={inputValue.value}
          onChange={onInputGift}
        />
        <button type="button" onClick={handleAddGift}>
          agregar
        </button>
      </div>

      <div>
        {regalos.length === 0 ? (
          <p>no hay regalos en la lista</p>
        ) : (
          <ul>
            {regalos.map((regalo) => (
              <li key={regalo.id}>
                {regalo.value}{" "}
                <button
                  type="button"
                  onClick={() => handleDeleteGift(regalo.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}

        <button type="button" onClick={handleDeleteAll}>
          eliminar lista
        </button>
      </div>
    </div>
  );
}

export default App;
