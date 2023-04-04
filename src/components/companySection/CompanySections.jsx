import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import "./CompanySection.css"
const CompanySections = () => {
  return (
    <section>
        <Container>
        <Row>
             <h2 className='partner'>Our Partners</h2>
            <Col lg='2' md='3'>

                <h2 className='d-flex align-items-center gap-1 ml-5'>
                   
                   Airindia
                </h2>
            </Col>
            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>
                    Air Arabia
                </h2>
            </Col>

            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>
                
                    Air Arabia
                </h2>
            </Col>

            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>

                    Air Arabia
                </h2>
            </Col>

            <Col lg='2' md='3'>
                <h2 className='d-flex align-items-center gap-1'>
            
                    Air Arabia
                </h2>
            </Col>

   
         
        </Row>
        </Container>
    </section>
  )
}

export default CompanySections
