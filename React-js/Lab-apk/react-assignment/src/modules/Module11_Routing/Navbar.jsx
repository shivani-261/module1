import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h2>Navigation Bar</h2>

      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
      <Link to="/contact">Contact</Link>

      <hr />
    </div>
  )
}

export default Navbar