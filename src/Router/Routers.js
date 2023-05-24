import React from 'react'


import Home from '../Pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'

import Search from '../Pages/Search'
import SearchResult from '../Pages/SearchResult'
import Book from '../Pages/Book'
const Routers = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Result' element={<SearchResult/>}/>
          <Route path='/Book' element={<Book/>}/>


      </Routes>
    </div>
  )
}

export default Routers
