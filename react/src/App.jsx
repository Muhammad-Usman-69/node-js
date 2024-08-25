import './App.css'
import Card from './components/Card'
import Footer from './components/footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <div className="cards">
        <Card title="Tailwind Css Best" />
        <Card title="Kya Apke Toothpaste me namak ha?" />
        <Card title="Carryminati vs BB ki Vines" />
      </div>
      <Footer />
    </div>
  )
}

export default App
