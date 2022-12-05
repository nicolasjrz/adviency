import { useState } from "react";
import "./App.css";

function App() {
  const [gif] = useState(["ferrari", "play 2", "milanesa"]);
  return (
    <div className="App">
      <div className="list-gifs">
        <div>
          <h1 className="title">Regalos</h1>
          <ul className="list-item">
            {gif.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
