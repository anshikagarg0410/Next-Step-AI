export function Home() {
  return (
    <>
      <section className="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '80px 50px', backgroundColor: '#6910A8', color: 'white' }}>
        <div className="hero-text" style={{ maxWidth: '50%' }}>
          <h1 style={{ fontFamily: 'Kranky, cursive, serif', fontSize: 60, marginBottom: 20 }}>YOUR AI<br/> CAREER MENTOR</h1>
          <p style={{ fontSize: 20, marginBottom: 30, color: '#E0E0E0' }}>Discover the right career path, learn the skills you need, and unlock real opportunities — all guided by AI.</p>
          <a href="#cards-section" className="btn" style={{ textDecoration: 'none', backgroundColor: 'white', color: '#6910A8', padding: '12px 30px', borderRadius: 25, fontWeight: 'bold' }}>Get started</a>
        </div>
        <img src="/img_1_astro.PNG" alt="AI Mentor" className="hero-img" style={{ height: 400, width: 400 }} />
      </section>

      <section className="cards" id="cards-section" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '50px 50px', backgroundColor: '#6910A8' }}>
        {[{n:1,t:'Discover Your Path',d:'Let AI uncover your strengths and passions, then match them to the career that fits you best.'},{n:2,t:'Get Your Roadmap',d:'Receive a clear, personalized step-by-step plan designed to guide your learning journey.'},{n:3,t:'Build Skills',d:'Gain in-demand skills through curated courses, hands-on projects, and verified certifications.'},{n:4,t:'Unlock Opportunities',d:'Turn your skills into success by connecting with tailored internships, hackathons, and job openings.'}].map(card => (
          <div key={card.n} className="card" style={{ backgroundColor:'#CAB0DD', width:'15%', minWidth:240, margin:10, borderRadius:20, padding:'30px 20px', textAlign:'center', color:'#6910A8' }}>
            <div className="number" style={{ width:50, height:50, backgroundColor:'#B333E9', color:'#E0E0E0', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', fontSize:20, margin:'0 auto 20px' }}>{card.n}</div>
            <h3 style={{ marginBottom:15 }}>{card.t}</h3>
            <p style={{ fontSize:14 }}>{card.d}</p>
          </div>
        ))}
      </section>
    </>
  )
}

