import React from "react"

const Counter = React.memo(function Counter({ value }) {
  console.log("Render ulang Counter...")
  return <h2>Count: {value}</h2>
})

export default Counter;
