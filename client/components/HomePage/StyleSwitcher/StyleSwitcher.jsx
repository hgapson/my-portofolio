// src/components/HomePage/StyleSwitcher/StyleSwitcher.jsx

import React, { useState } from 'react'
import './Switcher.scss'

const StyleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)

  const setActiveStyle = (color) => {
    const alternateStyles = document.querySelectorAll('.alternate-style')
    alternateStyles.forEach((style) => {
      if (style.getAttribute('title') === color) {
        style.removeAttribute('disabled')
      } else {
        style.setAttribute('disabled', 'true')
      }
    })
  }

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div
        className="style-switcher-toggler s-icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon">
        <i className="fas fa-moon"></i>
      </div>
      <h4>Theme Color</h4>
      <div className="colors">
        <span
          className="color-1"
          onClick={() => setActiveStyle('color-1')}
        ></span>
        <span
          className="color-2"
          onClick={() => setActiveStyle('color-2')}
        ></span>
        <span
          className="color-3"
          onClick={() => setActiveStyle('color-3')}
        ></span>
        <span
          className="color-4"
          onClick={() => setActiveStyle('color-4')}
        ></span>
        <span
          className="color-5"
          onClick={() => setActiveStyle('color-5')}
        ></span>
      </div>
    </div>
  )
}

export default StyleSwitcher
