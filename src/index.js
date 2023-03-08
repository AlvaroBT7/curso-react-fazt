import React from "react";
import ReactDOM from "react-dom/client";
import { GreetingCard } from "./ClassComponents";

document.body.style.backgroundColor = "#222731";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <GreetingCard greet="Alvaro" />
  </>
);
