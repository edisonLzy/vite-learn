import { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Child() {
  const [count, setCount] = useState(2);
  return (
    <div>
      <h1 onClick={() => setCount((count) => count + 1)}>{count}</h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount');

    }
  }, [])

  useMemo(() => {
    console.log('memo run ');
    return 1
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite!!</p>
        <input placeholder="请输入" />
        <Child />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
