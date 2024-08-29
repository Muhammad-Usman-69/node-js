import React, { useState } from 'react'
import { useEffect } from 'react';

const Effect = () => {
  const [Number, setNumber] = useState(0)

  //useEffect hook triggers function on some change / rerender
  useEffect(() => {
    console.log("I show up on every render");
  })

  useEffect(() => {
    console.log("I show up on first render only");
  }, [])

  useEffect(() => {
    console.log("I show up when a number State is changed");
  }, [Number])

  useEffect(() => {
    return () => {
      console.log("I show up when a components dismounts")
    }
  }, [])

  return (
    <div>
      <h1>useState()</h1>
      <button onClick={() => setNumber(Number + 1)}>Change Number</button>
      <p>Check Console</p>
    </div>
  )
}

export default Effect
