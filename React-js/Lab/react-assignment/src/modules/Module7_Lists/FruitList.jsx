import React from 'react'

function FruitList() {
     const fruits = ['Apple', 'Banana', 'Mango', 'Orange']
  return (
    <div>
      <h3>Fruit List</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default FruitList
