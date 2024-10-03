import '../main.scss'
import { FaHome, FaUser, FaList, FaBriefcase, FaComments } from 'react-icons/fa' // Importing icons from react-icons

function NavLinks() {
  return (
    <div className="aside">
      <div className="logo">
        <a href="#">
          <span>G</span>apson
        </a>
      </div>
      <div className="nav-toggle">
        <span></span>
      </div>
      <ul>
        <li>
          <a href="#" className="active">
            <i className="fa fa-home"></i>Home
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-user"></i>About Me
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-list"></i>Services
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-briefcase"></i>Portofolio
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-comments"></i>Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks
