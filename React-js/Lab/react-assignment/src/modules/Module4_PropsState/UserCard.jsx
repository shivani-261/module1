function UserCard(props) {
  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  )
}

export default UserCard
