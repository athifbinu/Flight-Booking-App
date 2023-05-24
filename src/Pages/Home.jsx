import React from 'react'
import { Container,Row,Col } from 'reactstrap'

import heroImg from "../assets/images/pexels-pixabay-358220.jpg"
import aboutImg from "../assets/images/about.jpeg"

import OfferCard from '../Components/ui/OfferCard'



import fistClass from ".././assets/images/fistclass.jpg"
import Economy from ".././assets/images/econmy.webp"
import Premium from ".././assets/images/premiom.webp"
import { useState } from 'react'


import TourImg1 from ".././assets/images/tour1.jpeg"
import TourImg2 from ".././assets/images/tour4.avif"
import TourImg3 from ".././assets/images/tour6.avif"


import chooseImg from "../assets/images/a380.avif"


import ReactPlayer from 'react-player'

import Packagecard from '../Components/ui/Packagecard'
import { Link } from 'react-router-dom'


const Home = () => {



  const offerData=[
    {
      id:1,
      title:"First Class",
      imgUrl:fistClass
    },

    {
      id:2,
      title:"Economy Class",
      imgUrl:Economy,
    },
    {
      id:3,
      title:"Premium",
      imgUrl:Premium
    }
  ]


  
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



   const [showVideo,setShowVideo]=useState(false)

  return (
    <div>
      <Container>
        <section>
        <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
              <h2 className='mb-4'>Now EveryOne Can Fly ✈ </h2>
              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Unde doloribus numquam
                 </p>
                 <div className="serche">
                   <Link to="/Search">
                    <button>Start Now</button>
                   </Link>
                 </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
                   <img src={heroImg} alt="" className='w-100 br ' />
            </Col>
          </Row>
     
        </section>
    



    <section>
      
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
    </section>

    <section>
          
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
    </section>


    {/* offer */}


    <section>
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
    </section>




    {/* choose */}

    <section>
      <Row>
        <Col lg="6" md="6">
          <div className="choose__content">
            <h2>Why Choose Us To Fly</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt mollitia nostrum harum eos praesentium odit a sed quod
              aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
              minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores cupiditate facilis provident quidem accusamus impedit
              tenetur laboriosam debitis nisi eius!
            </p>
          </div>
        </Col>

        <Col lg="6" md="6">
          <div className="choose__img">
            {showVideo ? (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=FpgWsF4DWw4"
                controls
                width="100%"
                height="350px"
              />
            ) : (
              <img src={chooseImg} alt="" className="w-100" />
            )}

            {!showVideo && (
              <span className="play__icon">
                <i
                  class="ri-play-circle-line"
                  onClick={() => setShowVideo(!showVideo)}
                ></i>
              </span>
            )}
          </div>
        </Col>
      </Row>
  </section>



  <section>
  <Row>
        <Col lg="12" className="text-center mb-5">
          <h2 className="fw-bold">Lets Move On Your Dream Places</h2>
        </Col>

        {TourData.map((item) => (
          <Col lg="3" md="4" className="mb-4" key={item.id}>
            <Packagecard item={item} />
          </Col>
        ))}
      </Row>
  </section>







      </Container>


    </div>
  )
}

export default Home
