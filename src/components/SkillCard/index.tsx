import React from 'react'

interface IProps {
  title: string
  icons: React.JSX.Element
  rotate: string
}

const SkillCard: React.FC<IProps> = ({ title, icons, rotate }) => (
  <div
    className={`max-w-xs flex flex-col justify-start shadow-2xl items-center bg-secondary text-background ${rotate} px-6 py-4 rounded-md`}
  >
    {icons}
    <h3 className="mt-2">{title}</h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
      perspiciatis.
    </p>
  </div>
)

export default SkillCard
