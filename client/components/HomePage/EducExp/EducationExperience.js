// src/components/EducationExperience/EducationExperience.js
import React from 'react'
import './EducationExperience.scss'

const EducationExperience = () => {
  const timelines = [
    {
      year: '2023',
      title: 'Applied Software Development (Level 6)',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eaque obcaecati possimus! Totam itaque animi quam at fugiat perferendis dicta quos quibusdam eaque natus! Quisquam laboriosam dicta illo consequatur in!',
    },
    {
      year: '2014 - 2021',
      title: 'Bachelor Degree in Education and Information Technology',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eaque obcaecati possimus! Totam itaque animi quam at fugiat perferendis dicta quos quibusdam eaque natus! Quisquam laboriosam dicta illo consequatur in!',
    },
  ]

  return (
    <div className="education-experience">
      <div className="education padd-15">
        <h3 className="title">Education</h3>
        <div className="row">
          <div className="timeline-box padd-15">
            <div className="timeline shadow-dark">
              {timelines.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="circle-dot"></div>
                  <h3 className="timeline-date">
                    <i className="fa fa-calendar"></i> {item.year}
                  </h3>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="experience padd-15">
        <h3 className="title">Experience</h3>
        <div className="row">
          <div className="timeline-box padd-15">
            <div className="timeline shadow-dark">
              {timelines.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="circle-dot"></div>
                  <h3 className="timeline-date">
                    <i className="fa fa-calendar"></i> {item.year}
                  </h3>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationExperience
