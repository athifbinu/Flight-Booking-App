import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import heroImg from "../../assets/images/pexels-pixabay-358220.jpg"

import "./hero-section.css"
const HeroSection = () => {
  return (
    <section>
      <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
              <h2 className='mb-4'>Now EveryOne Can Fly ✈ </h2>
              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Unde doloribus numquam
                 </p>
                 <div className="serche">
                  <input type="text" placeholder='Search' />
                       
                  <button>Search</button>
                 </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
                   <img src={heroImg} alt="" className='w-100 br ' />
            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default HeroSection
