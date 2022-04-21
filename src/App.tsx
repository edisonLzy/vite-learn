import fib from 'virtual:fib';
import Svg from './svg/icon.svg';
function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          alert(fib(3));
        }}
      >
        alert
      </button>
      <Svg />
    </div>
  );
}

export default App;
