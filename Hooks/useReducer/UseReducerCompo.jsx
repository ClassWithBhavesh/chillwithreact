import React, { useEffect, useReducer } from "react";

function UseReducerCompo() {
  const API_URL = "https://sonplaceholder.typicode.com/users";

  const handleAPIResponse = (state, action) => {
    const { type } = action;
    switch (type) {
      case "PENDING":
        return { ...state, loading: true };
      case "FULLFILL":
        return { ...state, loading: false, data: action.payload };
      case "REJECT":
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };

  const initialState = {
    loading: false,
    data: null,
    error: "",
  };

  const [ApiState, dispatch] = useReducer(handleAPIResponse, initialState);

//   useEffect(() => {
    const fetchAPI = async () => {
      dispatch({ type: "PENDING" });
      console.log("pending....");
      try {
        const APIResponse = await fetch(API_URL);
        const data = await APIResponse.json();

        dispatch({ type: "FULLFILL", payload: data });
        console.log("Fullfilled")
      } catch (err) {
        dispatch({ type: "REJECT", error: "API fetch unsuccessfull" });
        console.log("Rejected");
      }
    };
//   }, []);

  return (
    <>
        {ApiState.loading && <div><h1>Loading...</h1></div>}
        {ApiState.data && (
            ApiState.data.map((user, id) => (
                <li key={id}>{user.username}</li>
            ))
        )}
        {ApiState.error && <div><h1>{ApiState.error}</h1></div>}
      <button onClick={fetchAPI}>fetch API</button>
    </>
  );
}

export default UseReducerCompo;
