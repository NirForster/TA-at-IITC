import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

  function counterUp() {
    setCount(count + 1);
  }

  function counterDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={counterUp}>+</button>
      <p>count is {count}</p>
      <button onClick={counterDown}>-</button>
    </div>
  );
}

export default Counter;