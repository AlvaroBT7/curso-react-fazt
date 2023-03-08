import "./ArrComponent.css";

const ArrComponent = ({ users }) => {
  return (
    <>
      {users.map((user, index) => {
        return (
          <div key={index} className="container">
            <h3>
              {user.id} {user.name}, {user.surname} {user.age}
            </h3>
            <img src={user.img} alt="img" />
          </div>
        );
      })}
    </>
  );
};

export default ArrComponent;
