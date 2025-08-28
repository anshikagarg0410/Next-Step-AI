
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  background-color: #DCD9E9;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }
`

const Logo = styled.div`
  img {
    height: 30px;
  }
`

const Links = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const NavLink = styled(Link)`
  color: #6910A8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #4b0b74;
  }

  &.active {
    color: #6a0dad;
    font-weight: bold;
  }
`

const SignOutButton = styled.button`
  background-color: white;
  color: #6910A8;
  border: none;
  padding: 8px 20px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(106,13,173,0.7);
    transform: scale(1.05);
  }
`

const Navigation = () => {
  const location = useLocation()

  const handleSignOut = () => {
    const confirmSignOut = window.confirm('Are you sure you want to sign out?')
    
    if (confirmSignOut) {
      localStorage.removeItem('userToken')
      localStorage.removeItem('userData')
      localStorage.removeItem('userPreferences')
      sessionStorage.clear()
      
      alert('You have signed out successfully!')
      console.log('User successfully signed out')
    }
  }

  return (
    <NavBar>
      <Logo>
        <Link to="/">
          <img src="/img_2_logo.PNG" alt="Logo" />
        </Link>
      </Logo>
      <Links>
        <NavLink 
          to="/profile" 
          className={location.pathname === '/profile' ? 'active' : ''}
        >
          Profile
        </NavLink>
        <NavLink 
          to="/dashboard" 
          className={location.pathname === '/dashboard' ? 'active' : ''}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/skills" 
          className={location.pathname === '/skills' ? 'active' : ''}
        >
          Skills
        </NavLink>
        <NavLink 
          to="/internships" 
          className={location.pathname === '/internships' ? 'active' : ''}
        >
          Internships
        </NavLink>
      </Links>
      <SignOutButton onClick={handleSignOut}>
        Sign Out
      </SignOutButton>
    </NavBar>
  )
}

export default Navigation