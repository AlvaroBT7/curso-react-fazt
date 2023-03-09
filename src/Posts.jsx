import PropTypes from "prop-types";
import { AiFillCaretRight, AiFillAndroid } from "react-icons/ai";

const Posts = ({ text }) => {
  return (
    <button
      onClick={async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
          );
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <AiFillCaretRight />
      {text}
      <AiFillAndroid />
    </button>
  );
};

Posts.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Posts;
