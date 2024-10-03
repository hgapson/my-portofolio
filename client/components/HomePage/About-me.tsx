import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa'
import '../main.scss'

function AboutMe() {
  return (
    <section className="about section  " id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
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
                a passionate Full Stack Web Developer with extensive experience
                in building high-quality websites. With a year of hands-on
                experience, I specialize in designing and developing responsive
                web applications that not only function flawlessly but also
                provide an outstanding user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row padd-15 flex items-start justify-between">
        {/* Paragraph */}
        <div className="about-text  mr-10 flex-1">
          <p className="mb-6 font-serif ">
            I thrive on crafting sleek and efficient digital solutions. I love
            working on both front-end and back-end aspects of websites, making
            them scalable, accessible, and ensuring smooth user interactions.
          </p>
        </div>

        {/* Skills */}
        <div className="personal-info flex-1">
          <div className="about-skills">
            <h3 className="mb-4 text-3xl font-bold">Skills</h3>
            <ul className="skills-list grid grid-cols-3 gap-6">
              <li className="skill-item rounded-lg bg-gray-100 p-4 text-center shadow-md">
                <FaHtml5 className="mb-2 text-4xl text-red-500" />
                <span className="block font-medium">HTML5</span>
              </li>
              <li className="skill-item rounded-lg bg-gray-100 p-4 text-center shadow-md">
                <FaCss3Alt className="mb-2 text-4xl text-blue-500" />
                <span className="block font-medium">CSS3</span>
              </li>
              <li className="skill-item rounded-lg bg-gray-100 p-4 text-center shadow-md">
                <FaJs className="mb-2 text-4xl text-yellow-500" />
                <span className="block font-medium">JavaScript</span>
              </li>
              <li className="skill-item rounded-lg bg-gray-100 p-4 text-center shadow-md">
                <FaReact className="mb-2 text-4xl text-cyan-500" />
                <span className="block font-medium">React</span>
              </li>
              <li className="skill-item rounded-lg bg-gray-100 p-4 text-center shadow-md">
                <FaNodeJs className="mb-2 text-4xl text-green-500" />
                <span className="block font-medium">Node.js</span>
              </li>
              <li className="skill-item rounded-lg bg-gray-100 p-4 text-center shadow-md">
                <FaDatabase className="mb-2 text-4xl text-orange-500" />
                <span className="block font-medium">MongoDB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
