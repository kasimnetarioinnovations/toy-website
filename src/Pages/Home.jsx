import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Fun from '../Components/Fun/Fun'
import Categories from '../Components/Categories/Categories'
import Carousal from '../Components/Carousal/Carousal'
// import { Navbar } from 'react-bootstrap'
import Navbars from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbars/>
      <Fun />
      <Categories/>
      <Carousal/>
     <Footer/>
    </div>
  )
}

export default Home
