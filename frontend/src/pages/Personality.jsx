import { useMemo, useState } from 'react'

const GOALS = [
  { key: 'Leader', text: 'The Leader', desc: 'Goal: Lead a team or project' },
  { key: 'Explorer', text: 'The Explorer', desc: 'Goal: Try new skills and paths' },
  { key: 'Thinker', text: 'The Thinker', desc: 'Goal: Solve real-world problems' },
  { key: 'Helper', text: 'The Helper', desc: 'Goal: Make a difference for others' },
  { key: 'Speaker', text: 'The Speaker', desc: 'Goal: Inspire through communication' },
  { key: 'Organizer', text: 'The Organizer', desc: 'Goal: Plan and manage events' },
  { key: 'Innovator', text: 'The Innovator', desc: 'Goal: Build something impactful' },
  { key: 'Dreamer', text: 'The Dreamer', desc: 'Goal: Express through art or writing' },
]

export function Personality() {
  const [selected, setSelected] = useState(new Set())
  const count = selected.size
  const canSubmit = count > 0

  function toggle(key) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  function prev() { window.location.href = '/strengths' }
  function submit() {
    if (!canSubmit) return
    const goals = Array.from(selected)
    console.log('Complete Form Data:', { goals, timestamp: new Date().toISOString() })
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(106,13,173,0.9);display:flex;align-items:center;justify-content:center;z-index:10000;'
    overlay.innerHTML = `
      <div style="background:white;padding:40px;border-radius:20px;text-align:center;max-width:400px;">
        <div style="font-size:60px;color:#27ae60;margin-bottom:20px">✓</div>
        <h2 style="color:#6a0dad;margin:10px 0">Thank You!</h2>
        <p>Your profile has been created successfully!</p>
        <p style="font-size:14px;color:#666;margin-top:15px;">${goals.length} goal${goals.length === 1 ? '' : 's'} selected<br/>Redirecting to your dashboard...</p>
      </div>
    `
    document.body.appendChild(overlay)
    setTimeout(() => { window.location.href = '/dashboard' }, 2000)
  }

  const submitStyle = useMemo(() => ({
    backgroundColor: canSubmit ? '#6a0dad' : '#ccc',
    opacity: canSubmit ? 1 : 0.6,
    cursor: canSubmit ? 'pointer' : 'not-allowed',
  }), [canSubmit])

  return (
    <div style={{ background:'#6a0dad', color:'white', minHeight:'100vh', paddingBottom:50 }}>
      <div className="container" style={{ textAlign:'center', padding:'60px 20px' }}>
        <h1>Me, Myself & My Mission</h1>
        <p>Let AI guide your career—just tell us a bit about you.</p>
        <div className="progress-wrapper" style={{ width:'70%', margin:'20px auto' }}>
          <div className="progress-text" style={{ display:'flex', justifyContent:'space-between' }}>
            <span><strong>Step 4 of 4</strong></span>
            <span><em>100% Complete</em></span>
          </div>
          <div className="progress-bar" style={{ background:'#f3ebf7', borderRadius:20, height:20 }}>
            <div className="progress-fill" style={{ width:'100%', height:'100%', background:'#d299ff' }} />
          </div>
        </div>
        <p className="quote" style={{ fontStyle:'italic', fontSize:18, margin:'10px 0 30px', color:'#ffd6ff' }}>
          "Personality shapes who you are, Goals shape who you become"
        </p>

        <div className="grid-container" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:20, maxWidth:800, margin:'0 auto', background:'white', color:'#333', borderRadius:20, padding:30, textAlign:'left' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20, gridColumn:'1 / -1' }}>
            <img src="https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-personality-line-icon-vector-png-image_6703050.png" width="50" height="50" />
            <div>
              <h3 style={{ margin:0, fontSize:20, color:'#6a0dad' }}>Personality and goals</h3>
              <p style={{ margin:'2px 0 0', fontSize:14, color:'#555' }}>Add the Final Touches to Make It All You!</p>
            </div>
          </div>

          {GOALS.map(g => (
            <label key={g.key} className="goal-box" style={{ border:'2px solid ' + (selected.has(g.key) ? '#6a0dad' : '#ccc'), borderRadius:10, padding:20, cursor:'pointer' }}>
              <div style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                <input type="checkbox" checked={selected.has(g.key)} onChange={() => toggle(g.key)} style={{ transform:'scale(1.2)' }} />
                <div>
                  <div className="goal-title" style={{ fontWeight:'bold', marginBottom:5, color:'#6a0dad' }}>{g.text}</div>
                  {g.desc}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="nav-buttons" style={{ margin:'30px auto', width:'80%', maxWidth:800, display:'flex', justifyContent:'space-between' }}>
        <button onClick={prev} className="btn-nav" style={{ background:'#e5d4ff', color:'#333', padding:'12px 25px', border:'none', borderRadius:25, fontSize:16, fontWeight:'bold', cursor:'pointer' }}>&larr; Previous</button>
        <button onClick={submit} className="btn-nav" style={{ background:'#e5d4ff', color:'#333', padding:'12px 25px', border:'none', borderRadius:25, fontSize:16, fontWeight:'bold', ...submitStyle }}>Submit &rarr;</button>
      </div>
    </div>
  )
}

