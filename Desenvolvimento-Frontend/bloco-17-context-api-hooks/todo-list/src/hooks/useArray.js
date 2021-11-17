import { useState, useEffect } from 'react';

const useArray = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(list)
  }, [list])

  return [list, setList]
}

export default useArray;