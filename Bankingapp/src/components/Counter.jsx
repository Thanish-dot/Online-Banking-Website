import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Counter: {count}</h3>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+1</button>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>-1</button>
    </div>
  );
}
export default Counter;