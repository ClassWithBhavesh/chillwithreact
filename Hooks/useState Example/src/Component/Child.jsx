import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>{this.props.nayakKaNaam} - Nayak ke naam</h2>
        <h2>{this.props.dusraNaam} - Villain ke naam</h2>
      </>
    );
  }
}

export default Child;
