import './App.css'
import { useState } from 'react';
import State from './components/State';
import Effect from './components/Effect';
import Ref from './components/Ref';
import Context from './components/Context';
import { person } from './contexts/person';

function App() {
  const [age, setAge] = useState(0);

  return (
    <>
      {/* this allows all the components wrapped inside provider to access its value using useContext() */}
      <person.Provider value={{age, setAge}}>
        <State />
        <Effect />
        <Ref />
        <Context />
      </person.Provider>
    </>
  )
}

export default App
