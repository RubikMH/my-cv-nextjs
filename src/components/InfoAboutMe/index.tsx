import React from 'react'
import { GoDotFill, GoDot } from 'react-icons/go'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { GiAstronautHelmet } from 'react-icons/gi'
import Link from 'next/link'

const InfoAboutMe: React.FC = () => (
  <div className="xl:max-w-6xl md:max-w-2xl  mx-auto mt-20 bg-layout rounded-md text-primary flex xl:flex-row flex-col ">
    <div className=" h-[30rem] max-w-lg w-full mx-auto mt-4 xl:mt-0 xl:w-1/3 bg-contain bg-no-repeat bg-center rounded-md">
      <img
        className="w-full h-full object-cover rounded-md"
        src="
      /myself.jpg"
        alt=""
      />
    </div>
    <div className=" px-6 py-4 min-h-[30rem] mx-auto my-8 xl:my-0  w-11/12 border border-solid  border-primary xl:w-3/4 relative bg-cover rounded-md">
      <div className="text-justify ">
        <h3>Contact To RubikMH</h3>
        <div className="w-full xl:relative">
          <code className="my-2 block text-base md:text-xl font-normal md:font-medium">
            you can contact me with all of Them :
          </code>
          <ul className="md:w-1/2 w-full flex flex-wrap">
            <li className="md:w-1/2 w-full text-lg font-light my-1">email:</li>
            <li className="md:w-1/2 w-full text-lg font-light my-1">
              mhsarabadani1@gmail.com
            </li>
            <li className="md:w-1/2 w-full text-lg font-light my-1">phone:</li>
            <li className="md:w-1/2 w-full text-lg font-light my-1">
              +989981502726
            </li>
            <li className="md:w-1/2 w-full text-lg font-light my-1">
              telegram:
            </li>
            <li className="md:w-1/2 w-full text-lg font-light my-1">
              @RubikMH
            </li>
            <li className="md:w-1/2 w-full text-lg font-light my-1">
              instagram:
            </li>
            <li className="md:w-1/2 w-full text-lg font-light my-1">
              its.rubikmh
            </li>
          </ul>
          <GiAstronautHelmet
            className="absolute text-secondary hidden md:block right-10 xl:right-20 bottom-32 xl:top-10"
            size={150}
          />
        </div>
        <div className="flex absolute   z-50 top-5 right-5">
          <GoDot size={25} className="cursor-pointer" />
          <GoDot size={25} className="cursor-pointer" />
          <GoDotFill size={25} className="cursor-pointer" />
        </div>
        <div className="absolute md:bottom-10 bottom-12  right-1 md:right-10 flex gap-4">
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
