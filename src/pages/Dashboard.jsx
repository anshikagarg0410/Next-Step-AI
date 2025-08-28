import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #6a0dad, #9d4edd);
  color: white;
`

const MainHeader = styled.div`
  text-align: center;
  padding: 40px 20px;

  h1 {
    font-family: 'Inria Serif', serif;
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    opacity: 0.9;
  }
`

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 0 40px 40px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 20px 40px;
  }
`

const Card = styled.div`
  background: #f3ebf7;
  border-radius: 12px;
  padding: 20px;
  color: #333;
  box-shadow: 0 4px 15px rgba(106, 13, 173, 0.1);
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CareerMatches = styled(Card)`
  h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
`

const JobItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`

const JobInfo = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
`

const JobTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const Tag = styled.span`
  background: white;
  color: #6a0dad;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`

const MatchPercentage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MatchBadge = styled.span`
  background: #10b981;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`

const GrowthText = styled.span`
  font-size: 12px;
  color: #10b981;
`

const ExploreButton = styled.button`
  background: #6a0dad;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  margin-top: 15px;
  transition: background 0.3s;

  &:hover {
    background: #9d4edd;
  }
`

const ProgressOverview = styled(Card)`
  h3 {
    margin-bottom: 15px;
  }
`

const ProgressItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  span:first-child {
    min-width: 120px;
    font-size: 14px;
  }

  span:last-child {
    min-width: 40px;
    font-size: 14px;
    font-weight: 600;
  }
`

const ProgressBar = styled.div`
  flex: 1;
  height: 8px;
  background: #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
`

const ProgressFill = styled.div`
  height: 100%;
  background: #6a0dad;
  width: ${props => props.width}%;
  transition: width 0.3s ease;
`

const Internships = styled(Card)`
  h3 {
    margin-bottom: 15px;
  }
`

const InternshipItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`

const InternshipInfo = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  p {
    font-size: 12px;
    color: #666;
    margin-bottom: 4px;
  }
`

const InternshipBadge = styled.span`
  background: #f59e0b;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
`

const ViewAllButton = styled.button`
  background: transparent;
  color: #6a0dad;
  border: 1px solid #6a0dad;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: all 0.3s;

  &:hover {
    background: #6a0dad;
    color: white;
  }
`

const Dashboard = () => {
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    const savedProfile = localStorage.getItem('profileData')
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile))
    }
  }, [])

  const careerMatches = [
    {
      title: "Software Engineer",
      description: "Build applications and solve complex problems",
      tags: ["Programming", "Problem Solving", "Logic"],
      match: 95,
      growth: 22
    },
    {
      title: "UX Designer",
      description: "Create intuitive user experiences",
      tags: ["Design Thinking", "Empathy", "Creativity"],
      match: 88,
      growth: 11
    },
    {
      title: "Data Scientist",
      description: "Extract insights from complex data",
      tags: ["Analytics", "Statistics", "Programming"],
      match: 82,
      growth: 26
    }
  ]

  const internships = [
    {
      title: "Frontend Developer Intern",
      location: "San Francisco, CA • 3-5 months",
      type: "Remote"
    },
    {
      title: "UX Research Intern",
      location: "New York, NY • 3 months",
      type: "Hybrid"
    }
  ]

  const progressData = [
    { label: "Assessment Completion", progress: 75 },
    { label: "Skill Building", progress: 60 },
    { label: "Career Exploration", progress: 80 }
  ]

  return (
    <DashboardContainer>
      <MainHeader>
        <h1>Your Personalized Career Dashboard</h1>
        <p>Based on your assessment, here are AI-powered recommendations to guide your career journey.</p>
        {profileData && (
          <p>Welcome back, {profileData.fullName}!</p>
        )}
      </MainHeader>

      <DashboardGrid>
        <CareerMatches>
          <h3>📊 Top Career Matches</h3>
          <p className="subtitle">Careers perfectly aligned with your strengths and interests</p>
          
          {careerMatches.map((career, index) => (
            <JobItem key={index}>
              <JobInfo>
                <h4>{career.title}</h4>
                <p>{career.description}</p>
                <JobTags>
                  {career.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </JobTags>
              </JobInfo>
              <MatchPercentage>
                <MatchBadge>{career.match}% match</MatchBadge>
                <GrowthText>Growth +{career.growth}%</GrowthText>
              </MatchPercentage>
            </JobItem>
          ))}

          <ExploreButton>
            Explore All Matches
          </ExploreButton>
        </CareerMatches>

        <RightColumn>
          <ProgressOverview>
            <h3>Progress Overview</h3>
            {progressData.map((item, index) => (
              <ProgressItem key={index}>
                <span>{item.label}</span>
                <ProgressBar>
                  <ProgressFill width={item.progress} />
                </ProgressBar>
                <span>{item.progress}%</span>
              </ProgressItem>
            ))}
          </ProgressOverview>

          <Internships>
            <h3>Internships</h3>
            {internships.map((internship, index) => (
              <InternshipItem key={index}>
                <InternshipInfo>
                  <h4>{internship.title}</h4>
                  <p>📍 {internship.location}</p>
                  <Tag>{internship.type}</Tag>
                </InternshipInfo>
                <InternshipBadge>NEW</InternshipBadge>
              </InternshipItem>
            ))}
            <ViewAllButton>
              View All Internships
            </ViewAllButton>
          </Internships>
        </RightColumn>
      </DashboardGrid>
    </DashboardContainer>
  )
}

export default Dashboard