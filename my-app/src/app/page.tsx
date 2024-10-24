import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default page