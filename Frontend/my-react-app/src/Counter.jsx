import React, { useState } from 'react'

const Counter = () => {

  let [Count, setCount] = useState(0)
  let CountHandler = () => {
    setCount(Count + 1)
  }

  return (
    <>
      <h1>Counter Application</h1>
      <button onClick={CountHandler}>Count- {Count}</button>
    </>
  )
}

export default Counter

