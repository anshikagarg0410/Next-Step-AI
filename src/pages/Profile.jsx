import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ProfileContainer = styled.div`
  min-height: 100vh;
  background-color: #6910A8;
`

const IntroSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  
  h1 {
    font-family: 'Inria Serif', serif;
    font-size: 48px;
    margin-bottom: 20px;
    color: white;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  p {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 18px;
    color: #E0E0E0;
    margin-bottom: 40px;
  }
`

const ProgressWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  color: #E0E0E0;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin-bottom: 40px;
`

const ProgressFill = styled.div`
  height: 100%;
  background-color: #B333E9;
  border-radius: 4px;
  width: ${props => props.width}%;
  transition: width 0.3s ease;
`

const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`

const StudentInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  margin-bottom: 40px;

  h2 {
    font-family: 'Inria Serif', serif;
    color: white;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(179, 51, 233, 0.3);
  }
`

const Select = styled.select`
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(179, 51, 233, 0.3);
  }

  option[disabled] {
    color: #666;
  }
`

const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  min-height: 120px;
  resize: vertical;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(179, 51, 233, 0.3);
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
  padding: 40px 20px;
`

const NextButton = styled.button`
  background-color: #B333E9;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(179, 51, 233, 0.7);
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const Profile = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    qualification: '',
    experience: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.age || !formData.qualification) {
      alert('Please fill in all required fields.')
      return
    }

    // Save to localStorage for persistence
    localStorage.setItem('profileData', JSON.stringify(formData))
    
    // Navigate to dashboard
    navigate('/dashboard')
  }

  const isFormValid = formData.fullName && formData.email && formData.age && formData.qualification

  return (
    <ProfileContainer>
      <IntroSection>
        <h1>Let&apos;s Get To Know You</h1>
        <p>Let AI guide your career—just tell us a bit about you.</p>
        
        <ProgressWrapper>
          <ProgressText>
            <span>Step 1 of 4</span>
            <span>25% Complete</span>
          </ProgressText>
          <ProgressBar>
            <ProgressFill width={25} />
          </ProgressBar>
        </ProgressWrapper>
      </IntroSection>

      <MainContainer>
        <StudentInfo>
          <h2>
            <i className="fa-regular fa-user"></i>
            Student Info
          </h2>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Type your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <Select
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>Select your qualification</option>
              <option value="highschool">High School</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
            </Select>
            <TextArea
              name="experience"
              placeholder="Describe any work experience, internships or relevant projects (optional)"
              value={formData.experience}
              onChange={handleInputChange}
            />
          </Form>
        </StudentInfo>
      </MainContainer>

      <ButtonWrapper>
        <NextButton 
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Next →
        </NextButton>
      </ButtonWrapper>
    </ProfileContainer>
  )
}

export default Profile