import React from "react"
import Hero from "../components/Homepage/hero/Hero"
import Skills from "@/components/Homepage/skills/index";


export default function Home() {

  return (
  <div>

        
       
       <div className="flex flex-col space-y-4 flex justify-center">

      <Hero title = "Khadra Dirie "  subtitle = "Junior Software Developer"/>

     
      <Skills />



      <a className="text-white font-semibold"  href="/locations-page">
        Go To Locations Page 
      </a>
  
      </div>

     

     
    </div>
   
  )
  }

