
import React from 'react'



function Hero(props) {
  return (
    <div>
      <h1 className='text-7xl justify-start m-5 text-purple-800 font-bold' >{props.name}</h1>
      
      <h2 className='text-2xl m-5  font-semibold'>{props.title}</h2>
      <div className='img'>
    
        </div> 
    
    </div>
  )
}

export default Hero
