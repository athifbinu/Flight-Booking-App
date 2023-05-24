import React from 'react'


import Header from './Header'
import Routers from '../Router/Routers'
import Footer from './Footer'

const layout = () => {
  return (
    <div>
    <Header/>
    <div>
      <Routers/>
    </div>
    <Footer/>
  </div>
  )
}

export default layout
