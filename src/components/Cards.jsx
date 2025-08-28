import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CardsSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 50px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
  }
`

const Card = styled.div`
  background-color: #CAB0DD;
  width: 15%;
  margin: 10px;
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(50px)'};

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    width: 80%;
    margin: 20px 0;
  }
`

const CardNumber = styled.div`
  width: 50px;
  height: 50px;
  background-color: #B333E9;
  color: #E0E0E0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  margin: 0 auto 20px auto;
`

const CardTitle = styled.h3`
  margin-bottom: 15px;
  color: #6910A8;
`

const CardDescription = styled.p`
  font-size: 14px;
  color: #6910A8;
`

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])

  const cardData = [
    {
      number: 1,
      title: "Discover Your Path",
      description: "Let AI uncover your strengths and passions, then match them to the career that fits you best."
    },
    {
      number: 2,
      title: "Get Your Roadmap",
      description: "Receive a clear, personalized step-by-step plan designed to guide your learning journey."
    },
    {
      number: 3,
      title: "Build Skills",
      description: "Gain in-demand skills through curated courses, hands-on projects, and verified certifications."
    },
    {
      number: 4,
      title: "Unlock Opportunities",
      description: "Turn your skills into success by connecting with tailored internships, hackathons, and job openings."
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.dataset.index = index
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <CardsSection id="cards-section">
      {cardData.map((card, index) => (
        <Card
          key={index}
          ref={el => cardsRef.current[index] = el}
          isVisible={visibleCards.includes(index)}
        >
          <CardNumber>{card.number}</CardNumber>
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
        </Card>
      ))}
    </CardsSection>
  )
}

export default Cards