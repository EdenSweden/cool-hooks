import React, { useState, useRef } from 'react';
import UseDeferredValueExample from "./UseDeferredValueExample";
import UseTransitionExample from "./UseTransitionExample";
import ForwardRefExample from './ForwardRefExample';

function App() {

  const [input, setInput] = useState('');
  const [value, setValue] = useState('red');
  const forwardRefRef = useRef();

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
      <h1>React.forwardRef:</h1>
      <ForwardRefExample
      ref={forwardRefRef}
      value={value}
      onChange={e => setValue(e.target.value)}
       />
       <br />
       <button onClick={() => forwardRefRef.current.focus()}>Focus</button>
    </div>
  );
}

export default App;
