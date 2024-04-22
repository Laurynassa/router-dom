import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'

const Gallery = (useLoaderData) => {
  const fetchinResult = useLoaderData()

  const navigate = useNavigation()
  return (
    <div>
      Gallery
      {navigate.state === 'loading' ? (
        <h1>Loading</h1>
      ) : (
        <img
          src={fetchinResult}
          alt="doggy"
          style={{ height: '250px', widht: '250px', objectFit: 'cover' }}
        />
      )}
    </div>
  )
}

export default Gallery
