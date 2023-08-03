import React from 'react'
import { GoDotFill, GoDot } from 'react-icons/go'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { GiAstronautHelmet } from 'react-icons/gi'
import Link from 'next/link'

const InfoAboutMe: React.FC = () => (
  <div className="max-w-6xl mx-auto mt-20 bg-layout rounded-md text-primary flex ">
    <div className="bg-[url(/myself.jpg)] h-[30rem] w-1/3 bg-contain bg-no-repeat bg-center rounded-md">
      <div className="bg-gray-800 w-full  bg-opacity-30 h-full rounded-md" />
    </div>
    <div className=" px-6 py-4 h-[30rem] w-3/4 relative bg-cover rounded-md">
      <div className="text-justify ">
        <h3>Contact To RubikMH</h3>
        <div className="w-full relative">
          <code className="my-2 block text-xl font-medium">
            you can contact me with all of Them :
          </code>
          <ul className="w-1/2 flex flex-wrap">
            <li className="w-1/2 text-lg font-light my-1">email:</li>
            <li className="w-1/2 text-lg font-light my-1">
              mhsarabadani1@gmail.com
            </li>
            <li className="w-1/2 text-lg font-light my-1">phone:</li>
            <li className="w-1/2 text-lg font-light my-1">+989981502726</li>
            <li className="w-1/2 text-lg font-light my-1">telegram:</li>
            <li className="w-1/2 text-lg font-light my-1">@RubikMH</li>
            <li className="w-1/2 text-lg font-light my-1">instagram:</li>
            <li className="w-1/2 text-lg font-light my-1">its.rubikmh</li>
          </ul>
          <GiAstronautHelmet className="absolute right-20 top-10" size={150} />
        </div>
        <div className="flex absolute top-5 right-5">
          <GoDot size={25} className="cursor-pointer" />
          <GoDot size={25} className="cursor-pointer" />
          <GoDotFill size={25} className="cursor-pointer" />
        </div>
        <div className="absolute bottom-10 right-10 flex gap-4">
          <Link href={'https://github.com/RubikMH'}>
            <FaGithubSquare
              size={35}
              className="cursor-pointer text-primary hover:text-[#000000] transition-all duration-300"
            />
          </Link>
          <Link
            href={
              'https://www.linkedin.com/in/mohamad-hasan-sarabadani-0a1935277/'
            }
          >
            <AiFillLinkedin
              size={35}
              className="cursor-pointer text-primary hover:text-[#0A66C2] transition-all duration-300"
            />
          </Link>
          <Link href={'https://twitter.com/Mohamadhasans11'}>
            <AiFillTwitterSquare
              size={35}
              className="cursor-pointer text-primary hover:text-[#1D9BF0] transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default InfoAboutMe
