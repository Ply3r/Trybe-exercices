import React, { useState } from "react";
import MyProvider from './MyProvider';
import Timer from "./Timer";

const App = () => {
  const [showTimer, setShowTimer] = useState(true)

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  }

  return (
    <>
      { showTimer && (
        <MyProvider>
          <Timer />
        </MyProvider>
      ) }
      <button
        onClick={ toggleTimer }
      >
        { showTimer ? 'Parar' : 'Iniciar' }
      </button>
    </>
  )
}

export default App;
