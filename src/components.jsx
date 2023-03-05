export const IsBobo = () => {
  const isBobo = true;
  return <h1>{isBobo ? "Es bobo" : "No es bobo"}</h1>;
};

export const User = () => {
  const user = {
    name: "Alvaro",
    surname: "Barrero",
    age: 15,
  };
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Surname: {user.surname}</h1>
      <h1>Age: {user.age}</h1>
    </div>
  );
};

export const Player = () => {
  const playerStats = {
    playerId: "Dnemix",
    timePlayed: "15h",
    kills: 1500,
  };

  return (
    <div>
      <h1>Id de jugador: {playerStats.playerId}</h1>
      <h1>Tiempo de juego: {playerStats.timePlayed}</h1>
      <h1>Numero de eliminaciones: {playerStats.kills}</h1>
    </div>
  );
};

export const Greeting = ({name, surname, age="No tiene esta propiedad"}) => {
  const message = `Name: ${name}\nSurname: ${surname}\nAge: ${age}`;
  console.log(message);
  return <h2>{message}</h2>;
};




export default { Greeting, IsBobo, User, Player };
