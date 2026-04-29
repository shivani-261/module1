import React, { useState } from 'react'

function CounterHooks() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Task 1 - useState Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  )
}

export default CounterHooks