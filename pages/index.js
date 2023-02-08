import React from "react"
import Hero from "../components/Homepage/Hero"
import Bio from "../components/Homepage/Bio"
import Skills from "../components/Homepage/Skills"
import Link from "next/link";
import Image from "next/image";


function index() {
 return (
  <div>
 <nav className="flex items-center justify-between p-6 bg-gray-500 text-left ">
      <ul className= "flex items-center space-x-4 font-medium  bg-gray-500 ">
        <li><Link className="text-black hover:text-gray-500 bg-blend-normal "href="/" >Home</Link></li> 
        <li><Link className="text-black hover:text-gray-500" href="/Locations">Locations</Link></li>
        <li><Link className="text-black hover:text-gray-500" href="/Search Location">Search Location</Link></li>
      </ul>
    </nav> 
    
    <div className="flex flex-col space-y-4 ">
        
      <Hero name = "Khadra Dirie "  title = "Junior Software Developer" image ="./images/me.jpg" alt ="Image"/>
      <Image src="/images/img.jpg" alt="Image" width ={300} height={300}/>
      <Bio mybio = " Hello, my name is Khadra and I am currently enrolled on a Software Development Bootcamp learning how to code"/>
    
      <Skills />
    </div>
    </div>
  )
}

export default index