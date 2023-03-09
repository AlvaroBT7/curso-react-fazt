import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

document.body.style.backgroundColor = "#222731";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Counter />
  </>
);
