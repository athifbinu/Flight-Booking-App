import React,{Fragment} from 'react'
import Header from '../components/Header/Header'
import HeroSection from "../components/Hero-section/HeroSection"
import CompanySections from '../components/companySection/CompanySections'
import About from '../components/Aboutus/About'
import Offers from "../components/OfferSection/Offfer"

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSection/>
        <CompanySections/>
        <About/>
        <Offers/>
    </Fragment>
  )
}

export default Home
