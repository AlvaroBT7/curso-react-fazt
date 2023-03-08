import PropTypes from "prop-types";

const Posts = ({ text }) => {
  return (
    <button
      onClick={async () => {
        try {
          const response = await fetch(
            /*"https://jsonplaceholder.typicode.com/posts"*/
            "https://jsonplaceholder.typicode.com/photos"
          );
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      {text}
    </button>
  );
};

Posts.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Posts;
