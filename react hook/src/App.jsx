import './App.css'
import { useState } from 'react';
import State from './components/State';
import Effect from './components/Effect';
import Ref from './components/Ref';
import Context from './components/Context';
import { person } from './contexts/person';
import Memo from './components/Memo';

function App() {
  const [age, setAge] = useState(0);

  return (
    <>
      <State />
      <Effect />
      <Ref />
      {/* this allows the component wrapped inside provider to access its value using useContext() */}
      <person.Provider value={{ age, setAge }}>
        <Context />
      </person.Provider>
      <Memo />
    </>
  )
}

export default App
