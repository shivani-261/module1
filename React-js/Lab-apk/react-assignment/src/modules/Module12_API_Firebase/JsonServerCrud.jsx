import React, { useEffect, useState } from 'react'

function JsonServerCrud() {
  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [editId, setEditId] = useState(null)

  const api = 'http://localhost:3000/students'

  const getStudents = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setStudents(data))
  }

  useEffect(() => {
    getStudents()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editId === null) {
      fetch(api, {
        method: 'POST',
    headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      }).then(() => {
        getStudents()
        setName('')
        setEmail('')
      })
    } else {
      fetch(`${api}/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: editId, name, email })
      }).then(() => {
        getStudents()
        setName('')
        setEmail('')
        setEditId(null)
      })
    }
  }

  const handleDelete = (id) => {
    fetch(`${api}/${id}`, {
      method: 'DELETE'
    }).then(() => getStudents())
  }

  const handleEdit = (student) => {
    setName(student.name)
    setEmail(student.email)
    setEditId(student.id)
  }

  const handlePatch = (id) => {
    fetch(`${api}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'Updated Name' })
    }).then(() => getStudents())
  }

  return (
    <div>
      <h2>Task 1 - JSON Server CRUD</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          {editId === null ? 'Add' : 'Update'}
        </button>
      </form>

      <table border="1" cellPadding="10" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '8px' }}>
                  Delete
                </button>
                <button onClick={() => handlePatch(item.id)} style={{ marginLeft: '8px' }}>
                  Patch
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JsonServerCrud