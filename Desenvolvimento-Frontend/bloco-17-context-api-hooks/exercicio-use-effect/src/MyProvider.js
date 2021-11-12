import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [number, setNumber] = useState(1);

  const value = {
    number,
    setNumber
  }

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  )
}

export default MyProvider