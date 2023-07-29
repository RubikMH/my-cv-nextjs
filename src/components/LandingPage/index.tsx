import React from 'react'

const LandingPage: React.FC<{ data: any }> = ({ data }) => (
  <div className="max-w-4xl mx-auto p-8 flex justify-evenly bg-layout shadow-2xl rounded-md ">
    <div className="w-1/2 flex flex-col justify-center">
      <img src={data.image} className=" w-11/12  rounded-md" alt="logo" />
    </div>
    <div className="w-1/2">
      <h1 className="text-center w-full">{data.name}</h1>
      <p className="text-justify">{data.info}</p>
    </div>
  </div>
)

export default LandingPage
