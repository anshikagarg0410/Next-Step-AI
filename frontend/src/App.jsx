import { Outlet, Link, useNavigate, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()
  function onSignOut() {
    if (confirm('Are you sure you want to sign out?')) {
      try {
        localStorage.removeItem('userToken')
        localStorage.removeItem('userData')
        localStorage.removeItem('userPreferences')
        sessionStorage.clear()
      } catch {}
      alert('You have signed out successfully!')
      navigate('/')
    }
  }
  return (
    <div>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 50px', backgroundColor: '#DCD9E9' }}>
        <div className="logo">
          <Link to="/"><img src="/img_2_logo.PNG" alt="Logo" style={{ height: 30 }} /></Link>
        </div>
        <div className="links" style={{ display: 'flex', gap: 20 }}>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/internships">Internships</NavLink>
        </div>
        <button className="signout" onClick={onSignOut}>Sign Out</button>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
