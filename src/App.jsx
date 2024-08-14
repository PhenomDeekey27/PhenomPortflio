import React from 'react'
import "./index.css"
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Mywork from './Components/Mywork'
import Contact from './Components/Contact'
const App = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Mywork></Mywork>
      <Contact></Contact>
 

    </div>
  )
}

export default App