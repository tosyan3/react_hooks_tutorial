import React,{ useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [second_count, setSecondCount] = useState(0);
  const [second_text, setCountText] = useState({text:"Help! Push Second Button"});

  const onclickFunction = () => {
    setSecondCount(second_count + 1);
    setCountText({text:"Thank you for putting button!!!!"})
  }

  return (
  <div className="App">
      <header className="App-header">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>
          {second_text.text}.
          Yout clicked {second_count} times
        </p>
        <button onClick={onclickFunction}>
          Click me.Second button
        </button>
      </header>
    </div>
  );
}

export default App;
