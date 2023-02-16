import React from "react"
import Hero from "../components/Homepage/hero/Hero"
import Skills from "@/components/Homepage/skills/index";
import Header from "../components/shared/header"
import Content from "../components/shared/content"

export default function Home() {

  return (
  <div className="w-full">
  

      <Hero 
      title = "Khadra Dirie "  
      subtitle = "Junior Software Developer"/>

     <Content>
      <div> 
      <Skills />



      <a className="text-white font-semibold"  href="/locations-page">
        Go To Locations Page 
      </a>
      </div>
      </Content>
  
      </div>
   
  )
  }

