import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import Talent from './components/Talent'
import Contact from './components/Contact'
import FooterSec from './components/FooterSec'

const App = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
    {/* Header */}
    <Header/>
    {/* Hero section */}
    <Hero/>
    {/* Project Section */}
    <Project/>
    {/* Talent Section */}
    <Talent/>
    {/* Contact Us */}
    <Contact/>
    {/* Footer section */}
    <FooterSec/>
    </div>
  )
}

export default App