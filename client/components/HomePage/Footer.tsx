// src/components/Footer.js
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-items">
        <div className="footer-logo">
          <h4>
            <img
              src={process.env.PUBLIC_URL + '/images/passport.PNG'}
              alt="Logo"
            />
            GAPSON
          </h4>
        </div>
      </div>

      <div className="copy-rights">
        &copy; 2023 THE GAP. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
