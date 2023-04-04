import React from 'react'
import { Container,Row,Col } from 'reactstrap'



import PakageCard from "./PackageCard"

import TourImg1 from "../../assets/images/tour1.jpeg"
import TourImg2 from "../../assets/images/tour4.avif"
import TourImg3 from "../../assets/images/tour6.avif"
const Packages = () => {


const TourData=[
    {
      id: "01",
      title: "Dubai",
      imgUrl: TourImg1,
      rating: 1.7,
    },
    {
      id: "02",
      title: "Bhali",
      imgUrl: TourImg2,
      rating: 1.7,
    },
  
    {
      id: "03",
      title: "Kerala",
      imgUrl: TourImg3,
      rating: 1.7,
    },
  
    {
      id: "04",
      title: "Bhali",
      imgUrl: TourImg2,
      rating: 1.7,
    },
  ]
  return (
    <section>
    <Container>
      <Row>
        <Col lg="12" className="text-center mb-5">
          <h2 className="fw-bold">Lets Move On Your Dream Places</h2>
        </Col>

        {TourData.map((item) => (
          <Col lg="3" md="4" className="mb-4" key={item.id}>
            <PakageCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
    
  )
}

export default Packages
