import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  let addValue = () => {
    if (counter >= 20) {
      counter = 0;
    } else {
      setCounter(counter + 1);
    }
  };

  let removeValue = () => {
    if (counter <= 0) {
      counter = 0;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
