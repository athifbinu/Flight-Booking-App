import React from 'react'
import "../Style/Search.css"

import data from '../assets/Data/Datas'
import { useState } from 'react'

const Search = ({flight,setFilteredFlight}) => {
    
    const [flightName, setFlightName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');


    const handleSearch=(e)=>{
        e.preventDefault()


        const filtered=flight.filter((flight)=>{

            const lowerFlightName=flightName.toLowerCase();
            const lowerForm=from.toLowerCase();
            const lowerTo=to.toLowerCase()

            return(
                flight.name.toLowerCase().includes(lowerFlightName)&&
                flight.from.toLowerCase().includes(lowerForm)&&
                flight.to.toLowerCase().includes(lowerTo)
            )
        })


        setFilteredFlight(filtered)


        setFlightName("");
        setFrom("");
        setTo("");
    }


    console.log(data)
  return (
    <form onSubmit={handleSearch}>
        <input type='text' placeholder='Flight Name' value={flightName}
        onChange={(e)=>setFlightName(e.target.value)} />

<input type='text' placeholder='From' value={from}
        onChange={(e)=>setFrom(e.target.value)} />


<input type='text' placeholder='To' value={to}
        onChange={(e)=>setTo(e.target.value)} />


      <button type='submit'>Search</button>
       
    </form> 
  )
}

export default Search
