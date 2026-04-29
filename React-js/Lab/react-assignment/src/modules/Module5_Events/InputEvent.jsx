import { useState } from "react"

function InputEvent() {
    const [inputText, setInputText] = useState('')
    return (
        <div>
            <h3>Task 2: Input Change Event</h3>
            <input
                type="text"
                placeholder="Type something"
                onChange={(e) => setInputText(e.target.value)}
            />
            <p>You typed: {inputText}</p>

        </div>
    )
}

export default InputEvent
