import React from 'react'
import { Container,Row,Col } from 'reactstrap'

import OfferCard from  "./OfferCard"


import firstClass from "../../assets/images/fistclass.jpg"
import Economy from "../../assets/images/econmy.webp"
import Premium from "../../assets/images/premiom.webp"

import "./Offer.css"
const Offfer = () => {


  const offerData=[
    {
      id:1,
      title:"Fist Class",
      imgUrl:firstClass
    },

    {
      id:2,
      title:"Economy Class",
      imgUrl:Economy
    },

    {
      id:3,
      title:"Premium Class",
      imgUrl:Premium 
    },

  ]


  
  return (
    <section>
      <Container>
        <Row>
          {
            offerData.map(item=>(
              <Col lg='4'>
                <OfferCard key={item.id} item={item}/>
            
              </Col>
            ))
          }
        </Row>
      </Container>
      
    </section>
  )
}

export default Offfer
