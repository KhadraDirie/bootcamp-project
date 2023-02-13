
import React from 'react'



function Hero(props) {
  return (
    <div>
      <h1 className='text-7xl justify-start m-5 p-6 text-white font-bold mx-auto' >{props.name}</h1>
      
      <h2 className='text-2xl m-5 justify-start font-semibold text-white'>{props.title}</h2>
      <div className='img'>
    
        </div> 
    
    </div>
  )
}

export default Hero
