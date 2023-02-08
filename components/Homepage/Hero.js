
import React from 'react'



function Hero(props) {
  return (
    <div>
      <h1 className='text-5xl text-center m-5 text-purple-600 font-bold' >{props.name}</h1>
      
      <h2 className='text-2xl text-center font-semibold'>{props.title}</h2>
      <img src={props.image} alt={props.alt} />
    
    </div>
  )
}

export default Hero
