import { useState } from 'react'
import './App.css'

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [employees, setEmployees] = useState([
    {
      name: "Bilu Butt",
      profession: "Developer"
    },
    {
      name: "Ainak Lall",
      profession: "Optical Master"
    },
    {
      name: "Atif Aslam",
      profession: "Singing"
    }
  ])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* conditional rendering for one condition */}
        <p>I am {isAdmin && "an Admin"}</p>
        {/* conditional rendering for two condition */}
        <p>{isAdmin ? "The color of my bugghati is Red." : "I am a Student."}</p>
        <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>
      </div>

      {/* list rendering */}
      {employees.map(employee => {
        return (
          <li style={{margin: 12, border: "1px solid white", listStyleType: "none"}}>Profession of {employee.name} is {employee.profession}</li>
        )
      })}
    </>
  )
}

export default App
