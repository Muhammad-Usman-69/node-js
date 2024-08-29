import React from 'react'
import { useState } from 'react'

const State = () => {
  // useState hooks updates the value and rerender value in the components without dom selection
  const [count, setCount] = useState(0)
  return (
    <div>
        <h1>useState()</h1>
        <div style={{gap: 12, display: "flex", alignItems: "center"}}>
          <span>Count is {count}</span>
          <button onClick={() => setCount(count + 1)}>Increament</button>
          <button onClick={() => setCount(count - 1)}>Decreament</button>
        </div>
      </div>
  )
}

export default State
