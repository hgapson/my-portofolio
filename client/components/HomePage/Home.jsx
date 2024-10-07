// src/App.js
import React, { useState } from 'react'
import '../../styles/main.scss' // Import main.scss
import Aside from './Aside/Aside'
import Intro from './Intro/Intro'
import About from './about/About'
import Services from './Services/Services'
//import Portfolio from './components/Portfolio'
import Contact from './Contact/Contact'
import StyleSwitcher from './StyleSwitcher/StyleSwitcher'

function App() {
  const [isAsideActive, setIsAsideActive] = useState(false)

  // Toggle the sidebar
  const toggleAside = () => {
    setIsAsideActive(!isAsideActive)
  }

  return (
    <div className=" home main-container">
      {/* Sidebar */}
      <Aside isActive={isAsideActive} toggleAside={toggleAside} />

      {/* Main Content */}
      <div className="main-content">
        {/* Home Section */}
        <Intro />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Style Switcher */}
      <StyleSwitcher />
    </div>
  )
}

export default App
