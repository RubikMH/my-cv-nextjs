import React from 'react'
import { HiMiniRectangleStack } from 'react-icons/hi2'

const EffectsCards: React.FC = () => (
  <div className=" w-full hidden xl:block ">
    <div className="w-full  justify-evenly  absolute -z-10 -top-24 flex mx-auto ">
      <HiMiniRectangleStack className="text-secondary" size={200} />
      <HiMiniRectangleStack className="text-secondary" size={200} />
      <HiMiniRectangleStack className="text-secondary" size={200} />
    </div>
  </div>
)

export default EffectsCards
