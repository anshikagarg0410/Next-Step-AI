import { useState } from 'react'

export function Interests() {
  const [other, setOther] = useState('')
  const [selected, setSelected] = useState(new Set())
  const options = [
    'AI & Data Science','Law & Legal Studies','Design & Creativity','Science & Research','Healthcare & Medicine','Arts & Entertainment','Content Creation','Sports & Fitness','Gaming','Writing & Journalism','Travel & Tourism','Marketing & Advertising'
  ]

  function toggle(opt) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(opt) ? next.delete(opt) : next.add(opt)
      return next
    })
  }

  function goPrev() {
    window.location.href = '/profile'
  }
  function goNext() {
    const interests = Array.from(selected)
    if (other.trim()) interests.push(other.trim())
    if (interests.length === 0) {
      alert('Please select at least one interest before proceeding!')
      return
    }
    console.log('Selected Interests:', interests)
    window.location.href = '/strengths'
  }

  return (
    <div style={{ background:'#6a0dad', color:'white', minHeight:'100vh', paddingBottom:40 }}>
      <div className="container" style={{ textAlign:'center', padding:'40px 20px' }}>
        <h1>Find Your Spark</h1>
        <p className="subtext" style={{ fontSize:18 }}>Let AI guide your career—just tell us a bit about you.</p>
        <div className="progress-wrapper" style={{ width:'60%', margin:'20px auto' }}>
          <div className="progress-text" style={{ display:'flex', justifyContent:'space-between' }}>
            <span>Step 2 of 4</span>
            <span>50% Complete</span>
          </div>
          <div className="progress-bar" style={{ background:'#eee', borderRadius:20, height:20 }}>
            <div className="progress-fill" style={{ width:'50%', height:'100%', background:'#d299ff' }} />
          </div>
        </div>
        <p style={{ marginTop:20 }}>tell us what excites you -- pick all the fields that inspire your future</p>

        <div className="interest-box" style={{ background:'#f4ecf8', color:'#333', borderRadius:20, padding:30, maxWidth:900, margin:'30px auto', textAlign:'left' }}>
          <div className="interest-header" style={{ display:'flex', alignItems:'center', gap:15, marginBottom:20 }}>
            <img src="https://static.thenounproject.com/png/3654360-200.png" width={36} height={36} />
            <div>
              <h2 style={{ margin:0, fontSize:22, color:'#6a0dad' }}>Your Interests</h2>
              <p style={{ margin:0, fontSize:14, color:'#555' }}>What fields excite you most? (Select all that apply)</p>
            </div>
          </div>
          <div className="grid-container" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:15 }}>
            {options.map(opt => (
              <label key={opt} className="interest-option" style={{ display:'flex', alignItems:'flex-start', gap:10, background:'white', border:'2px solid ' + (selected.has(opt) ? '#6a0dad' : '#ccc'), borderRadius:10, padding:'12px 15px', cursor:'pointer' }}>
                <input type="checkbox" checked={selected.has(opt)} onChange={() => toggle(opt)} style={{ marginTop:3 }} />
                {opt}
              </label>
            ))}
          </div>
          <div className="other-field" style={{ marginTop:20, fontSize:16 }}>
            Other: <input value={other} onChange={e=>setOther(e.target.value)} type="text" placeholder="Your interest" style={{ marginLeft:10, padding:8, borderRadius:8, border:'1px solid #ccc' }} />
          </div>
        </div>

        <div className="nav-buttons" style={{ display:'flex', justifyContent:'space-between', margin:'40px auto', maxWidth:900 }}>
          <button onClick={goPrev} style={{ background:'#e5d4ff', color:'#333', padding:'12px 25px', border:'none', borderRadius:25, fontSize:16, fontWeight:'bold', cursor:'pointer' }}>&larr; Previous</button>
          <button onClick={goNext} style={{ background:'#e5d4ff', color:'#333', padding:'12px 25px', border:'none', borderRadius:25, fontSize:16, fontWeight:'bold', cursor:'pointer' }}>Next &rarr;</button>
        </div>
      </div>
    </div>
  )
}

