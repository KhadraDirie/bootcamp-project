import React from "react";

import Link from 'next/link';


function Navbar() {
  return (
    <div className="bg-blue-500" >
       <nav>
        <ul className="flex ml-4  p-6 text-2xl justify-end ">
       <li><Link className="inline-block p-4 font-bold text-black hover:text-gray-500" href="/Home">Home</Link></li>
        <li><Link className="inline-block p-4 font-bold text-black  hover:text-gray-500" href="/Locations">Locations</Link></li>
        <li><Link className="inline-block p-4 font-bold text-black  hover:text-gray-500" href="/Search Locations">Search Locations</Link></li>
       
        </ul>
      </nav>
    </div>
  )
  
}

 export default Navbar;
