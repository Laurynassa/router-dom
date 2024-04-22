import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import Gallery from './Components/Gallery'
import Home from './Components/Home'
import Root from './Components/Root'
// import About from './Components/About'
// import DedeJonas from './Components/DedeJonas'
// import Sokiai from './Components/Sokiai'
// import TetaZita from './Components/TetaZita'

// import Users from './Components/Users'
import { dataLoader } from './services/fetchimg'

const users = [
  { id: 1, name: 'Jonas' },
  { id: 2, name: 'Petras' },
  { id: 3, name: 'teta' },
]

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route
          path="/gallery"
          element={<Gallery />}
          loader={dataLoader()}
        ></Route>
      </Route>,
    ),
  )
  console.log(dataLoader())
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    /* <div class="links">
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
      </div> */
    /* <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/teta" element={<TetaZita />} />
        <Route path="/dede" element={<DedeJonas />} />
        <Route path="/users/:id" element={<Users users={users} />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
        <Route path="/dance" component={<Sokiai />} /> */
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
