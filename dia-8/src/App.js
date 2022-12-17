import { useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput";

function App() {
  const [regalos, setRegalos] = useState([]);
  const [inputValue, setInputValue] = useState({ id: "", gift: "", cant: "" });
  const [isRegalo, setIsRegalo] = useState({ found: false, isGifs: false });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({
      ...inputValue,
      id: new Date().getMilliseconds(),
      [name]: value,
    });
  };

  const refreshInputs = (e) => {
    setInputValue({ id: "", gift: "", cant: "" });
    e.target.reset();
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (
      inputValue.gift.trim().length === 0 ||
      inputValue.cant.trim().length === 0
    )
      return;

    const status = regalos.some((regalo) => regalo.gift === inputValue.gift);

    if (status)
      return setIsRegalo({ ...isRegalo, found: true }) + refreshInputs(e);

    setIsRegalo({ ...isRegalo, found: false, isGifs: true });
    setRegalos([...regalos, inputValue]);
    refreshInputs(e);
  };

  const handleDeleteAll = () => {
    setRegalos([]);
    setIsRegalo({ ...isRegalo, found: false, isGifs: false });
  };

  const handleDeleteId = (id) => {
    if (regalos.length <= 1)
      return setIsRegalo({ ...isRegalo, isGifs: false }) + setRegalos([]);
    const array = regalos.filter((regalo) => regalo.id !== id);
    setRegalos(array);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Regalos</h2>
        <div>
          <form onSubmit={handleAdd}>
            <input
              type="text"
              name="gift"
              onChange={onInputChange}
              value={inputValue.gift}
              className="input-form"
            />
            <input
              type="number"
              name="cant"
              onChange={onInputChange}
              value={inputValue.cantidad}
              max="10"
              min="0"
              className="input-form"
            />
            <button type="submit" className="button-form">
              agregar
            </button>
          </form>
          {isRegalo.found ? <p>regalo ya agregado</p> : <></>}
        </div>
      </div>

      {isRegalo.isGifs ? (
        <div className="body">
          <div>
            <ul>
              {regalos.map((regalo) => (
                <TextInput
                  key={regalo.id}
                  regalo={regalo}
                  handleDeleteId={handleDeleteId}
                />
              ))}
            </ul>

            <button
              type="button"
              onClick={handleDeleteAll}
              className="button-form"
            >
              eliminar todo
            </button>
          </div>
        </div>
      ) : (
        <>
          <p>No hay regalos</p>
        </>
      )}
    </div>
  );
}

export default App;
