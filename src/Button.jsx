const Button = ({
  text = "No named button",
  command = () => console.warn("Functio without button"),
}) => {
  return <button onClick={command}>{text}</button>;
};

export default Button;
