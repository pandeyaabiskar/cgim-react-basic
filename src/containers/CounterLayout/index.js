import { useState } from 'react';

function CounterLayout() {
  const [count, setCount] = useState(0);

    const increaseValue = () => {
        setCount((prev) => {return prev + 1})
        console.log(count)
    }
    const decreaseValue = () => {
      setCount((prev) => {return prev - 1})
        console.log(count)
    }

  return (
    <div>
      <h1>Counter</h1>
          <button onClick={decreaseValue}>Decrease</button>
          <h2>{count}</h2>
          <button onClick={increaseValue}>Increase</button>
    </div>
  );
}

export default CounterLayout;
