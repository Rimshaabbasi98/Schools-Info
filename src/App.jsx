import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Schools from './components/Schools/Schools'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Private from './components/Schools/Private'
import Public from './components/Schools/Public'
import Boarding from './components/Schools/Boarding'
import Madrasa from './components/Schools/Madrasa'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/schools" element={<Schools/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/private" element={<Private/>}/>
      <Route path="/public" element={<Public/>}/>
      <Route path="/boarding" element={<Boarding/>}/>
      <Route path="/madrassa" element={<Madrasa/>}/>

     </Routes>
     <Footer/>
    </div>
  )
}

export default App
