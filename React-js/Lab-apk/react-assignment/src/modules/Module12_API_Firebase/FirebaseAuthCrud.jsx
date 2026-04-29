import React, { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { ref, push, set, onValue, remove, update } from 'firebase/database'
import { auth, provider, database } from './firebase'

function FirebaseAuthCrud() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [title, setTitle] = useState('')
  const [items, setItems] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  useEffect(() => {
    const itemsRef = ref(database, 'notes')
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val()
      const itemList = []

      for (let id in data) {
        itemList.push({ id, ...data[id] })
      }

      setItems(itemList)
    })
  }, [])

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert('User registered'))
      .catch((error) => alert(error.message))
  }

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert('Login successful'))
      .catch((error) => alert(error.message))
  }

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => alert('Google login successful'))
      .catch((error) => alert(error.message))
  }

  const logoutUser = () => {
    signOut(auth)
  }

  const addData = () => {
    const itemsRef = ref(database, 'notes')
    const newItemRef = push(itemsRef)

    set(newItemRef, {
      title: title
    })

    setTitle('')
  }

  const editData = (item) => {
    setTitle(item.title)
    setEditId(item.id)
  }

  const updateData = () => {
    const itemRef = ref(database, `notes/${editId}`)
    update(itemRef, {
      title: title
    })

    setTitle('')
    setEditId(null)
  }

  const deleteData = (id) => {
    const itemRef = ref(database, `notes/${id}`)
    remove(itemRef)
  }

  return (
    <div>
      <h2>Task 2 - Firebase Auth and CRUD</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginLeft: '10px' }}
      />

      <div style={{ marginTop: '10px' }}>
        <button onClick={registerUser}>Register</button>
        <button onClick={loginUser} style={{ marginLeft: '8px' }}>Login</button>
        <button onClick={googleLogin} style={{ marginLeft: '8px' }}>Google Login</button>
        <button onClick={logoutUser} style={{ marginLeft: '8px' }}>Logout</button>
      </div>

      <h3 style={{ marginTop: '20px' }}>
        {user ? `Welcome ${user.email}` : 'Please login'}
      </h3>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {editId === null ? (
          <button onClick={addData} style={{ marginLeft: '10px' }}>Add</button>
        ) : (
          <button onClick={updateData} style={{ marginLeft: '10px' }}>Update</button>
        )}
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => editData(item)} style={{ marginLeft: '8px' }}>
              Edit
            </button>
            <button onClick={() => deleteData(item.id)} style={{ marginLeft: '8px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FirebaseAuthCrud