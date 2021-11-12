import React, { useState, useEffect, useContext, useRef } from "react";
import MyContext from './MyContext';

const Timer = () => {
  const { number, setNumber } = useContext(MyContext);
  const [ acerto, setAcerto ]  = useState(false);
  const timerRef = useRef();


  const Timer = () => {
    const timer = setInterval(() => {
      const randomNumber = Math.ceil(Math.random() * 99)

      if (randomNumber %3 === 0 || randomNumber %5 === 0) {
        aparecerAcertou();
      }

      timerRef.current = timer;
      setNumber(randomNumber)
    }, 10000)

  }

  useEffect(() => {
    Timer();
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  const aparecerAcertou = () => {
    setAcerto(true);
    setTimeout(() => {
      setAcerto(false)
    }, 4000)
  }
 

  return (
    <>
      <h1>Numero Aleatorio</h1>
      <h1>{ number }</h1>
      { acerto && <p>Acerto</p> }
    </>
  )
}

export default Timer;