import { Component } from "react";

class StateWithClassCompo extends Component {

    constructor(){
        super()
        this.state = {
            userName: 0
        }
    }
    
    changeState = () => {
        this.setState({
            userName: this.state.userName+1
        }, () => {
            console.log("state from callback" ,this.state.userName)
        })
        console.log(this.state.userName);
    }
    

  render() {
    return (
      <>
        <h2>Welcome {this.state.userName}</h2>
        <button onClick={this.changeState}>Change User</button>
      </>
    );
  }
}

export default StateWithClassCompo