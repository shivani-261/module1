import React, { Component } from 'react'

class FetchUsers extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          loading: false
        })
      })
      .catch((error) => {
        console.log('Error:', error)
        this.setState({ loading: false })
      })
  }

  render() {
    return (
      <div>
        <h3>Module 9 - Task 1: Fetch API Data</h3>

        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {this.state.users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default FetchUsers