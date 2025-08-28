import { useState } from 'react'

export function Profile() {
  const [form, setForm] = useState({ name: '', email: '', age: '', qualification: '', experience: '' })

  function onChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!form.qualification) {
      alert('Please select your qualification!')
      return
    }
    if (!form.name || !form.email || !form.age) {
      alert('Please fill in all required fields!')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address!')
      return
    }
    const age = parseInt(form.age)
    if (age < 16 || age > 100) {
      alert('Please enter a valid age between 16 and 100!')
      return
    }
    console.log('Student Form Data:', form)
    window.location.href = '/interests'
  }

  return (
    <>
      <div className="intro-section" style={{ textAlign:'center', padding:'30px 20px 10px', color:'white', background:'#6910A8' }}>
        <h1 style={{ marginTop: 40 }}>Let’s Get To Know You</h1>
        <p style={{ fontSize: 18 }}>Let AI guide your career—just tell us a bit about you.</p>
        <div className="progress-wrapper" style={{ width:'60%', margin:'20px auto' }}>
          <div className="progress-text" style={{ display:'flex', justifyContent:'space-between', color:'white' }}>
            <span className="progress-step">Step 1 of 4</span>
            <span className="progress-percent">25% Complete</span>
          </div>
          <div className="progress-bar" style={{ background:'#eee', borderRadius:20, height:20, overflow:'hidden' }}>
            <div className="progress-fill" style={{ width:'25%', height:'100%', background:'#d299ff' }} />
          </div>
        </div>
      </div>

      <main className="container" style={{ maxWidth:800, margin:'20px auto', padding:20, background:'#f4ecf8', borderRadius:15 }}>
        <div className="student-info">
          <h2 style={{ color:'#6a0dad' }}><span style={{ marginRight:8 }}>👤</span>Student Info</h2>
          <form onSubmit={onSubmit} id="studentForm" style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:20 }}>
            <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Enter your full name" required style={{ padding:'12px 15px', borderRadius:8, border:'none', width:'45%' }} />
            <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Type your email" required style={{ padding:'12px 15px', borderRadius:8, border:'none', width:'45%' }} />
            <input name="age" value={form.age} onChange={onChange} type="number" placeholder="Enter your age" required style={{ padding:'12px 15px', borderRadius:8, border:'none', width:'45%' }} />
            <select name="qualification" value={form.qualification} onChange={onChange} required style={{ padding:'12px 15px', borderRadius:8, border:'none', width:'45%' }}>
              <option value="" disabled hidden>Select your qualification</option>
              <option value="highschool">High School</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
            </select>
            <textarea name="experience" value={form.experience} onChange={onChange} placeholder="Describe any work experience, internships or relevant projects (optional)" style={{ resize:'none', width:'93%', height:100, padding:'12px 15px', borderRadius:8, border:'none' }} />
          </form>
        </div>
      </main>

      <div className="button-wrapper" style={{ maxWidth:800, margin:'10px auto 40px', textAlign:'right' }}>
        <button className="next-btn" type="submit" form="studentForm" style={{ background:'#e5d4ff', color:'#333', padding:'12px 25px', border:'none', borderRadius:25, fontSize:16, fontWeight:'bold', cursor:'pointer' }}>Next →</button>
      </div>
    </>
  )
}

