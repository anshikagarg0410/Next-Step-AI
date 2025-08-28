import React, { useState } from 'react'
import styled from 'styled-components'

const SkillsContainer = styled.div`
  min-height: 100vh;
  background: white;
  color: #6a0dad;
`

const Hero = styled.div`
  background-color: #6a0dad;
  color: white;
  text-align: center;
  padding: 60px 20px;

  h1 {
    font-family: 'Inria Serif', serif;
    font-size: 36px;
    margin: 0 0 12px 0;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`

const Card = styled.div`
  background: #f3ebf7;
  border-radius: 10px;
  margin: 20px auto;
  padding: 20px;
  width: 85%;
  max-width: 1000px;

  h2 {
    margin-top: 0;
    color: #6a0dad;
    font-family: 'Inria Serif', serif;
  }
`

const ProgressBar = styled.div`
  height: 8px;
  border-radius: 10px;
  background: #ffffff;
  margin-top: 10px;
  overflow: hidden;
`

const ProgressFill = styled.div`
  height: 100%;
  background: #a64cc4;
  border-radius: 10px;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  background: #ede2f7;
  padding: 16px 20px;
  border-radius: 8px 8px 0 0;
  width: 85%;
  max-width: 1000px;
  margin: 30px auto 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`

const SectionNumber = styled.div`
  background: #6a0dad;
  color: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 12px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

const SectionTitle = styled.h3`
  margin: 0;
  font-family: 'Inria Serif', serif;
  color: #6a0dad;
`

const SectionSubtitle = styled.div`
  font-size: 14px;
  color: #555;
`

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0 30px 0;
`

const CourseCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`

const CourseTitle = styled.h4`
  margin: 0;
  font-family: 'Inria Serif', serif;
  color: #6a0dad;
  font-size: 16px;
`

const CourseBadge = styled.span`
  background: ${props => props.type === 'free' ? '#10b981' : '#f59e0b'};
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
`

const CourseProvider = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`

const CourseDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
`

const CourseMeta = styled.div`
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
`

const CourseButton = styled.button`
  background: #6a0dad;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.3s;
  width: 100%;

  &:hover {
    background: #5a0b8a;
  }
`

const Skills = () => {
  const [completedCourses, setCompletedCourses] = useState(new Set())

  const skillsData = {
    careerPath: {
      title: "Data Scientist",
      progress: 65,
      description: "Master the skills needed to become a successful data scientist"
    },
    sections: [
      {
        id: 1,
        title: "Foundation Skills",
        subtitle: "Build your programming and math foundation",
        courses: [
          {
            id: 'python-basics',
            title: "Python for Beginners",
            provider: "Codecademy",
            description: "Learn Python programming from scratch with hands-on exercises and projects.",
            duration: "25 hours",
            rating: "4.8",
            students: "125K",
            type: "free"
          },
          {
            id: 'statistics-101',
            title: "Statistics for Data Science",
            provider: "Khan Academy",
            description: "Master statistical concepts essential for data analysis and machine learning.",
            duration: "30 hours",
            rating: "4.7",
            students: "89K",
            type: "free"
          },
          {
            id: 'sql-fundamentals',
            title: "SQL Fundamentals",
            provider: "SQLBolt",
            description: "Learn to query databases and manipulate data using SQL.",
            duration: "15 hours",
            rating: "4.9",
            students: "156K",
            type: "free"
          }
        ]
      },
      {
        id: 2,
        title: "Data Analysis",
        subtitle: "Learn to analyze and visualize data",
        courses: [
          {
            id: 'pandas-numpy',
            title: "Data Analysis with Pandas & NumPy",
            provider: "DataCamp",
            description: "Master data manipulation and analysis using Python's most popular libraries.",
            duration: "20 hours",
            rating: "4.6",
            students: "67K",
            type: "paid"
          },
          {
            id: 'data-viz',
            title: "Data Visualization with Matplotlib",
            provider: "Coursera",
            description: "Create compelling visualizations to communicate insights from data.",
            duration: "18 hours",
            rating: "4.5",
            students: "45K",
            type: "paid"
          }
        ]
      },
      {
        id: 3,
        title: "Machine Learning",
        subtitle: "Build predictive models and AI systems",
        courses: [
          {
            id: 'ml-intro',
            title: "Introduction to Machine Learning",
            provider: "Coursera",
            description: "Learn the fundamentals of machine learning algorithms and applications.",
            duration: "40 hours",
            rating: "4.8",
            students: "234K",
            type: "paid"
          },
          {
            id: 'deep-learning',
            title: "Deep Learning Specialization",
            provider: "deeplearning.ai",
            description: "Master neural networks and deep learning techniques.",
            duration: "60 hours",
            rating: "4.9",
            students: "156K",
            type: "paid"
          }
        ]
      }
    ]
  }

  const handleCourseAction = (courseId) => {
    if (completedCourses.has(courseId)) {
      alert('Course already completed!')
    } else {
      const newCompleted = new Set(completedCourses)
      newCompleted.add(courseId)
      setCompletedCourses(newCompleted)
      alert('Course started! Good luck with your learning journey.')
    }
  }

  return (
    <SkillsContainer>
      <Hero>
        <h1>Your Skill-Building Roadmap</h1>
        <p>Personalized learning path designed just for you</p>
      </Hero>

      <Card>
        <h2>🎯 Your Career Path: {skillsData.careerPath.title}</h2>
        <p>{skillsData.careerPath.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <span>Overall Progress</span>
          <span style={{ fontWeight: 'bold' }}>{skillsData.careerPath.progress}%</span>
        </div>
        <ProgressBar>
          <ProgressFill progress={skillsData.careerPath.progress} />
        </ProgressBar>
      </Card>

      {skillsData.sections.map((section) => (
        <div key={section.id}>
          <SectionHeader>
            <SectionNumber>{section.id}</SectionNumber>
            <div>
              <SectionTitle>{section.title}</SectionTitle>
              <SectionSubtitle>{section.subtitle}</SectionSubtitle>
            </div>
          </SectionHeader>
          
          <CourseGrid>
            {section.courses.map((course) => (
              <CourseCard key={course.id}>
                <CourseHeader>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseBadge type={course.type}>
                    {course.type === 'free' ? 'FREE' : 'PAID'}
                  </CourseBadge>
                </CourseHeader>
                
                <CourseProvider>{course.provider}</CourseProvider>
                <CourseDescription>{course.description}</CourseDescription>
                
                <CourseMeta>
                  <span>⏱️ {course.duration}</span>
                  <span>⭐ {course.rating}</span>
                  <span>👥 {course.students} students</span>
                </CourseMeta>
                
                <CourseButton 
                  onClick={() => handleCourseAction(course.id)}
                  style={{
                    background: completedCourses.has(course.id) ? '#10b981' : '#6a0dad'
                  }}
                >
                  {completedCourses.has(course.id) ? '✓ Completed' : 'Start Course'}
                </CourseButton>
              </CourseCard>
            ))}
          </CourseGrid>
        </div>
      ))}
    </SkillsContainer>
  )
}

export default Skills