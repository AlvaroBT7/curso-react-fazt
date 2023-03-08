import React from "react";
import ReactDOM from "react-dom/client";
import ArrComponent from "./ArrComponent";

document.body.style.backgroundColor = "#222731";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 0,
    name: "Alvaro",
    surname: "Barrero",
    age: 15,
    img: "https://robohash.org/user1",
  },
  {
    id: 1,
    name: "Poliedro",
    surname: "Sancho",
    age: 323,
    img: "https://robohash.org/user2",
  },
  {
    id: 2,
    name: "Mauricio",
    surname: "Fernandez",
    age: 9,
    img: "https://robohash.org/user3",
  },
];

root.render(
  <>
    <ArrComponent users={users}/>
  </>
);
