const Task = (value) => <li>{value}</li>

let arr = ['a', 'b', 'c']
arr = arr.map((e) => Task(e))

function App() {
  return (
    <div className="App">
      <h1>Minha lista</h1>
      <ol>
        {Task('leandro')}
        {arr}
      </ol>
    </div>
  );
}

export default App;
