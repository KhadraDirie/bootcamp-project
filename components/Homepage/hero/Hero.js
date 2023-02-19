
import React from 'react'


export default function ({title,subtitle,imgUrl}){
 return (
  
    <div className='w-full max-w-6xl mx-auto'>
    <div className="w-full flex flex-col items-center py-4 space-y-4 md:flex-row md:space-x-4">
      
                 <div className='width-48'>
                 <img src={imgUrl} className="rounded-full w-96" />
</div>  
                <div className="w-full text-center md:text-lef">
                    <h1
                        className={`font-bold text-7xl text-rose-400 p-4 
                        
                        `}
                    >
                        {title}
                    </h1>
                    <p className="text-2xl text-white m-8 font-bold">{subtitle}</p>
                </div>

    </div>

  </div>
 )
}



