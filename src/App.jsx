import { useState } from 'react'
import './App.css'
import Cards from './Components/Layouts/Cards'
import SellerCard from './Components/SellerCard'
import SpecialOffer from './Components/Layouts/SpecialOffer'
import Phone from './Components/Layouts/Phone'
import Banner from './Components/Layouts/Banner'
import Sales from './Components/Layouts/Sales'
import Navbar from './Components/Layouts/Navbar'
import SubHeader from './Components/Layouts/SubHeader'
import Footer from './Components/Layouts/Footer'





function App() {
 
  return (
    <>
    <Navbar/>
    <SubHeader/>
    <Banner/>
    <Sales/>
    <Cards/>
   <SellerCard/>
  <Phone/>
   <SpecialOffer/>
   <Footer/>
    </>
  )
}

export default App
