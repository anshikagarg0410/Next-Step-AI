import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './index.css'

function NavBar() {
  useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>('button.signout')
    if (!button) return
    const onClick = () => {
      const confirmSignOut = window.confirm('Are you sure you want to sign out?')
      if (!confirmSignOut) return
      localStorage.removeItem('userToken')
      localStorage.removeItem('userData')
      localStorage.removeItem('userPreferences')
      sessionStorage.clear()
      alert('You have signed out successfully!')
    }
    button.addEventListener('click', onClick)
    return () => button.removeEventListener('click', onClick)
  }, [])
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src="/img_2_logo.PNG" alt="Logo" /></Link>
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

function Home() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLDivElement>('.card'))
    const onScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
          card.style.transition = 'all 0.6s ease'
        }
      })
    }
    let timeoutId: number | undefined
    const throttled = () => {
      if (timeoutId) window.clearTimeout(timeoutId)
      timeoutId = window.setTimeout(onScroll, 10)
    }
    window.addEventListener('scroll', throttled)
    onScroll()
    return () => {
      window.removeEventListener('scroll', throttled)
    }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            YOUR AI<br /> CAREER MENTOR
          </h1>
          <p>
            Discover the right career path, learn the skills you need, and unlock real opportunities — all guided by AI.
          </p>
          <Link to="/profile" className="btn">Get started</Link>
        </div>
        <FloatingHeroImage />
      </section>

      <section className="cards" id="cards-section">
        {[1,2,3,4].map((n) => (
          <div className="card" key={n}>
            <div className="number">{n}</div>
            <h3>{[
              'Discover Your Path',
              'Get Your Roadmap',
              'Build Skills',
              'Unlock Opportunities'
            ][n-1]}</h3>
            <p>{[
              'Let AI uncover your strengths and passions, then match them to the career that fits you best.',
              'Receive a clear, personalized step-by-step plan designed to guide your learning journey.',
              'Gain in-demand skills through curated courses, hands-on projects, and verified certifications.',
              'Turn your skills into success by connecting with tailored internships, hackathons, and job openings.'
            ][n-1]}</p>
          </div>
        ))}
      </section>
    </>
  )
}

function FloatingHeroImage() {
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const element = imgRef.current
    if (!element) return
    let positionY = 0
    let direction = 1
    let rafId = 0

    const animate = () => {
      positionY += 0.8 * direction
      if (positionY > 30 || positionY < -30) direction *= -1
      element.style.transform = `translateY(${positionY}px)`
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <img ref={imgRef} src="/img_1_astro.PNG" alt="AI Mentor Image" className="hero-img" />
  )
}

function Placeholder({ title }: { title: string }) {
  return (
    <div style={{ padding: 24 }}>
      <h2>{title}</h2>
      <p>Content coming soon.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function ProfilePage() { return <Placeholder title="Profile" /> }
function DashboardPage() { return <Placeholder title="Dashboard" /> }
function SkillsPage() { return <Placeholder title="Skills" /> }
function InternshipsPage() { return <Placeholder title="Internships" /> }
