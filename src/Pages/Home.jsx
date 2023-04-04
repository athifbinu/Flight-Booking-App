import React,{Fragment} from 'react'
import Header from '../components/Header/Header'
import HeroSection from "../components/Hero-section/HeroSection"
import CompanySections from '../components/companySection/CompanySections'
import About from '../components/Aboutus/About'
import Offers from "../components/OfferSection/Offfer"
import Choose from '../components/ChooseUs/Choose'
import Packages from '../components/Packages/Packages'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSection/>
        <CompanySections/>
        <About/>
        <Offers/>
        <Choose/>
        <Packages/>
        <Footer/>
    </Fragment>
  
  )
}

export default Home
