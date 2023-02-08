import React from "react"
import Hero from "../components/Homepage/Hero"
import Bio from "../components/Homepage/Bio"
import Skills from "../components/Homepage/Skills"


function index() {
  return (
    <div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#"></a>Home</li> 
        <li>Locations</li>
        <li>Search Locations</li>
      </ul>

    </nav>
    <div className="flex flex-col space-y-4 ">
        
      <Hero name = "Khadra Dirie "  title = "Junior Software Developer" image ="./images/me.jpg" alt ="Image"/>
      
      <Bio mybio = " Hello, my name is Khadra and I am currently enrolled on a Software Development Bootcamp learning how to code"/>
      
      <Skills />
    </div>
    </div>
  )
}

export default index