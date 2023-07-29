/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { RiJavascriptLine } from 'react-icons/ri'
import { TbBrandTypescript } from 'react-icons/tb'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SkillCard from '../SkillCard'

const Skills = () => (
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
      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="rotate-3"
          title="React"
          icons={<FaReact size={60} className="animate-spin-slow" />}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="-rotate-1"
          title="Javascript"
          icons={<RiJavascriptLine size={60} className="animate-pulse" />}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="rotate-3"
          title="Typescript"
          icons={<TbBrandTypescript size={60} className="animate-bounce" />}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="rotate-3"
          title="React"
          icons={<FaReact size={60} className="animate-spin-slow" />}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="-rotate-1"
          title="Javascript"
          icons={<RiJavascriptLine size={60} className="animate-pulse" />}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="rotate-3"
          title="Typescript"
          icons={<TbBrandTypescript size={60} className="animate-bounce" />}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="rotate-3"
          title="React"
          icons={<FaReact size={60} className="animate-spin-slow" />}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="-rotate-1"
          title="Javascript"
          icons={<RiJavascriptLine size={60} className="animate-pulse" />}
        />
      </SwiperSlide>

      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SkillCard
          rotate="rotate-3"
          title="Typescript"
          icons={<TbBrandTypescript size={60} className="animate-bounce" />}
        />
      </SwiperSlide>
    </Swiper>
  </div>
)

export default Skills
