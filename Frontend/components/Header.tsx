import {Link } from 'react-router-dom'
import  { toggleTheme }  from '../features/theme/themeSlice'
import { useDispatch } from 'react-redux'

export const Header = () => {
const dispatch = useDispatch();

return (
     <header>
     <h1>Travel App </h1>
     <nav>
       <Link to="/">Home</Link>
       <Link to="/packages">Packages</Link>
       <Link to="/login">Login</Link>
     </nav>
     <button onClick={() => dispatch(toggleTheme())}>🌙</button>
     </header>
)}