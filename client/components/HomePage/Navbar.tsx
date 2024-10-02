import '../main.scss'
import { FaHome, FaUser, FaList, FaBriefcase, FaComments } from 'react-icons/fa' // Importing icons from react-icons

function NavLinks() {
  return (
    <aside className="aside fixed left-0 top-0 z-20 h-full w-[250px] bg-gray-800 text-white ">
      <div className="logo py-6 text-center">
        <a href="#">
          <span>G</span>apson
        </a>
      </div>
      <div className="nav-toggle">
        <span></span>
      </div>
      <ul className="mt-10 space-y-6">
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 rounded px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-indigo-400"
          >
            <FaHome /> <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 rounded px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-indigo-400"
          >
            <FaUser /> <span>About Me</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 rounded px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-indigo-400"
          >
            <FaList /> <span>Services</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 rounded px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-indigo-400"
          >
            <FaBriefcase /> <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 rounded px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-indigo-400"
          >
            <FaComments /> <span>Contact</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default NavLinks
