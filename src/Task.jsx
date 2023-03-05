import "./Task.css";

const TaskCard = ({ subject = "subject", done = false }) => {
  return (
    <div className="card-container">
      <h1 className="title">
        Task: <span className="subject">{subject}</span>
      </h1>
      <h3 className="task">
        Completed:{" "}
        <span className={done ? "done" : "not-done"}>
          {done ? "Affirmative" : "Negative"}
        </span>
      </h3>
    </div>
  );
};

export default TaskCard;
