import React from 'react'
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import View from './View'
import Header from './Header'


const Navigation = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/new-contact' element={<Create/>}></Route>
        <Route path='/update-contact/:id' element={<Update/>}></Route>
        <Route path='/view/:id' element={<View/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
