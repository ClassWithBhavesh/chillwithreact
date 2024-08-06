import { Component } from "react"
import Child from "./Component/Child.jsx"
import { userData } from "./Component/Data.js"

class App extends Component{

  // constructor(){
  //   super()
  //   let num = 10;
  //   // console.log("Parent Constructor : ", num);
  // }

  render(){
    return(
      <>
        <h1>Class Component</h1>
        {userData.map((user, ind) => {
          return <Child key={ind} nayakKaNaam={user.name} dusraNaam={user.username} />
        })}
      </>
    )
  }
}

export default App