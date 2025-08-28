import { useEffect, useState } from 'react'

export function Internships() {
  const [tab, setTab] = useState('discover')

  useEffect(() => {
    // focus first tab on mount
  }, [])

  return (
    <div style={{ background:'#6c1aa0', color:'white', minHeight:'100vh' }}>
      <div className="hero" style={{ textAlign:'center', padding:'40px 20px' }}>
        <h1 style={{ fontSize:32, marginBottom:10 }}>Find your future — intelligently</h1>
        <p>Smart AI matching for internships aligned to your skills and goals.</p>
      </div>

      <div className="container" style={{ maxWidth:1100, margin:'0 auto', padding:'0 15px' }}>
        <div className="tabs" style={{ display:'flex', justifyContent:'center', background:'#ddd', padding:10, borderRadius:10, margin:'20px auto' }}>
          {['discover','saved','applications'].map(t => (
            <button key={t} className={`tab ${tab===t?'active':''}`} onClick={()=>setTab(t)} style={{ flex:1, background: tab===t ? 'white' : '#e8e1f5', border:'none', padding:12, margin:'0 4px', borderRadius:6, cursor:'pointer', fontSize:16, fontWeight:500 }}>{t[0].toUpperCase()+t.slice(1)}</button>
          ))}
        </div>

        {tab === 'discover' && (
          <div id="discover" className="tab-content active">
            <div className="job-listings" style={{ display:'flex', flexDirection:'column', gap:20, margin:'20px auto' }}>
              {[
                {icon:'🚀', title:'Data Science Intern', company:'TechForward Inc.', match:'95%', description:'Work on real-world machine learning projects and contribute to our AI-powered analytics platform.', info:['San Francisco, CA','3 months','$2,000/month','45 applicants'], tags:['Intermediate','Remote','Python','Machine Learning','Statistics','✓ Mentorship','✓ Certificate','✓ Full-time offer potential']},
                {icon:'🔍', title:'UX Research Intern', company:'UserFirst Labs', match:'88%', description:'Conduct user research studies and help improve product usability through data-driven insights.', info:['Seattle, WA','3 months','$1,500/month','28 applicants'], tags:['Beginner','Remote','User Research','Statistics','Figma','+1 more','✓ Research publication','✓ Conference speaking','✓ UX certification']},
                {icon:'📈', title:'Marketing Analytics Intern', company:'GrowthMetrics', match:'85%', description:'Analyze marketing campaigns and create data visualizations to drive growth strategies.', info:['Chicago, IL','4 months','$2,200/month','38 applicants'], tags:['Intermediate','Hybrid','Analytics','Python','Marketing','+1 more','✓ Growth certification','✓ Campaign ownership','✓ Performance bonus']},
                {icon:'💻', title:'Software Engineer Intern', company:'CodeWave Labs', match:'88%', description:'Assist in building scalable web applications with React and Node.js.', info:['Remote','3 months','$1,800/month','42 applicants'], tags:['Beginner','React','Node.js','✓ Certificate']},
              ].map((j,idx)=> (
                <div key={idx} className="card" style={{ background:'#fff', borderRadius:12, padding:20, color:'#2d0a4e', boxShadow:'0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div className="card-header" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div className="job-info" style={{ display:'flex', alignItems:'center', gap:12 }}>
                      <div className="job-icon" style={{ width:50, height:50, background:'linear-gradient(90deg, #6c1aa0, #b333e9)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:22 }}>{j.icon}</div>
                      <div className="job-text">
                        <h2 style={{ margin:0, fontSize:20 }}>{j.title}</h2>
                        <p style={{ margin:'2px 0 0', fontSize:14, color:'#6c1aa0' }}>{j.company}</p>
                      </div>
                    </div>
                    <span className="match" style={{ background:'#2ecc71', color:'white', fontSize:13, padding:'4px 12px', borderRadius:20, fontWeight:600 }}>{j.match} match</span>
                  </div>
                  <div className="description" style={{ margin:'12px 0', color:'#555' }}>{j.description}</div>
                  <div className="info-row" style={{ display:'flex', gap:24, fontSize:14, color:'#444', margin:'12px 0', flexWrap:'wrap' }}>
                    <div>📍 {j.info[0]}</div><div>⏱️ {j.info[1]}</div><div>💵 {j.info[2]}</div><div>👥 {j.info[3]}</div>
                  </div>
                  <div className="tags" style={{ display:'flex', flexWrap:'wrap', gap:8, margin:'10px 0' }}>
                    {j.tags.map(t => <span key={t} className="tag" style={{ padding:'4px 12px', borderRadius:12, fontSize:13, border:'1px solid #ccc', background:'#f8f8f8', fontWeight:500 }}>{t}</span>)}
                  </div>
                  <small style={{ display:'block', marginTop:8, color:'#777', fontSize:13 }}>Posted recently</small>
                  <div className="card-footer" style={{ display:'flex', justifyContent:'flex-end', gap:10, marginTop:16 }}>
                    <button className="btn-learn" style={{ background:'#f5f7fa', border:'1px solid #ddd', padding:'10px 16px', borderRadius:8, cursor:'pointer', fontWeight:500 }}>Learn More</button>
                    <button className="btn-apply" style={{ background:'linear-gradient(90deg, #6c1aa0, #b333e9)', color:'white', border:'none', padding:'10px 20px', borderRadius:8, cursor:'pointer', fontWeight:600 }}>Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'saved' && (
          <div id="saved" className="tab-content active">
            <div className="job-listings" style={{ display:'flex', flexDirection:'column', gap:20, margin:'20px auto' }}>
              {[
                ['💻','Software Engineer Intern','CodeWave Labs','88%'],
                ['📊','Business Analyst Intern','Insight Partners','82%'],
              ].map(([icon,title,company,match]) => (
                <div key={title} className="card card-minimal" style={{ background:'#fff', borderRadius:12, padding:20, color:'#2d0a4e', boxShadow:'0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div className="card-header" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div className="job-info" style={{ display:'flex', alignItems:'center', gap:12 }}>
                      <div className="job-icon" style={{ width:50, height:50, background:'linear-gradient(90deg, #6c1aa0, #b333e9)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:22 }}>{icon}</div>
                      <div className="job-text">
                        <h2 style={{ margin:0, fontSize:20 }}>{title}</h2>
                        <p style={{ margin:'2px 0 0', fontSize:14, color:'#6c1aa0' }}>{company}</p>
                      </div>
                    </div>
                    <span className="match" style={{ background:'#2ecc71', color:'white', fontSize:13, padding:'4px 12px', borderRadius:20, fontWeight:600 }}>{match} match</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'applications' && (
          <div id="applications" className="tab-content active" style={{ marginBottom:40 }}>
            <div className="summary-cards" style={{ display:'flex', gap:20, justifyContent:'space-between', marginBottom:30 }}>
              {[['12','Applications Sent','+3 this week'],['3','Interviews Scheduled','+1 this week'],['1','Offers Received','New!'],['67%','Response Rate','+12% vs last month']].map(([n,label,sub]) => (
                <div key={label} className="summary-card" style={{ background:'#fff', padding:20, borderRadius:10, flex:1, textAlign:'center', boxShadow:'0 4px 8px rgba(0,0,0,0.1)', color:'#333' }}>
                  <h2 style={{ margin:0, fontSize:28, color:'#4B3FF5' }}>{n}</h2>
                  <p style={{ margin:'5px 0', fontSize:14, color:'#333' }}>{label}</p>
                  <span className="subtext" style={{ fontSize:12, color:'green' }}>{sub}</span>
                </div>
              ))}
            </div>
            <div className="application-timeline" style={{ background:'#f3ebf7', borderRadius:12, padding:20, boxShadow:'0 4px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize:24, marginTop:0, marginBottom:5, color:'#2d0a4e' }}>Application Timeline</h3>
              <p className="timeline-subtext" style={{ fontSize:14, color:'#6c1aa0', marginBottom:20 }}>Track your application progress</p>
              {[['Interview Scheduled','TechForward Inc.','Tomorrow'],['Application Submitted','DesignStudio Pro','3 days ago'],['Under Review','StartupHub','1 week ago'],['Offer Received','UserFirst Labs','2 weeks ago']].map(([title,company,when]) => (
                <div key={title} className="timeline-item" style={{ background:'#fff', padding:20, borderRadius:8, boxShadow:'0 2px 5px rgba(0,0,0,0.05)', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
                  <div className="timeline-content">
                    <h4 style={{ margin:0, fontSize:18, color:'#2d0a4e' }}>{title}</h4>
                    <p style={{ margin:'2px 0 0', fontSize:14, color:'#6c1aa0' }}>{company}</p>
                  </div>
                  <div style={{ color:'#555', fontWeight:500 }}>{when}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

