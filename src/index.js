import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting name="Alvaro" surname="Barrero" age={15}/>
    <Greeting name="Mauricio" surname="Hernandez" />
  </>
);
