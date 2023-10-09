import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Regalos</h2>
      <form>
        <input type="text" name="regalo" />
        <input type="number" name="cantidad" />
        <button type="submit">agregar</button>
      </form>

      <ul>
        <li>
          regalo 1 <button type="button">x</button>
        </li>
      </ul>
      <button type="button">eliminar todo</button>
    </div>
  );
}

export default App;
