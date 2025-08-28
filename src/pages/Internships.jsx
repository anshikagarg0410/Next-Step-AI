import React, { useState } from 'react'
import styled from 'styled-components'

const InternshipsContainer = styled.div`
  min-height: 100vh;
  background: #6c1aa0;
  color: #2d0a4e;
`

const Hero = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: white;

  h1 {
    font-family: 'Inria Serif', serif;
    font-size: 32px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 16px;
  }
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  background: #ddd;
  padding: 10px;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`

const Tab = styled.button`
  flex: 1;
  background: ${props => props.active ? 'white' : '#e8e1f5'};
  border: none;
  padding: 12px;
  margin: 0 4px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  box-shadow: ${props => props.active ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const Filters = styled.div`
  display: flex;
  gap: 16px;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  margin: 20px auto;
  align-items: flex-end;
  font-family: 'Instrument Sans', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    font-family: 'Inria Serif', serif;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 6px;
    color: #111;
  }
`

const InputWrapper = styled.div`
  position: relative;

  i {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #888;
    font-size: 14px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 10px 12px 10px 32px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #6c1aa0;
    box-shadow: 0 0 0 2px rgba(108, 26, 160, 0.1);
  }
`

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #6c1aa0;
    box-shadow: 0 0 0 2px rgba(108, 26, 160, 0.1);
  }
`

const FilterButton = styled.button`
  background: #6c1aa0;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.3s;

  &:hover {
    background: #5a1585;
  }
`

const InternshipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const InternshipCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`

const InternshipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`

const InternshipTitle = styled.h3`
  margin: 0;
  font-family: 'Inria Serif', serif;
  color: #6c1aa0;
  font-size: 18px;
`

const SaveButton = styled.button`
  background: transparent;
  border: 1px solid ${props => props.saved ? '#10b981' : '#ccc'};
  color: ${props => props.saved ? '#10b981' : '#666'};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.saved ? '#10b981' : '#f0f0f0'};
    color: ${props => props.saved ? 'white' : '#333'};
  }
`

const CompanyName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`

const InternshipMeta = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  flex-wrap: wrap;
`

const InternshipDescription = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
`

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

const Tag = styled.span`
  background: #f0f0f0;
  color: #6c1aa0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`

const ApplyButton = styled.button`
  background: #6c1aa0;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: #5a1585;
  }
`

const Internships = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [savedInternships, setSavedInternships] = useState(new Set())
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    duration: '',
    type: ''
  })

  const internshipsData = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "3-6 months",
      type: "Remote",
      salary: "$2,500/month",
      description: "Join our dynamic team to build modern web applications using React, TypeScript, and modern frontend technologies.",
      tags: ["React", "JavaScript", "CSS", "Git"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "UX Research Intern",
      company: "Design Studio",
      location: "New York, NY",
      duration: "4 months",
      type: "Hybrid",
      salary: "$2,000/month",
      description: "Conduct user research, analyze data, and help improve user experiences across our product suite.",
      tags: ["User Research", "Figma", "Analytics", "Prototyping"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Analytics Pro",
      location: "Seattle, WA",
      duration: "6 months",
      type: "On-site",
      salary: "$3,000/month",
      description: "Work with large datasets, build machine learning models, and create insights for business decisions.",
      tags: ["Python", "Machine Learning", "SQL", "Statistics"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Mobile App Developer Intern",
      company: "AppWorks",
      location: "Austin, TX",
      duration: "3-4 months",
      type: "Remote",
      salary: "$2,200/month",
      description: "Develop and maintain mobile applications for iOS and Android platforms using React Native.",
      tags: ["React Native", "Mobile Dev", "JavaScript", "API"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Marketing Analytics Intern",
      company: "GrowthCo",
      location: "Chicago, IL",
      duration: "3 months",
      type: "Hybrid",
      salary: "$1,800/month",
      description: "Analyze marketing campaigns, track KPIs, and provide insights to optimize marketing strategies.",
      tags: ["Analytics", "Marketing", "Excel", "Tableau"],
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "Software Engineering Intern",
      company: "StartupXYZ",
      location: "Boston, MA",
      duration: "4-6 months",
      type: "On-site",
      salary: "$2,800/month",
      description: "Build scalable backend systems and APIs using modern technologies like Node.js and cloud platforms.",
      tags: ["Node.js", "AWS", "MongoDB", "REST APIs"],
      posted: "4 days ago"
    }
  ]

  const handleSaveInternship = (internshipId) => {
    const newSaved = new Set(savedInternships)
    if (newSaved.has(internshipId)) {
      newSaved.delete(internshipId)
    } else {
      newSaved.add(internshipId)
    }
    setSavedInternships(newSaved)
  }

  const handleApply = (internship) => {
    alert(`Application submitted for ${internship.title} at ${internship.company}!`)
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const filteredInternships = internshipsData.filter(internship => {
    if (activeTab === 'saved' && !savedInternships.has(internship.id)) {
      return false
    }
    
    if (filters.search && !internship.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !internship.company.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }
    
    if (filters.location && !internship.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }
    
    if (filters.type && internship.type !== filters.type) {
      return false
    }
    
    return true
  })

  return (
    <InternshipsContainer>
      <Hero>
        <h1>Find Your Perfect Internship</h1>
        <p>Discover opportunities that match your skills and career goals</p>
      </Hero>

      <Container>
        <Tabs>
          <Tab 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            All Internships ({internshipsData.length})
          </Tab>
          <Tab 
            active={activeTab === 'saved'} 
            onClick={() => setActiveTab('saved')}
          >
            Saved ({savedInternships.size})
          </Tab>
          <Tab 
            active={activeTab === 'applied'} 
            onClick={() => setActiveTab('applied')}
          >
            Applied (0)
          </Tab>
        </Tabs>

        <Filters>
          <FilterGroup>
            <label>Search</label>
            <InputWrapper>
              <i className="fas fa-search"></i>
              <Input
                type="text"
                placeholder="Job title or company"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </InputWrapper>
          </FilterGroup>

          <FilterGroup>
            <label>Location</label>
            <InputWrapper>
              <i className="fas fa-map-marker-alt"></i>
              <Input
                type="text"
                placeholder="City, State"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              />
            </InputWrapper>
          </FilterGroup>

          <FilterGroup>
            <label>Work Type</label>
            <Select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </Select>
          </FilterGroup>

          <FilterButton onClick={() => setFilters({ search: '', location: '', duration: '', type: '' })}>
            Clear Filters
          </FilterButton>
        </Filters>

        <InternshipGrid>
          {filteredInternships.map((internship) => (
            <InternshipCard key={internship.id}>
              <InternshipHeader>
                <InternshipTitle>{internship.title}</InternshipTitle>
                <SaveButton
                  saved={savedInternships.has(internship.id)}
                  onClick={() => handleSaveInternship(internship.id)}
                >
                  {savedInternships.has(internship.id) ? '★ Saved' : '☆ Save'}
                </SaveButton>
              </InternshipHeader>

              <CompanyName>{internship.company}</CompanyName>

              <InternshipMeta>
                <span>📍 {internship.location}</span>
                <span>⏰ {internship.duration}</span>
                <span>💼 {internship.type}</span>
                <span>💰 {internship.salary}</span>
              </InternshipMeta>

              <InternshipDescription>
                {internship.description}
              </InternshipDescription>

              <TagsContainer>
                {internship.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagsContainer>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Posted {internship.posted}</span>
              </div>

              <ApplyButton onClick={() => handleApply(internship)}>
                Apply Now
              </ApplyButton>
            </InternshipCard>
          ))}
        </InternshipGrid>

        {filteredInternships.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'white' }}>
            <h3>No internships found</h3>
            <p>Try adjusting your filters or check back later for new opportunities.</p>
          </div>
        )}
      </Container>
    </InternshipsContainer>
  )
}

export default Internships