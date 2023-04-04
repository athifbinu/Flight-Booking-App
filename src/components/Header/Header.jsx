import React, { useRef } from 'react'
import { Container } from 'reactstrap'
import "./Header.css"


import {MdOutlineFlightTakeoff} from "react-icons/md"

import {AiOutlineMenu} from "react-icons/ai"


const navlink =[
    {
        display:'Home',
        url:'#'

    },
    {
        display:'About',
        url:'#'

    },
    {
        display:'Offers',
        url:'#'

    },
    {
        display:'Suits',
        url:'#'

    },
    {
        display:'Destinations',
        url:'#'

    },

]


const Header = () => {

    const menuRef=useRef()

    const menuTogle=()=>menuRef.current.classList.toggle
    ('active__menu')
  return (
    <header className="header">
    <Container>
      <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
          <h2 className=" d-flex align-items-center gap-1">
            <i><MdOutlineFlightTakeoff/></i> Dreams
          </h2>
        </div>

        <div className="nav d-flex align-items-center gap-5">
          <div className="nav__menu" onClick={menuRef} >
            <ul className="nav__list">
              {navlink.map((item, index) => (
                <li key={index} className="nav__item">
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right">
            <p className="mb-0 d-flex align-items-center gap-2">
               {/* loging */}

            </p>
          </div>
        </div>
        
        <div className="mobile__menu">
          <span> 
        
            <i><AiOutlineMenu/></i>
          </span>
        </div>
      </div>
    </Container>
  </header>
  )
}

export default Header
