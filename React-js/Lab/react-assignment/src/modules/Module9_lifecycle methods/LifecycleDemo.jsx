import React, { Component } from 'react'

class LifecycleDemo extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  componentDidUpdate() {
    console.log('Component updated')
  }

  componentWillUnmount() {
    console.log('Component unmounted')
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h3>Module 9 - Task 2: Update and Unmount</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    )
  }
}

export default LifecycleDemo