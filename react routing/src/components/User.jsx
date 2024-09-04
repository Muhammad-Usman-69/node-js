import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const params = useParams();
  return (
    <p className='text-white p-4'>
      Hi, I am {params.username}. Meri aik tang nakli ha. Me hockey ka boht bara fan hun.
    </p>
  )
}

export default User
