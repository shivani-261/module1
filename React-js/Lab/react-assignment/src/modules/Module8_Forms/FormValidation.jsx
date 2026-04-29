import { useState } from 'react'

function FormValidation() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (!email.includes('@')) {
            setError('Invalid email address')
        } else {
            setError('')
            alert('Email submitted successfully')
        }
    }

    return (
        <div>
            <h3>Task 2: Email Validation</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />

                <button type="submit">Submit</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default FormValidation
