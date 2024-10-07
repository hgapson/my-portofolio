// src/components/About/About.js
import React from 'react'
import './About.scss'

const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3 className="font-serif font-semibold">
                  I am Credu Gapson and <span>Full Stack Developer</span>
                </h3>
                <p className="font-serif">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam hic aut ullam placeat praesentium tenetur vitae amet
                  voluptatem. Unde maxime veritatis rem dicta voluptate suscipit
                  laudantium blanditiis aut omnis molestiae!
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="personal-info padd-15 md:w-1/2">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Email: <span>hgapson@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Location: <span>Hamilton, New Zealand</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone: <span>+64223905160</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="button padd-15">
                    <a href="#" className="btn">
                      Download CV
                    </a>
                    <a href="#contact" className="btn hire-me">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>

              <div className="skills padd-15 md:w-1/2">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>React JS</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '85%' }}
                      ></div>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>GitHub</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '90%' }}
                      ></div>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>TypeScript & JavaScript</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '50%' }}
                      ></div>
                      <div className="skill-percent">50%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>REST APIs</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '82%' }}
                      ></div>
                      <div className="skill-percent">82%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Tailwind, SAAS & CSS</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '85%' }}
                      ></div>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Firebase & Knex</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '75%' }}
                      ></div>
                      <div className="skill-percent">75%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Express</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: '58%' }}
                      ></div>
                      <div className="skill-percent">58%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2023
                        </h3>
                        <h4 className="timeline-title">
                          Applied Software Development (Level 6)
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ab eaque obcaecati possimus! Totam itaque animi
                          quam at fugiat perferendis dicta quos quibusdam eaque
                          natus! Quisquam laboriosam dicta illo consequatur in!
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2014 - 2021
                        </h3>
                        <h4 className="timeline-title">
                          Bachelor Degree in Education and Information
                          Technology
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ab eaque obcaecati possimus! Totam itaque animi
                          quam at fugiat perferendis dicta quos quibusdam eaque
                          natus! Quisquam laboriosam dicta illo consequatur in!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2023
                        </h3>
                        <h4 className="timeline-title">
                          Applied Software Development (Level 6)
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ab eaque obcaecati possimus! Totam itaque animi
                          quam at fugiat perferendis dicta quos quibusdam eaque
                          natus! Quisquam laboriosam dicta illo consequatur in!
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2014 - 2021
                        </h3>
                        <h4 className="timeline-title">
                          Bachelor Degree in Education and Information
                          Technology
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ab eaque obcaecati possimus! Totam itaque animi
                          quam at fugiat perferendis dicta quos quibusdam eaque
                          natus! Quisquam laboriosam dicta illo consequatur in!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
