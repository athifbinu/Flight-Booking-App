import React from 'react'
import './About.css'
import { Container,Row,Col } from 'reactstrap'
import aboutImg from "../../assets/images/about.jpeg"
const About = () => {
  return (
    <section>
          <Container>
           <Row>
              <Col lg='6' md='6'>
                  <div className="abot__img">
                       <img src={aboutImg} alt="" className='w-100' />
                  </div>
              </Col>

              <Col lg='6' md='6'>
                 <div className="about-content">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Blanditiis officiis modi, id obcaecati consequatur
                        inventore architecto in saepe sunt. Velit odio corporis distinctio.</p>
                 </div>
              
              </Col>
           </Row>
        </Container>
    </section>
  )
}

export default About
