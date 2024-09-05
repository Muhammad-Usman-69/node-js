import React from 'react'
import { useContext } from 'react'
import { person } from '../contexts/person'

// useContext is a way to manage state globally without props.

const Context = () => {
  // taking person's data without props
  const value = useContext(person)

  return (
    <div>
      <h1>useContext()</h1>
      <div style={{ gap: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span>Person's age is {value.age}</span>
        <button onClick={() => value.setAge(value.age + 1)}>Increament It</button>
      </div>
    </div>
  )
}

export default Context
