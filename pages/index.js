import React from "react"
import Hero from "../components/Homepage/hero/Hero"
import Skills from "@/components/Homepage/skills/index";

import Content from "../components/shared/content"

export default function Home() {
 
  return (
  
  <div className="w-full">
  

      <Hero 
      imgUrl="./assets/img.jpg"
      title = "Khadra Dirie "  
      subtitle = "Junior Software Developer"/>

     <Content>
    
       
      <h3 className="text-white text-3xl font-bold m-4">My Story</h3>
      <p className="text-white m-4 text-1xl">I am a career changer with a legal background, having studied law at university. However, in early 2021, I picked up coding and found myself really enjoying it. Since then, I have completed a few introductory coding courses as well as some self-learning and decided that I want to make the switch into the tech industry.</p>
      <p className="text-white m-4">I am currently taking part in a software development bootcamp that will equip me with the necessary skills and experience to land my first role in tech as a developer. I am committed to learning and growing in this field and excited for what the future holds.</p>
     
      <Skills />

      

      <div> 

      <a className="text-white font-semibold p-3"  href="/locations-page">
        Go To Locations Page 
      </a>
      </div>
      </Content>
  
      </div>
   
  )
  }

