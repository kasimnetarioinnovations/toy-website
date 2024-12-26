import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Fun from '../Components/Fun/Fun'
import Categories from '../Components/Categories/Categories'
import Carousal from '../Components/Carousal/Carousal'
import Header from '../Components/Header/Header'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <Fun/>
      <Categories/>
      <Carousal/>
     <Footer/>
    </div>
  );
};

export default Home;
