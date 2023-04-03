import React from 'react'
import { Container,Row,Col } from 'reactstrap'

const CompanySections = () => {
  return (
    <section>
        <Container>
        <Row>
            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>
                   <img className='company-img' src="../../assets/images/Air_India_Express-Logo.wine.png" alt="" />
                   Airindia
                </h2>
            </Col>
            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>
                    <img src="../../assets/images/company2.jpeg" alt="" />
                    Air Arabia
                </h2>
            </Col>

            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>
                    <img src="../../assets/images/company3.png" alt="" />
                    Air Arabia
                </h2>
            </Col>

            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>
                    <img src="../../assets/images/company2.jpeg" alt="" />
                    Air Arabia
                </h2>
            </Col>

            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>
                    <img src="../../assets/images/Air_India_Express-Logo.wine.png" alt="" />
                    Air Arabia
                </h2>
            </Col>

   
         
        </Row>
        </Container>
    </section>
  )
}

export default CompanySections
