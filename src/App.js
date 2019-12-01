import React,{ useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [second_count, setSecondCount] = useState(0);
  return (
  <div className="App">
      <header className="App-header">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>Yout clicked {second_count} times</p>
        <button onClick={() => setSecondCount(second_count + 1)}>
          Click me.Second button
        </button>
      </header>
    </div>
  );
}

export default App;
