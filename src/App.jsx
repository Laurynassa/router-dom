import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import DedeJonas from './Components/DedeJonas'
import Home from './Components/Home'
import Sokiai from './Components/Sokiai'
import TetaZita from './Components/TetaZita'
import Tralivali from './Components/Tralivali'
import Users from './Components/Users'

const users = [
  { id: 1, name: 'Jonas' },
  { id: 2, name: 'Petras' },
  { id: 3, name: 'teta' },
]
function App() {
  return (
    <BrowserRouter>
      <div class="links">
        <Link to="/">Home </Link>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
        <NavLink
          to="/teta"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Teta
        </NavLink>
        <NavLink
          to="/dede"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Dede
        </NavLink>
        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/teta" element={<TetaZita />} />
        <Route path="/dede" element={<DedeJonas />} />
        <Route path="/users/:id" element={<Users users={users} />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
        <Route path="/dance" component={<Sokiai />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
