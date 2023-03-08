import { Component } from "react";

export class GreetingCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello World: {this.props.greet}</h1>
      </div>
    )
  }
}
