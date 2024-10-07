// src/components/Home/Home.js
import React from 'react'
import './Intro.scss'
import profileImage from '../../public/swas160 gapson-NZ Passport-35x45 mm.jpg' // Adjust the path accordingly

const Home = () => {
  return (
    <section className="home section">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Credu Gapson</span>
            </h3>
            <h3 className="my-profession">
              I am a <span className="typing">Full Stack Web Developer</span>
            </h3>
            <p className="font-serif">
              I am a Web Developer with extensive experience of one year. My
              expertise is to design and create websites and much more...
            </p>
            <a href="#contact" className="btn hire-me">
              Hire me
            </a>
          </div>
          <div className="home-image padd-15">
            <img src={profileImage} alt="Gapson" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
