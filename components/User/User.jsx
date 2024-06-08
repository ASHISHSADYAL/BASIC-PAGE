import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {UserId}= useParams()
  return (
    <div className='bg-blue-400 text-2xl p-4 flex justify-center'> User:{UserId}</div>
  )
}

export default User