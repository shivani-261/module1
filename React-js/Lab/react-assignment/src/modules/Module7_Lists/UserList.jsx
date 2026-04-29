import React from 'react'

function UserList() {
    const users = [
    { id: 1, name: 'Anshu' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Parit' }
  ]
  return (
    <div>
      <h3>Task 2: User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
