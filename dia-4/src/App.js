import "./App.css";
import { useState } from "react";
import { TextIcon } from "./components/TextIcon";
import { FaPlus } from "react-icons/fa";
function App() {
  const [regalos, setRegalos] = useState([]);
  const [value, setValue] = useState({ id: "", value: "" });

  const handleInput = ({ target }) => {
    setValue({ id: new Date().getTime(), value: target.value });
  };

  const onInputAdd = (event) => {
    event.preventDefault();
    setRegalos([...regalos, value]);
    setValue({ id: "", value: "" });
  };

  const handleDelete = (id) => {
    const arreglo = regalos.filter((rlg) => rlg.id !== id);
    setRegalos(arreglo);
  };
  return (
    <div className="App">
      <div className="form">
        <h2 className="form-title">regalos</h2>

        <input
          type="text"
          value={value.value}
          onChange={handleInput}
          name="inputRegalos"
          className="form-input"
        />
        <button type="submit" onClick={onInputAdd} className="form-button">
          Agregar
        </button>
      </div>
      <div className="list">
        {regalos.map((elem) => (
          <TextIcon elem={elem} key={elem.id} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
