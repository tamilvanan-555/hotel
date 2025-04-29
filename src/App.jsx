import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'
import About from './pages/About'

const App = () => {

  const isOwnerpath =useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerpath && <Navbar/> }
      {false && <HotelReg />}
       <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/room/:id' element={<RoomDetails/>} />
          <Route path='my-bookings'element={<MyBookings/>}/>
          <Route path='/owner' element={<Layout/>}>
               <Route index element={<Dashboard/>}/>
               <Route path="add-room" element={<AddRoom/>}/>
               <Route path="list-room" element={<ListRoom/>}/>
          </Route>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App