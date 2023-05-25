import React from 'react'
import { Container,Row,Col,FormGroup,Form } from 'reactstrap'


import "../Style/Book.css"
const Book = () => {



  return (
    <section>
    <Container>
    <Row>
      <Col lg='8'>
        <h6 className='mb-4 fw-bold '>Billing Information</h6>
         <Form className='billing__form mt-5'  >
          
              <FormGroup className='form__group '>
                  <input className='wl fw-bold'
                   type="text" placeholder='Enter Your Name'
                   required />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input className='wl fw-bold' type="email"
                   placeholder='Enter Your Email'
                    required />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input className='wl fw-bold' type="number" placeholder='Phone Number'
                   required />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input className='wl fw-bold' type="text" placeholder='Flight Name'
                    required />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input className='wl fw-bold' type="text" placeholder='Your Starting Place'
                   required />
              </FormGroup>


              <FormGroup className='form__group'>
                  <input className='wl fw-bold' type="text" placeholder='Your Destination'
                   required />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input className='wl fw-bold' type="text" placeholder='Passport Number'
                  required />
              </FormGroup>

              <button className=''>Submit</button>
        
           </Form>

         </Col>

       </Row>
    </Container>
  </section>
  )
}

export default Book
