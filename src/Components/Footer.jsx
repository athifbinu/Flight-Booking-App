import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import "../Style/Footer.css"
const Footer = () => {
  const footerQuickLinks = [
    {
      display: "Home",
      url: "#",
    },
    {
      display: "About US",
      url: "#",
    },
  
    {
      display: "Suits",
      url: "#",
    },
  
    {
      display: "Packages",
      url: "#",
    },
  ];



const footerInfoLinks = [
{
  display: "Privacy Policy",
  url: "#",
},
{
  display: "Membership",
  url: "#",
},

{
  display: "Purchases Guide",
  url: "#",
},

{
  display: "Terms of Service",
  url: "#",
},
];


  return (
    <footer className='footer'>
    <Container>
       <Row>
          <Col lg='3'>
              <h2 className='d-flex align-items-center gap-2'>
          
                  Dreams Air
              </h2>

              <div className="follows">
                  <p className='mb-0'> Folllow us</p>
                  <span>
                      
                       <i class="ri-github-fill"></i>
                      
                      </span>

                
                      <span>
                      <i class="ri-linkedin-fill"></i>
                      </span>

                      <span>
                      <i class="ri-twitter-fill"></i>
                      </span>


              </div>
          </Col>

          <Col lg='3'>
              <h6 className='fw-bold'>Explore</h6>
              <ListGroup className='link_list'>
                    {
                      footerQuickLinks.map((item,index)=>(
                          <ListGroupItem key={index} className='border-0 ps-0 link-item'><a href={item.url}>
                              {item.display}</a></ListGroupItem>
                      ))
                    }
              </ListGroup>
          </Col>



          <Col lg='3'>
              <h6 className='fw-bold'>Information</h6>
              <ListGroup className='link_list'>
                    {
                      footerInfoLinks.map((item,index)=>(
                          <ListGroupItem key={index}
                           className="border-0 link-item"><a href={item.url} >
                              {item.display}</a></ListGroupItem>
                      ))
                    }
              </ListGroup>
          </Col>

          <Col lg='3'>
              <h6 className='fw-bold'>Get In Touch</h6>
               <p>Malapuramm,Kerala</p>
              <p>Phone : 7594013460</p>
              <p>Email:binuathif@gmail.com</p>
          </Col>


       </Row>
    </Container>

</footer>
  )
}

export default Footer
