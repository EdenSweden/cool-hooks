import React, { useState } from 'react';
import UseDeferredValueExample from "./UseDeferredValueExample";
import UseTransitionExample from "./UseTransitionExample";

function App() {

  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>UseTransition:</h1>
      <UseTransitionExample />
      <h1>UseDeferredValue:</h1>
      <input type='text' value={input} onChange={handleChange} />
      <UseDeferredValueExample input={input} />
    </div>
  );
}

export default App;
