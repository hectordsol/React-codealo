import "./styles.css";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [incremento, setIncremento] = useState(1);
  const aumentar = (e) => {
    e.preventDefault();
    setContador(contador + parseInt(incremento));
  };
  const disminuir = (e) => {
    e.preventDefault();
    setContador(contador - parseInt(incremento));
  };
  const onChange = (e) => {
    const valor = e.target.value;
    setIncremento(valor);
  };
  return (
    <div className="App">
      <h1>Editando con Codealo</h1>
      <div>
        <input
          type="number"
          placeholder="(1) valor de incremento"
          onChange={onChange}
          value={incremento}
        ></input>
      </div>
      <div>
        <button onClick={aumentar}>incremento</button>
      </div>
      <div>
        <label>{contador} </label>
      </div>
      <div>
        <button onClick={disminuir}>decremento</button>
      </div>
    </div>
  );
}
