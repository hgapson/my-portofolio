// src/components/Services/Services.js
import React from 'react'
import './Services.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Services = () => {
  const services = [
    {
      icon: 'fa-mobile-alt',
      title: 'Web Design',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio tempore aut.',
    },
    {
      icon: 'fa-laptop-code',
      title: 'Web Development',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio tempore aut.',
    },
    {
      icon: 'fa-palette',
      title: 'UI/UX Design',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio tempore aut.',
    },
    {
      icon: 'fa-code',
      title: 'Backend Development',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio tempore aut.',
    },
    {
      icon: 'fa-search',
      title: 'SEO Optimization',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio tempore aut.',
    },
    {
      icon: 'fa-bullhorn',
      title: 'Digital Marketing',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio tempore aut.',
    },
  ]

  return (
    <section className="service section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="service-item padd-15" key={index}>
              <div className="service-item-inner">
                <div className="icon">
                  <i className={`fa ${service.icon}`}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
