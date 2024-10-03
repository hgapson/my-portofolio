import React from 'react'
import '../main.scss'
import passport from '../public/swas160 gapson-NZ Passport-35x45 mm.jpg'

function Intro() {
  return (
    <section className="home section">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello my name is <span className="name"> Credu Gapson</span>
            </h3>
            <h3 className="my-profession">
              I am a <span className="typing">Full Stack Web Developer</span>
            </h3>
            <p className="font-serif">
              I am a Web Developer with extensive experience of one year. My
              expertise is to design and create website and many more...
            </p>
            <a href="#contact" className="btn cv">
              Download my CV
            </a>
          </div>
          <div className="home-image padd-15">
            <img src={passport} alt="Gapson" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
