import React from 'react'
import { useParams } from 'react-router-dom'

const Users = ({ users }) => {
  const params = useParams()
  console.log(params)
  const { id } = useParams()
  console.log(id)

  const findUser = users.find((user) => user.id === parseInt(id))
  console.log(findUser)

  return (
    <div>
      Hello user {findUser.name}, your id is : {id}{' '}
    </div>
  )
}

export default Users
