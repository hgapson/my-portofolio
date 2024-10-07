// src/components/HomePage/Contact/Contact.jsx

import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <div className="contact section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Questions?</h3>
        <h4 className="contact-sub-title padd-15">I AM AT YOUR SERVICES</h4>
        <div className="row">
          {/* Contact Info Items */}
          <div className="contact-info-item">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h4>Call Us On</h4>
            <p>+64223905160</p>
          </div>
          <div className="contact-info-item">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h4>Email</h4>
            <p>hgapson@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
            <h4>Instagram</h4>
            <p>gapson10</p>
          </div>
          <div className="contact-info-item">
            <div className="icon">
              <i className="fab fa-discord"></i>
            </div>
            <h4>Discord</h4>
            <p>gapson8022</p>
          </div>
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          I AM VERY RESPONSIVE TO MESSAGE
        </h4>
        {/* Contact Form */}
        <div className="row">
          <div className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
