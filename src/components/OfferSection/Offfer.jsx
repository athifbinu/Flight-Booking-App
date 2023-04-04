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

          <Col lg='12' className='mb-5'>
             <div className="offer_top d-flex justify-content-between 
             align-items-center">
                <div className="offer_top_left w-50">
                  <h2>Books You Suits</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Dignissimos maxime, minus distinctio et incidunt 
                     officia consequatur, delectus repellendus, 
                    ab distinctio obcaecati repellendus culpa magnam! Expedita!</p>
                </div>
                <div className="w-50 text-end">
                  <button className='hero-btn'>See All</button>
                </div>
             </div>
          </Col>
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
