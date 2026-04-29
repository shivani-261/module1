import React, { useEffect, useState } from 'react'

function FetchDataEffect() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('Error:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h2>Task 2 - useEffect API Fetch</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FetchDataEffect