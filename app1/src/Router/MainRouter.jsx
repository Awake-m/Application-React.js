import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Computer from '../Pages/Computer'
import Tablets from '../Pages/Tablets'
import Dron from '../Pages/Dron'
import Audio from '../Pages/Audio'
import Mobile from '../Pages/Mobile'
import Tv from '../Pages/Tv'
import Wearbletech from '../Pages/Wearbletech'
import Sale from '../Pages/Sale'
import Header from '../Componet/Header'

function MainRouter() {
  return (
    <div>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}>Shop All</Route>
        <Route path='/Computer' element={<Computer/>}>Computer</Route>
        <Route path='/Tablets' element={<Tablets/>}>Tablets</Route>
        <Route path='/Dron' element={<Dron/>}>Dron</Route>
        <Route path='/Audio' element={<Audio/>}>Audio</Route>
        <Route path='/Mobile' element={<Mobile/>}>Mobile</Route>
        <Route path='/Tv' element={<Tv/>}>Tv</Route>
        <Route path='/Wearbletech' element={<Wearbletech/>}>Wearbletech</Route>
        <Route path='/Sale' element={<Sale/>}>Sale</Route>
      
      </Routes>

      
    </div>
  )
}

export default MainRouter
