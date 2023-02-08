
import React from 'react'



function Hero(props) {
  return (
    <div>
      <h1 className='text-5xl text-center m-5 text-purple-600 font-bold' >{props.name}</h1>
      
      <h2 className='text-2xl text-center font-semibold'>{props.title}</h2>
      <div className='img'>
      <img src='./images/me.jpg' alt=''></img>
        </div> 
    
    </div>
  )
}

export default Hero
