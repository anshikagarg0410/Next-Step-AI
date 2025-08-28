import '../styles/home.css'
import heroImg from '/assets/img_1_astro.PNG'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    // Floating hero image animation
    const img = document.querySelector('.hero-img')
    let pos = 0
    let dir = 1
    function floatHero() {
      pos += 0.8 * dir
      if (pos > 30 || pos < -30) dir *= -1
      if (img) img.style.transform = `translateY(${pos}px)`
      requestAnimationFrame(floatHero)
    }
    floatHero()

    // Fade in cards on scroll
    const cards = document.querySelectorAll('.card')
    const fadeIn = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          card.style.opacity = 1
          card.style.transform = 'translateY(0)'
          card.style.transition = 'all 0.6s ease'
        }
      })
    }
    let scrollTimeout
    const onScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(fadeIn, 10)
    }
    window.addEventListener('scroll', onScroll)
    fadeIn()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>YOUR AI<br /> CAREER MENTOR</h1>
          <p>
            Discover the right career path, learn the skills you need, and unlock real opportunities — all guided by AI.
          </p>
          <button className="btn" onClick={() => navigate('/profile')}>Get started</button>
        </div>
        <img src={heroImg} alt="AI Mentor" className="hero-img" />
      </section>

      <section className="cards" id="cards-section">
        {[
          { num: 1, title: 'Discover Your Path', text: 'Let AI uncover your strengths and passions, then match them to the career that fits you best.' },
          { num: 2, title: 'Get Your Roadmap', text: 'Receive a clear, personalized step-by-step plan designed to guide your learning journey.' },
          { num: 3, title: 'Build Skills', text: 'Gain in-demand skills through curated courses, hands-on projects, and verified certifications.' },
          { num: 4, title: 'Unlock Opportunities', text: 'Turn your skills into success by connecting with tailored internships, hackathons, and job openings.' },
        ].map(card => (
          <div className="card" key={card.num}>
            <div className="number">{card.num}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </section>
    </>
  )
}