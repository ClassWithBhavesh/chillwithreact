import React, { memo } from 'react'

function SearchCompo({onChange}) {
    console.log("Child Component Rendered!");
    const inputObj = {
        width: "500px",
        height: "20px",
        color: "White",
        padding: "20px",
        fontSize: "25px"
    }
  return (
    <input type="text" style={inputObj} placeholder='search for a car...' onChange={(e) => onChange(e.target.value)} />
  )
}

export default memo(SearchCompo)
