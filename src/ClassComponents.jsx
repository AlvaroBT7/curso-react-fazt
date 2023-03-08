import { Component } from "react";
import PropTypes from "prop-types";

export class GreetingCard extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      color: "#fff",
      fontFamily: "sans-serif",
      padding: "0",
      margin: "0",
      border: "none"
    }
  }
  render() {
    return (
      <div style={this.styles}>
        <h1>Hello World: {this.props.greet}</h1>
      </div>
    )
  }
}


GreetingCard.propTypes = {
  greet: PropTypes.string.isRequired
}
