
import React from 'react'

export default function HomePage({title, subtitle, imgUrl}) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="w-full flex flex-col items-center py-4 space-y-4 md:flex-row md:space-x-4">
        <div className="w-1/2 md:w-1/3">
          <img src={imgUrl} className="rounded-full w-60" />
        </div>
        <div className="w-1/2 md:w-2/3 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-5xl font-bold text-gray-800 text-center md:text-left md:text-7xl leading-tight tracking-tight mt-10 md:mt-0">
            {title}
          </h1>
          <p className="text-2xl text-gray-700 text-center md:text-left md:text-3xl font-medium max-w-2xl mt-5">
            {subtitle}
          </p>
        
        </div>
      </div>
    </div>
  )
}
