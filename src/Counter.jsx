import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("Placeholder");
  // use effect conter se ejecuta cada vez que se actualice la aplicacion o cada vez que el State pasado en la lista como segundo arguemnto cambie.
  useEffect(() => console.log("Updated"), [counter]);
  return (
    <div style={{ color: "#fff", fontFamily: "sans-serif" }}>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
      <button onClick={() => setCounter(counter - 1)}>Restar</button>
      <button onClick={() => setCounter(0)}>Resetear</button>

      <hr />

      <h3>{message}</h3>
      <input type="text" id="txt" />
      <button onClick={() => {
        setMessage(document.getElementById("txt").value);
      }}>Update</button>

    </div>
  );
};

export default Counter;
