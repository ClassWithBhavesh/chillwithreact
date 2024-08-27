import { Component } from "react"
import StateCompo from "./Component/StateCompo"
// import StateWithClassCompo from "./Component/StateWithClassCompo"
// import Child from "./Component/Child.jsx"
// import { userData } from "./Component/Data.js"

class App extends Component{

  render(){
    return(
      <>
        <h1>Managing State</h1>
        <StateCompo />
        {/* <StateWithClassCompo /> */}
      </>
    )
  }
}

export default App