import { useState } from "react";
import useArray from "./hooks/useArray"
import useTitle from "./hooks/useTitle";

const App = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useArray();
  const [title, setTitle] = useTitle();

  const handleChange = ({ target: { value } }) => {
    setInput(value)
  }

  const onButtonClick = () => {
    setList([...list, input]);
    setInput('');
  }


  
  return (
    <>
      <h1>{ title ? title : '' }</h1>
      <h1>To do list</h1>
      <input value={ input } onChange={ handleChange } />
      <button onClick={ onButtonClick } type="button">Add</button>
      <ul>
        { 
          list.map((item) => (
            <li key={ item } onClick={() => setTitle(item)}>{ item }</li>
          )) 
        }
      </ul>
    </>
  )
}

export default App
