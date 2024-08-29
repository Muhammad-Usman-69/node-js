import React, { useEffect } from 'react'
import { useRef } from 'react'

const Ref = () => {
  // useRef hook can make a non state variable's value persists when component rerender
  // useRef hook can give reference to an element which prevent dom selection
  const btnRef = useRef()

  return (
    <div>
      <h1>useRef()</h1>
      <button ref={btnRef} onClick={() => {btnRef.current.style.backgroundColor = "blue"}}>Change my Color</button>
    </div>
  )
}

export default Ref
