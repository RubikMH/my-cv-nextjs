import React from 'react'

const LandingPage: React.FC<{ data: any }> = ({ data }) => (
  <div className="md:max-w-2xl xl:max-w-5xl max-w-xs w-full   mx-auto p-8 flex-col flex xl:flex-row justify-evenly bg-layout shadow-2xl rounded-md ">
    <div className="xl:w-1/2 w-full flex xl:flex-col justify-center">
      <img
        src={data.image}
        className=" md:w-3/4 xl:w-11/12 w-full  rounded-md"
        alt="logo"
      />
    </div>
    <div className="xl:w-1/2">
      <h1 className="text-center w-full">{data.name}</h1>
      <p className="text-justify xl:leading-8 leading-5">{data.info}</p>
    </div>
  </div>
)

export default LandingPage
