// src/components/Portfolio/Portfolio.js
import React from 'react'
import './Portfolio.scss'
import image1 from '../../public/image-1.jpg'
import image2 from '../../public/image-2.jpg'
import image3 from '../../public/image-3.jpg'
import image4 from '../../public/image-4.jpg'
import image5 from '../../public/image-5.jpg'
import image6 from '../../public/image-6.jpg' // Assuming you have an index.js exporting all images

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, img: image1, alt: 'Project 1' },
    { id: 2, img: image2, alt: 'Project 2' },
    { id: 3, img: image3, alt: 'Project 3' },
    { id: 4, img: image4, alt: 'Project 4' },
    { id: 5, img: image5, alt: 'Project 5' },
    { id: 6, img: image6, alt: 'Project 6' },
  ]

  return (
    <section className="portfolio section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map((item) => (
            <div className="portfolio-item padd-15" key={item.id}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={item.img} alt={item.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
