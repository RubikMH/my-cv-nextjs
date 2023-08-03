/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SkillCard from '../SkillCard'

const Skills: React.FC<{ skillsData: Array<any> }> = ({ skillsData = [] }) => (
  <>
    <div className=" flex md:hidden mx-auto xl:max-w-6xl  max-w-2xl   w-full  flex-wrap justify-between ">
      <Swiper
        className="h-[400px] w-full  "
        autoplay
        loop
        speed={700}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
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
            <SkillCard rotate="rotate-0" title={elm.Title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className=" hidden  xl:flex mx-auto xl:max-w-6xl  max-w-2xl   w-full  flex-wrap justify-between ">
      <Swiper
        autoplay
        loop
        speed={700}
        className="h-[400px] w-full  "
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={50}
        slidesPerView={3}
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
              // icons={<FaReact size={60} className="hover:animate-pulse " />}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className=" hidden md:flex xl:hidden mx-auto xl:max-w-6xl  max-w-2xl   w-full  flex-wrap justify-between ">
      <Swiper
        autoplay
        loop
        speed={700}
        className="h-[400px] w-full  "
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={50}
        slidesPerView={2}
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
              // icons={<FaReact size={60} className="hover:animate-pulse " />}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
)

export default Skills
