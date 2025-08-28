import { Link, NavLink } from 'react-router-dom'
import '../styles/home.css'
import logo from '/assets/img_2_logo.PNG'

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/internships">Internships</NavLink>
      </div>
      <button className="signout">Sign Out</button>
    </nav>
  )
}