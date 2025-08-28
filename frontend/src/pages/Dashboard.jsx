import { useEffect, useState } from 'react'

export function Dashboard() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const t1 = setTimeout(() => {
      document.querySelectorAll('.progress-fill, .skill-fill, .level-fill').forEach(bar => {
        const width = bar.getAttribute('data-width')
        if (width) bar.style.width = width
      })
    }, 300)
    return () => { clearTimeout(t1) }
  }, [active])

  return (
    <div style={{ fontFamily:'Instrument Sans, sans-serif' }}>
      <div className="main-header" style={{ textAlign:'center', padding:'40px 20px' }}>
        <h1>Your Personalized Career Dashboard</h1>
        <p>Based on your assessment, here are AI-powered recommendations to guide your career journey.</p>
      </div>

      <div className="dashboard-grid" style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:20, padding:'0 40px 40px', maxWidth:1400, margin:'0 auto' }}>
        <div className="card career-matches" style={{ background:'#f3ebf7', borderRadius:12, padding:20, color:'#333' }}>
          <h3>📊 Top Career Matches</h3>
          <p className="subtitle" style={{ fontSize:14, color:'#666', marginBottom:20 }}>Careers perfectly aligned with your strengths and interests</p>

          {[{t:'Software Engineer',d:'Build applications and solve complex problems',tags:['Programming','Problem Solving','Logic'],match:'95%',growth:'+22%'},{t:'UX Designer',d:'Create intuitive user experiences',tags:['Design Thinking','Empathy','Creativity'],match:'88%',growth:'+11%'},{t:'Data Scientist',d:'Extract insights from complex data',tags:['Analytics','Statistics','Programming'],match:'82%',growth:'+26%'}].map((j,i)=> (
            <div key={i} className="job-item" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px 0', borderBottom:'1px solid #f0f0f0' }}>
              <div className="job-info">
                <h4 style={{ margin:0 }}>{j.t}</h4>
                <p style={{ margin:'4px 0', color:'#666' }}>{j.d}</p>
                <div className="job-tags" style={{ display:'flex', gap:8, flexWrap:'wrap' }}>{j.tags.map(tag => <span key={tag} className="tag" style={{ background:'white', color:'#6a0dad', padding:'4px 8px', borderRadius:4, fontSize:12 }}>{tag}</span>)}</div>
              </div>
              <div className="match-percentage" style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                <span className="match-badge" style={{ background:'#10b981', color:'white', padding:'4px 8px', borderRadius:4, fontSize:12, fontWeight:600 }}>{j.match} match</span>
                <span className="growth-text" style={{ fontSize:12, color:'#10b981' }}>Growth {j.growth}</span>
              </div>
            </div>
          ))}

          <button className="explore-btn" style={{ background:'#6a0dad', color:'white', border:'none', padding:12, borderRadius:8, width:'100%', cursor:'pointer', fontWeight:600, marginTop:15 }}>Explore All Matches</button>
        </div>

        <div className="right-column" style={{ display:'flex', flexDirection:'column', gap:20 }}>
          <div className="card progress-overview" style={{ background:'#f3ebf7', borderRadius:12, padding:20 }}>
            <h3>Progress Overview</h3>
            {[{t:'Assessment Completion',w:75},{t:'Skill Building',w:60},{t:'Career Exploration',w:80}].map((p)=> (
              <div key={p.t} className="progress-item" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:15 }}>
                <span>{p.t}</span>
                <div className="progress-bar" style={{ flex:1, height:8, background:'white', borderRadius:4, margin:'0 15px', overflow:'hidden' }}>
                  <div className="progress-fill" data-width={`${p.w}%`} style={{ width:0, height:'100%', background:'#6a0dad', borderRadius:4, transition:'width 1s ease' }} />
                </div>
                <span>{p.w}%</span>
              </div>
            ))}
          </div>

          <div className="card internships" style={{ background:'#f3ebf7', borderRadius:12, padding:20 }}>
            <h3>Internships</h3>
            {[{t:'Frontend Developer Intern',m:'📍 San Francisco, CA • 3-5 months',tag:'Remote'},{t:'UX Research Intern',m:'📍 New York, NY • 3 months',tag:'Hybrid'}].map((it)=> (
              <div key={it.t} className="internship-item" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid #f0f0f0' }}>
                <div className="internship-info">
                  <h4 style={{ margin:0 }}>{it.t}</h4>
                  <p style={{ margin:'4px 0', color:'#666', fontSize:12 }}>{it.m}</p>
                  <span className="tag" style={{ background:'white', color:'#6a0dad', padding:'4px 8px', borderRadius:4, fontSize:12 }}>{it.tag}</span>
                </div>
                <span className="internship-badge" style={{ background:'#10b981', color:'white', padding:'2px 6px', borderRadius:3, fontSize:10 }}>NEW</span>
              </div>
            ))}
            <button className="view-all-btn" style={{ background:'#6a0dad', color:'white', border:'none', padding:10, borderRadius:6, width:'100%', cursor:'pointer', marginTop:10 }}>View All Internships</button>
          </div>
        </div>

        <div className="card courses-section" style={{ background:'#f3ebf7', borderRadius:12, padding:20, gridColumn:'1 / -1' }}>
          <div className="courses-header" style={{ display:'flex', alignItems:'center', gap:8, marginBottom:15 }}>
            <h3>📚 Recommended Courses</h3>
            <span className="subtitle" style={{ fontSize:14, color:'#666' }}>Build skills for your target careers</span>
          </div>
          <div className="courses-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:15 }}>
            {[{t:'Python for Beginners',r:'⭐ 4.8',n:'1550 enrolled',p:'FREE'},{t:'UI/UX Design Fundamentals',r:'⭐ 4.9',n:'980 enrolled',p:'$49'},{t:'Data Analysis with R',r:'⭐ 4.7',n:'750 enrolled',p:'$79'}].map((c)=> (
              <div key={c.t} className="course-item" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:15, background:'#f9fafb', borderRadius:8 }}>
                <div className="course-info">
                  <h4 style={{ margin:0 }}>{c.t}</h4>
                  <div className="course-meta" style={{ display:'flex', gap:15, fontSize:12, color:'#666' }}>
                    <span className="rating" style={{ color:'#f59e0b' }}>{c.r}</span>
                    <span>{c.n}</span>
                  </div>
                </div>
                <div className="price" style={{ fontWeight:600, color:'#333' }}>{c.p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="progress-dashboard" style={{ textAlign:'center', padding:40, marginTop:40, background:'rgba(243,235,247,0.1)' }}>
        <h2>Your Progress Dashboard</h2>
        <p className="subtitle" style={{ fontSize:16, opacity:0.9, marginBottom:40 }}>Track your learning journey and celebrate your achievements</p>
        <div className="xp-card" style={{ background:'white', borderRadius:12, padding:30, color:'#333', display:'flex', alignItems:'center', justifyContent:'space-between', maxWidth:600, margin:'0 auto 30px' }}>
          <div className="level-info" style={{ textAlign:'center' }}>
            <div className="level-number" style={{ fontSize:48, fontWeight:700 }}>4</div>
            <div>Current Level</div>
          </div>
          <div className="xp-info" style={{ flex:1, textAlign:'center' }}>
            <div className="xp-amount">3,500 XP</div>
            <div className="xp-label" style={{ color:'#666', marginBottom:15 }}>Total Experience Points</div>
            <div className="level-progress">Progress to Level 5</div>
            <div className="level-bar" style={{ height:12, background:'#f3f4f6', borderRadius:6, overflow:'hidden', margin:'8px 0' }}>
              <div className="level-fill" data-width="75%" style={{ height:'100%', background:'#6b46c1', width:0, transition:'width 1s ease' }} />
            </div>
            <div>500 XP needed</div>
          </div>
          <div className="path-badge" style={{ textAlign:'center' }}>
            <div>🎯</div>
            <div>Data Scientist Path</div>
          </div>
        </div>

        <div className="tab-navigation" style={{ display:'flex', background:'rgba(255,255,255,0.1)', borderRadius:12, padding:4, margin:'30px auto', maxWidth:600 }}>
          {['overview','achievements','goals','activity'].map(t => (
            <button key={t} className={`tab-btn ${active===t?'active':''}`} onClick={()=>setActive(t)} style={{ flex:1, padding:'12px 20px', background:'transparent', border:'none', color: active===t ? 'white' : 'rgba(255,255,255,0.7)', borderRadius:8, cursor:'pointer', fontWeight:500 }}>{t[0].toUpperCase()+t.slice(1)}</button>
          ))}
        </div>

        <div className="tab-content" style={{ maxWidth:1400, margin:'0 auto' }}>
          {active === 'overview' && (
            <div id="overview" className="tab-panel active">
              <div className="bottom-grid" style={{ display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:30, maxWidth:1400, margin:'0 auto' }}>
                <div className="card skill-development" style={{ background:'#f3ebf7', borderRadius:12, padding:30 }}>
                  <h3>Skill Development</h3>
                  <p className="subtitle" style={{ color:'#666', marginBottom:30, fontSize:14, fontWeight:500 }}>Your progress in key skills</p>
                  {[
                    ['Python',85],['Statistics',70],['Machine Learning',45],['Data Visualization',80],['SQL',75],['R Programming',25],
                  ].map(([name,val]) => (
                    <div key={name} className="skill-item" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20, padding:'4px 0' }}>
                      <span className="skill-name" style={{ fontSize:15, fontWeight:600, color:'#333', minWidth:140 }}>{name}</span>
                      <div className="skill-bar" style={{ flex:1, height:8, background:'white', borderRadius:4, margin:'0 20px', overflow:'hidden' }}>
                        <div className="skill-fill" data-width={`${val}%`} style={{ height:'100%', width:0, background:'linear-gradient(90deg,#6a0dad,#9d4edd)', borderRadius:4, transition:'width 1s ease' }} />
                      </div>
                      <span className="skill-score" style={{ fontSize:14, fontWeight:600, color:'#6a0dad', minWidth:50, textAlign:'right' }}>{val}/100</span>
                    </div>
                  ))}
                </div>
                <div className="card" style={{ background:'#f3ebf7', borderRadius:12, padding:20 }}>
                  <h3>Quick Stats</h3>
                  <div className="stats-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginTop:20 }}>
                    {[['12','Courses Completed','purple'],['85%','Assessment Score','green'],['45','Study Days','orange'],['7','Projects Built','pink']].map(([num,label,color]) => (
                      <div key={label} className={`stat-card ${color}`} style={{ padding:'25px 20px', borderRadius:12, textAlign:'center', background: 'rgba(106,13,173,0.15)' }}>
                        <div className="stat-number" style={{ fontSize:28, fontWeight:700, marginBottom:8, color:'#333' }}>{num}</div>
                        <div className="stat-label" style={{ fontSize:13, fontWeight:500, opacity:0.8, color:'#333' }}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === 'achievements' && (
            <div id="achievements" className="tab-panel">
              <div className="achievements-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:20, padding:20 }}>
                {[
                  ['🐍','Python Master','Completed Python fundamentals course','+500 XP','15/4/2025'],
                  ['📊','Data Visualization Expert','Created 10 data visualizations','+750 XP','8/9/2024'],
                  ['🔥','Learning Streak','Learned for 30 consecutive days','+1000 XP','10/3/2024'],
                ].map(([icon,title,desc,xp,date]) => (
                  <div key={title} className="achievement-card" style={{ background:'#f3ebf7', borderRadius:12, padding:20, display:'flex', alignItems:'center', gap:15, color:'#333' }}>
                    <div className="achievement-icon" style={{ fontSize:32, width:50, height:50, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(106,13,173,0.1)', borderRadius:'50%' }}>{icon}</div>
                    <div className="achievement-content">
                      <h4 style={{ margin:0 }}>{title}</h4>
                      <p style={{ margin:'4px 0', color:'#666' }}>{desc}</p>
                      <div className="achievement-meta" style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <span className="xp-badge" style={{ background:'#10b981', color:'white', padding:'2px 8px', borderRadius:12, fontSize:11, fontWeight:600 }}>{xp}</span>
                        <span className="date" style={{ fontSize:12, color:'#666' }}>{date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === 'goals' && (
            <div id="goals" className="tab-panel">
              <div className="goals-list" style={{ padding:20, display:'flex', flexDirection:'column', gap:20 }}>
                {[
                  ['Complete Machine Learning Course','Learning','High priority',65],
                  ['Build 3 Portfolio Projects','Projects','Medium priority',33],
                  ['Apply to 10 Internships','Applications','High priority',20],
                ].map(([title,cat,prio,pct],i) => (
                  <div key={i} className={`goal-item-${i+1}`} style={{ borderRadius:12, padding:20, color:'#333', background:i===0?'#E5CAE6':i===1?'#D2E2C9':'#E5BCB6' }}>
                    <div className="goal-header" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:15 }}>
                      <h4 style={{ margin:0 }}>{title}</h4>
                      <div className="goal-badges" style={{ display:'flex', gap:8 }}>
                        <span className="priority-badge" style={{ background:'#6a0dad', color:'white', padding:'4px 8px', borderRadius:12, fontSize:11, fontWeight:600 }}>{cat}</span>
                        <span className="priority-badge" style={{ background: i===1 ? '#f59e0b' : '#ef4444', color:'white', padding:'4px 8px', borderRadius:12, fontSize:11, fontWeight:600 }}>{prio}</span>
                      </div>
                    </div>
                    <div className="goal-progress" style={{ display:'flex', alignItems:'center', gap:15, marginBottom:10 }}>
                      <div className="progress-bar" style={{ flex:1, height:8, background:'#ddd', borderRadius:4, overflow:'hidden' }}>
                        <div className="progress-fill" data-width={`${pct}%`} style={{ height:'100%', width:`${pct}%`, background:'#6a0dad' }} />
                      </div>
                      <span className="progress-text" style={{ fontSize:14, fontWeight:600, color:'#6a0dad' }}>{pct}%</span>
                    </div>
                    <p className="goal-target" style={{ fontSize:12, color:'#666' }}>Target: {i===0?'April 30, 2025':i===1?'Oct 15, 2024':'July 1, 2025'}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === 'activity' && (
            <div id="activity" className="tab-panel">
              <div className="card activity-section" style={{ background:'#f3ebf7', borderRadius:12, padding:20 }}>
                <h3>Recent Activity</h3>
                <p className="subtitle" style={{ color:'#666', marginBottom:20 }}>Your latest learning milestones and achievements</p>
                {[
                  ['✅','Completed: Statistics Fundamentals - Module 3','Hypothesis testing and confidence intervals','2 hours ago','+150 XP'],
                  ['📋','Submitted: Sales Data Analysis Project','Data visualization and insights report','1 day ago','+300 XP'],
                  ['🔓','New Skill Unlocked: Advanced SQL','Window functions and complex queries','2 days ago','+200 XP'],
                  ['📝','Applied: Data Analyst Intern at TechCorp','Application submitted with portfolio','3 days ago','+100 XP'],
                ].map(([icon,title,desc,time,xp]) => (
                  <div key={title} className="activity-item" style={{ display:'flex', alignItems:'flex-start', gap:15, padding:'15px 5px', marginBottom:10, border:'1px solid #D9D9D9', borderRadius:8 }}>
                    <div className="activity-icon" style={{ width:40, height:40, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(106,13,173,0.1)', borderRadius:'50%' }}>{icon}</div>
                    <div className="activity-content">
                      <h4 style={{ margin:'0 0 5px' }}>{title}</h4>
                      <p style={{ margin:'0 0 8px', color:'#666' }}>{desc}</p>
                      <div className="activity-meta" style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <span className="time" style={{ fontSize:12, color:'#666' }}>{time}</span>
                        <span className="xp-badge" style={{ background:'#10b981', color:'white', padding:'2px 8px', borderRadius:12, fontSize:11, fontWeight:600 }}>{xp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

