import { useState } from 'react'

function FormData() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
    }
    return (
        <div>
            <h3>Task 1: Form Data</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />

                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                </div>
            )}
        </div>
    )
}

export default FormData
