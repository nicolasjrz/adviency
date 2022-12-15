import "./App.css";
import { useState } from "react";
import { TextInput } from "./components/TextInput";

function App() {
  const [regalos, setRegalos] = useState([]);
  const [inputValue, setInputValue] = useState({ id: "", value: "" });
  const [isRegalo, setIsRegalo] = useState(false);

  const hadleInput = ({ target }) => {
    const { value } = target;
    setInputValue({ id: new Date().getMilliseconds(), value: value });
  };

  const onDeleteGift = (event) => {
    event.preventDefault();
    if (inputValue.value.trim() >= 0) return;
    const status = regalos.some((regalo) => regalo.value === inputValue.value);
    if (status) {
      setIsRegalo(true);
      setInputValue({ id: "", value: "" });
    } else {
      setRegalos([...regalos, inputValue]);
      setInputValue({ id: "", value: "" });
      setIsRegalo(false);
    }
  };
  const onDeleteIdGift = (id) => {
    const aux = regalos.filter((regalo) => regalo.id !== id);
    setRegalos(aux);
  };

  const onDeleteAllGift = () => {
    setRegalos([]);
    setIsRegalo(false);
  };
  return (
    <div className="App">
      <div className="body">
        <h1>Regalos</h1>
        <div className="container-form">
          <input
            type="text"
            name=""
            value={inputValue.value}
            onChange={hadleInput}
            className="input-form"
          />
          <button type="button" onClick={onDeleteGift} className="button-form">
            agregar
          </button>
        </div>
        {isRegalo ? <p>regalo ya agregado !!! </p> : <></>}

        <div className="container-list">
          {regalos.length === 0 ? (
            <p>no hay regalos</p>
          ) : (
            <ul>
              {regalos.map((regalo) => (
                <TextInput
                  key={regalo.id}
                  regalo={regalo}
                  onDeleteIdGift={onDeleteIdGift}
                />
              ))}
            </ul>
          )}
        </div>
        <button type="button" onClick={onDeleteAllGift} className="button-form">
          eliminar todo
        </button>
      </div>
    </div>
  );
}

export default App;
