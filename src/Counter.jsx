import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ color: "#fff", fontFamily: "sans-serif" }}>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
      <button onClick={() => setCounter(counter - 1)}>Restar</button>
      <button onClick={() => setCounter(0)}>Resetear</button>
    </div>
  );
};

export default Counter;
