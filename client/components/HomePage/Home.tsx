//import News from './News'

import Intro from './Intro'
import AboutMe from './About-me'
import EducationExperience from './Educ-Exp'

const Home = () => {
  return (
    <main className="main-container">
      {/* Your main content here */}
      <div className="main-content">
        <div>
          <Intro />
        </div>
        <div>
          <AboutMe />
        </div>
        <div>
          <EducationExperience />
        </div>
      </div>
    </main>
  )
}

export default Home
