import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/gallery'}>Gallery</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Root
