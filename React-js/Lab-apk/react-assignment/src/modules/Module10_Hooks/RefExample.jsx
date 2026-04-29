import React, { useRef, useState } from 'react'

function RefExample() {
  const inputRef = useRef(null)
  const renderCount = useRef(0)
  const [text, setText] = useState('')

  renderCount.current += 1

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <h2>Task 4 - useRef Example</h2>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={focusInput} style={{ marginLeft: '10px' }}>
        Focus Input
      </button>
      <p>Input Value: {text}</p>
      <p>Render Count: {renderCount.current}</p>
    </div>
  )
}

export default RefExample