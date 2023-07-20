/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { RiJavascriptLine } from 'react-icons/ri'
import { TbBrandTypescript } from 'react-icons/tb'
import SkillCard from '../SkillCard'

const Skills = () => (
  <div className=" mx-auto max-w-6xl pt-24 flex w-full  flex-wrap justify-between ">
    <SkillCard
      rotate="rotate-3"
      title="React"
      icons={<FaReact size={60} className="animate-spin-slow" />}
    />
    <SkillCard
      rotate="-rotate-1"
      title="Javascript"
      icons={<RiJavascriptLine size={60} className="animate-pulse" />}
    />
    <SkillCard
      rotate="rotate-3"
      title="Typescript"
      icons={<TbBrandTypescript size={60} className="animate-bounce" />}
    />
  </div>
)

export default Skills
