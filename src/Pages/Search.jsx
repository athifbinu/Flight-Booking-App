import React from 'react'
import "../Style/Search.css"

import data from '../assets/Data/Datas'
import { useState } from 'react'

import { Link } from 'react-router-dom'



const Search = () => {


  const [from,setFrom]=useState('')

  const [to,setTo]=useState('')

  const [filter,setFilter]=useState([])


  const handleInputChange=(e)=>{
    const { name, value } = e.target;

    if (name === 'from') {
      setFrom(value);
    } else if (name === 'to') {
      setTo(value);
    }
  }


  const handleSearch=()=>{
      const filterData=data.filter((flight)=>flight.from===from && flight.To===to)



      console.log(filterData)

      setFilter(filterData)
      
  }

  return (
    <div className="container">
        <div className='serch-box'>
            <input  type='text' name='from' value={from} onChange={handleInputChange} placeholder='From'/>
            <input type='text' name='to' value={to} onChange={handleInputChange} placeholder='To'/>
            <button onClick={handleSearch}>Search</button>
        </div>

        

   {filter.length > 0 ? (
        <>
          {filter.map((flight, index) => (
            <div key={index} className="product-card">
              <img src={flight.Img} alt="" className="product-image" />
              <h3 className="product-name">{flight.flightName}</h3>
              <p className="product-description">From: {flight.from}</p>
              <p className="product-description">To: {flight.To}</p>
              <p className="product-price">${flight.Ticket}</p>
              <Link to="/Book">
                <button className='hero-btn'>Book Now</button>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <div className="not-found text-center m-5">Not Fount Enter Data ?</div>
      )}



    </div>





  )
}

export default Search


