import React from "react";
import ReactDOM from "react-dom/client";
import TaskCard from "./Task";

document.body.style.backgroundColor = "#222731";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard subject="programming" done={true} />
    <TaskCard subject="laundry" done={false} />
  </>
);
