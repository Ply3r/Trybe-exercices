import { useState, useEffect } from "react";

const useTitle = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(title);
  }, [title])

  return [title, setTitle]
}

export default useTitle;
