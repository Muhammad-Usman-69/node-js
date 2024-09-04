import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from "./components/User.jsx"

// this will do the routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />
  },
  {
    path: "/home",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>
  },
  {
    path: "/contact",
    element: <><Navbar /><Contact /></>
  },
  {
    path: "/user/:username",
    element: <><Navbar /><User /></>
  }
])
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
