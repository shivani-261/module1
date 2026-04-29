import React from 'react'
import { useState } from 'react'


function ClickEvent() {
    const [status, setStatus] = useState('Not Clicked')
  return (
    <div> 
      <h3>Task 1: Button Click Event</h3>
      <p>{status}</p>
      <button onClick={() => setStatus('Clicked!')}>
        Click Me
      </button>
    </div>
  )
}

export default ClickEvent
