import { useEffect } from 'react'

function Progress({ value }) {
  useEffect(() => {
    const el = document.querySelector('.overall-progress')
    if (el) el.style.setProperty('--progress', value + '%')
  }, [value])
  return (
    <div className="progress">
      <div className="progress-header" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:4 }}>
        <span>Progress</span>
        <span className="progress-text">{value}% Complete</span>
      </div>
      <div className="progress-bar small" style={{ height:8, borderRadius:10, background:'#ddd', overflow:'hidden', width:'100%' }}>
        <div className="progress-fill overall-progress" style={{ height:'100%', background:'#6a0dad', width:`${value}%` }} />
      </div>
    </div>
  )
}

function CourseCard({ title, badge, meta, price, initialProgress = null }) {
  function onAction(e) {
    const button = e.currentTarget
    if (badge === 'Completed') {
      alert(`Opening review for: ${title}`)
    } else if (badge === 'In Progress') {
      alert(`Continuing: ${title}`)
    } else {
      if (confirm(`Start learning: ${title}?`)) {
        alert('Course started!')
      }
    }
  }

  return (
    <div className="course-card" style={{ border:'1px solid #ccc', borderRadius:8, padding:16, margin:'16px auto', background:'#fff', display:'flex', justifyContent:'space-between', alignItems:'flex-start', width:'85%' }}>
      <div className="course-info" style={{ flex:1 }}>
        <h3 style={{ margin:0, color:'#6a0dad', fontSize:18 }}>{title} {badge && <span className={`badge ${badge==='Completed'?'completed':badge==='In Progress'?'inprogress':'notstarted'}`} style={{ display:'inline-block', padding:'3px 10px', borderRadius:12, fontSize:12, fontWeight:600, color:'white', marginLeft:8, background: badge==='Completed' ? '#27ae60' : badge==='In Progress' ? '#00bcd4' : '#e67e22' }}>{badge}</span>}</h3>
        <div className="meta" style={{ display:'flex', gap:20, fontSize:14, margin:'8px 0', color:'#555' }}>{meta}</div>
        {initialProgress !== null && <Progress value={initialProgress} />}
      </div>
      <div className="course-actions" style={{ textAlign:'right', minWidth:90 }}>
        <div className="price" style={{ fontWeight:'bold', fontSize:18, color:'#6a0dad' }}>{price}</div>
        <button className="btn-action" onClick={onAction} style={{ marginTop:8, background:'#eee', border:'none', padding:'6px 14px', borderRadius:12, cursor:'pointer', fontSize:14 }}>✦ {badge==='Completed'?'Review':badge==='In Progress'?'Continue':'Start'}</button>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <div>
      <section className="hero" style={{ background:'#6a0dad', color:'white', textAlign:'center', padding:'60px 20px' }}>
        <h1>Your Skill-Building Roadmap</h1>
        <p>Learning path designed specifically for your career goals</p>
      </section>

      <div className="card" style={{ background:'#f3ebf7', borderRadius:10, margin:'20px auto', padding:20, width:'85%' }}>
        <h2 style={{ marginTop:0, color:'#6a0dad' }}>🎓 Data Science Career Path</h2>
        <p>Master the skills needed to become a successful data scientist</p>
        <p>📖 12 Courses &nbsp;&nbsp;&nbsp; 🕒 8-12 months &nbsp;&nbsp;&nbsp; 📈 Intermediate to Advanced</p>
        <Progress value={15} />
      </div>

      <div className="section-header" style={{ display:'flex', alignItems:'center', background:'#ede2f7', padding:'16px 20px', borderRadius:'8px 8px 0 0', width:'85%', margin:'30px auto 0' }}>
        <div className="section-number" style={{ background:'#6a0dad', color:'#fff', borderRadius:'50%', width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', marginRight:12 }}>1</div>
        <div>
          <h2>Foundation</h2>
          <div className="section-subtitle" style={{ fontSize:14, color:'#555' }}>Build mathematical and programming fundamentals</div>
        </div>
      </div>

      <CourseCard title="Python for Data Science" badge="Completed" meta={<><div>★ 4.8</div><div>1,25,000 enrolled</div><div>Beginner</div></>} price="Free" initialProgress={100} />
      <CourseCard title="Statistics Fundamentals" badge="In Progress" meta={<><div>★ 4.7</div><div>89,000 enrolled</div><div>Beginner</div></>} price="Free" initialProgress={65} />
      <CourseCard title="SQL for Data Analysis" badge="Not Started" meta={<><div>★ 4.6</div><div>1,67,000 enrolled</div><div>Beginner</div></>} price="$39" />

      <div className="section-header" style={{ display:'flex', alignItems:'center', background:'#ede2f7', padding:'16px 20px', borderRadius:'8px 8px 0 0', width:'85%', margin:'30px auto 0' }}>
        <div className="section-number" style={{ background:'#6a0dad', color:'#fff', borderRadius:'50%', width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', marginRight:12 }}>2</div>
        <div>
          <h2>Core Skills</h2>
          <div className="section-subtitle" style={{ fontSize:14, color:'#555' }}>Learn machine learning and data visualization</div>
        </div>
      </div>

      <CourseCard title="Machine Learning with Scikit-Learn" badge="Not Started" meta={<><div>★ 4.9</div><div>45,000 enrolled</div><div>Intermediate</div></>} price="$79" />
      <CourseCard title="Data Visualization with Matplotlib & Seaborn" badge="Not Started" meta={<><div>★ 4.5</div><div>32,000 enrolled</div><div>Intermediate</div></>} price="$49" />

      <div className="section-header" style={{ display:'flex', alignItems:'center', background:'#ede2f7', padding:'16px 20px', borderRadius:'8px 8px 0 0', width:'85%', margin:'30px auto 0' }}>
        <div className="section-number" style={{ background:'#6a0dad', color:'#fff', borderRadius:'50%', width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', marginRight:12 }}>3</div>
        <div>
          <h2>Advanced</h2>
          <div className="section-subtitle" style={{ fontSize:14, color:'#555' }}>Deep learning and specialized techniques</div>
        </div>
      </div>

      <CourseCard title="Deep Learning Specialization" badge="Not Started" meta={<><div>★ 4.8</div><div>28,000 enrolled</div><div>Advanced</div></>} price="$139" />
    </div>
  )
}

