import { useState } from 'react'

export function Strengths() {
  const list = ['Time Management','Tech Savviness','Problem Solving','Active Listening','Empathy','Creativity','Leadership','Multitasking','Organization','Communication','Adaptability','Research & Analysis']
  const [selected, setSelected] = useState(new Set())

  function toggle(item) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(item) ? next.delete(item) : next.add(item)
      return next
    })
  }

  function prev() { window.location.href = '/interests' }
  function next() {
    if (selected.size === 0) { alert('Please select at least one strength before proceeding!'); return }
    console.log('Selected Strengths:', Array.from(selected))
    window.location.href = '/personality'
  }

  return (
    <div style={{ background:'#6a0dad', color:'white', minHeight:'100vh' }}>
      <div className="hero" style={{ textAlign:'center', padding:'60px 20px' }}>
        <h1>What’s Your Superpower?</h1>
        <p>Let AI guide your career—just tell us a bit about you.</p>
        <div className="progress-wrapper" style={{ width:'60%', margin:'20px auto' }}>
          <div className="progress-text" style={{ display:'flex', justifyContent:'space-between' }}>
            <span>Step 3 of 4</span>
            <span>75% Complete</span>
          </div>
          <div className="progress-bar" style={{ background:'#eee', borderRadius:20, height:20 }}>
            <div className="progress-fill" style={{ width:'75%', height:'100%', background:'#d299ff' }} />
          </div>
        </div>
      </div>

      <div className="quote" style={{ textAlign:'center', fontSize:16, fontWeight:'bold' }}>&quot;GROW THROUGH WHAT YOU GO THROUGH&quot;</div>

      <div className="strengths" style={{ background:'#f4ecf8', borderRadius:12, width:'80%', margin:'20px auto', padding:20, color:'black' }}>
        <h2 style={{ fontSize:22, display:'flex', alignItems:'center' }}>⚙️ Your Strengths</h2>
        <p style={{ marginLeft:30 }}>What do you believe is your secret ingredient to success?</p>
        <div className="strength-options" style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }}>
          {list.map(item => (
            <label key={item} style={{ display:'flex', alignItems:'center', gap:6, background:'white', borderRadius:8, border:'1px solid ' + (selected.has(item) ? '#6a0dad' : '#ccc'), padding:'8px 12px', fontSize:14, cursor:'pointer' }}>
              <input type="checkbox" checked={selected.has(item)} onChange={() => toggle(item)} style={{ transform:'scale(1.2)' }} />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="nav-buttons" style={{ margin:'30px auto', width:'80%', display:'flex', justifyContent:'space-between' }}>
        <button onClick={prev} className="btn-nav" style={{ background:'#e5d4ff', color:'#333', padding:'12px 25px', border:'none', borderRadius:25, fontSize:16, fontWeight:'bold', cursor:'pointer' }}>&larr; Previous</button>
        <button onClick={next} className="btn-nav" style={{ background:'#e5d4ff', color:'#333', padding:'12px 25px', border:'none', borderRadius:25, fontSize:16, fontWeight:'bold', cursor:'pointer' }}>Next &rarr;</button>
      </div>
    </div>
  )
}

