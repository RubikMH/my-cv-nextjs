import React from 'react'
import { FiActivity } from 'react-icons/fi'

const Header = () => (
  <header className="h-28 flex flex-col justify-between items-center border-b border-solid mb-6 border-primary">
    <h2 className=" mb-2 mt-7 ">
      RUBIK
      <span className="text-layout ">
        <FiActivity className="inline-block" />
      </span>
      MH
    </h2>
    <nav className="w-full">
      <ul className="w-full flex flex-wrap justify-evenly">
        <li className="cursor-pointer text-primary">HOME</li>
        <li className="cursor-pointer text-primary">SKILLS</li>
        <li className="cursor-pointer text-primary">ABOUT_ME</li>
        <li className="cursor-pointer text-primary">CONTACT_ME</li>
      </ul>
    </nav>
  </header>
)

export default Header
