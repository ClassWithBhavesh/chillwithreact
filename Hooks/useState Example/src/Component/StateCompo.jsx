import React, { useState } from "react";

function StateCompo() {
  const [state, setState] = useState(() => {
    console.log("Component Rendered first time")
  })
  // const [userData, setUserData] = useState({
  //   fullName : "Balram Baghel",
  //   email: "balram810@gmail.com",
  //   password: "balramBhai"
  // });

  // const changeName = () => {
  //   setUserData(prevState => ({...prevState, password: "balram_11"})
  //   );
  // }

  const changeState = () => {
    setState(state + 10)
    console.log("Component Re-rendered!");
  }

  return (
    <div>
      <button onClick={changeState}>Change State</button>
      {/* <span>{state}</span> */}
    </div>

    // <div
    //   style={{
    //     display: "flex",
    //     placeContent: "center",
    //     placeItems: "center",
    //     fontSize: "30px",
    //   }}
    // >
    //   <button onClick={changeName}>Change FullName</button>
    //   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //   <div>
    //     {userData.fullName}
    //     <br />
    //     {userData.email}
    //     <br />
    //     {userData.password}
    //     <br />
    //   </div>
    //   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    // </div>
  );
}

export default StateCompo;
