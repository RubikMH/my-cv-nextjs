import React from 'react'
import { GoDotFill, GoDot } from 'react-icons/go'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const InfoAboutMe: React.FC = () => (
  <div className="max-w-6xl mx-auto mt-20 bg-layout rounded-md text-primary flex ">
    <div className="bg-[url(/myself.jpg)] h-[30rem] w-1/3 bg-contain bg-no-repeat bg-center rounded-md">
      <div className="bg-gray-800 w-full  bg-opacity-30 h-full rounded-md" />
    </div>
    <div className=" px-6 py-4 h-[30rem] w-3/4 relative bg-cover rounded-md">
      <div className="text-justify ">
        <h3>Contact To RubikMH</h3>
        <code className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
          praesentium expedita aliquam maiores! Voluptatum possimus quas a
          reiciendis dolore in ducimus ipsam culpa, id, nobis totam suscipit
          itaque iure fugiat, maiores molestiae quasi minus architecto eligendi
          distinctio quia aliquam. Inventore, fugit. Rem vitae totam, modi unde,
          corrupti incidunt minima tempora optio voluptatum magni quod? Fuga
          ratione magnam repellat quibusdam distinctio!
        </code>
        <div className="flex absolute top-5 right-5">
          <GoDot size={25} className="cursor-pointer" />
          <GoDot size={25} className="cursor-pointer" />
          <GoDotFill size={25} className="cursor-pointer" />
        </div>
        <div className="absolute bottom-10 right-10 flex gap-4">
          <FaGithubSquare
            size={35}
            className="cursor-pointer text-primary hover:text-[#000000] transition-all duration-300"
          />
          <AiFillLinkedin
            size={35}
            className="cursor-pointer text-primary hover:text-[#0A66C2] transition-all duration-300"
          />
          <AiFillTwitterSquare
            size={35}
            className="cursor-pointer text-primary hover:text-[#1D9BF0] transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </div>
)

export default InfoAboutMe
