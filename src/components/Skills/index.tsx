/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SkillCard from '../SkillCard'

const Skills: React.FC<{ skillsData: Array<any> }> = ({ skillsData = [] }) => (
  <div className=" mx-auto max-w-6xl pt-24 flex w-full  flex-wrap justify-between ">
    <Swiper
      className="h-[400px] f w-full"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {skillsData.map((elm: any) => (
        <SwiperSlide
          // eslint-disable-next-line no-underscore-dangle
          key={elm._id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SkillCard
            rotate="rotate-0"
            title={elm.Title}
            icons={<FaReact size={60} className="hover:animate-pulse " />}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default Skills
