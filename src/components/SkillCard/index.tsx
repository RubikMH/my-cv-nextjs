/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import { FaReact } from 'react-icons/fa6'
import {
  SiTypescript,
  SiJavascript,
  SiJss,
  SiTailwindcss,
  SiStorybook,
  SiWebpack,
  SiPython,
  SiAntdesign,
  SiRedux,
  SiReduxsaga,
  SiGit,
} from 'react-icons/si'
import { IoLogoPwa } from 'react-icons/io5'

import { CgWebsite } from 'react-icons/cg'
import { TbBrandNextjs } from 'react-icons/tb'
import { Transition } from '@headlessui/react'

interface IProps {
  title: string
  rotate: string
  score: number
}

const SkillCard: React.FC<IProps> = ({ title, rotate, score }) => {
  const [icon, setIcon] = useState(<FaReact size={60} />)
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    switch (title) {
      case 'React':
        setIcon(<FaReact size={60} />)
        break
      case 'Typescript':
        setIcon(<SiTypescript size={60} />)
        break
      case 'Javascript':
        setIcon(<SiJavascript size={60} />)
        break
      case 'JSS':
        setIcon(<SiJss size={60} />)
        break
      case 'NextJs':
        setIcon(<TbBrandNextjs size={60} />)
        break
      case 'Tailwind CSS':
        setIcon(<SiTailwindcss size={60} />)
        break
      case 'StoryBook':
        setIcon(<SiStorybook size={60} />)
        break
      case 'Webpack':
        setIcon(<SiWebpack size={60} />)
        break
      case 'Python':
        setIcon(<SiPython size={60} />)
        break
      case 'HTML & CSS':
        setIcon(<CgWebsite size={60} />)
        break
      case 'AntDesign':
        setIcon(<SiAntdesign size={60} />)
        break
      case 'Redux':
        setIcon(<SiRedux size={60} />)
        break
      case 'React-Redux':
        setIcon(<SiReduxsaga size={60} />)
        break
      case 'PWA':
        setIcon(<IoLogoPwa size={60} />)
        break
      case 'Git':
        setIcon(<SiGit size={60} />)
        break
      default:
        break
    }
    setTimeout(() => {
      setIsShowing(true)
    }, 700)
  }, [])

  return (
    <div
      className={`max-w-xs w-full  flex flex-col h-72 justify-evenly shadow-2xl items-center bg-secondary text-background ${rotate} px-6 py-4 rounded-md`}
    >
      {icon}
      <h3 className="mt-2">{title}</h3>
      <div className="w-full">
        <Transition
          show={isShowing}
          enter="transition-all duration-[500ms]"
          enterFrom="w-0"
          enterTo="w-full"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={'  bg-layout h-5 relative  rounded-md   '}
            style={{ width: `${score}%` }}
            title={`my score is ${score}`}
          />
          <div className="w-full flex justify-between items-center">
            <span className="block">0</span>
            <span className="block">100</span>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default SkillCard
