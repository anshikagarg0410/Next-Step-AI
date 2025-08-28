import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 50px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }
`

const HeroText = styled.div`
  max-width: 50%;

  @media (max-width: 900px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
`

const HeroTitle = styled.h1`
  font-family: "Kranky", cursive, serif;
  font-style: normal;
  font-size: 60px;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const HeroDescription = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  color: #E0E0E0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const HeroImage = styled.img`
  height: 400px;
  width: 400px;
  animation: float 3s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>
        <HeroTitle>YOUR AI<br />CAREER MENTOR</HeroTitle>
        <HeroDescription>
          Discover the right career path, learn the skills you need, and unlock real opportunities — all guided by AI.
        </HeroDescription>
        <Link to="/profile" className="btn">
          Get started
        </Link>
      </HeroText>
      <HeroImage src="/img_1_astro.PNG" alt="AI Mentor Image" />
    </HeroSection>
  )
}

export default Hero