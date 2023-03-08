import React from "react";
import ReactDOM from "react-dom/client";
import Posts from "./Posts";

document.body.style.backgroundColor = "#222731";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Posts text="Solicitar los datos al back-end" />
  </>
);
