import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ReduxCounter() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Task 3 - useSelector and useDispatch</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  )
}

export default ReduxCounter