import React from "react"
import Hero from "../components/Homepage/Hero"
import Bio from "../components/Homepage/Bio"
import Skills from "../components/Homepage/Skills"
import Image from "next/image";
import Navbar from "../components/Homepage/Navbar"



export default function Home() {

  return (
  <div>

       <Navbar /> 
       
       <div className="flex flex-col space-y-4 ">

      <Hero name = "Khadra Dirie "  title = "Junior Software Developer"/>
     
     <Image className="px-2 content-center ml-10 m5 rounded-full" src="/assets/img.jpg" alt="Image" width ={300} height={300} />
      
     <h1 className="text-2xl font-semibold ml-10">Bio:</h1>
      <Bio className='rounded-xl ml-10 justify-evenly' mybio = " Hi, my name is Khadra and I am currently enrolled on a Software Development Bootcamp"/>
    
      <h1 className="text-xl font-semibold ml-10 underline-offset-4">Skills:</h1>
      <Skills />
      
      <a href="/locations-page">
        Go To Locations Page 
      </a>

      {/* <div>
          <button
              className="bg-blue-500 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Click me
            </button>
         </div> */}

     
    </div>
    </div>
  )
  }

