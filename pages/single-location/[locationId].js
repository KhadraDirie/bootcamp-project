
//get a single location from database
//we can access locationId depending on what the user clicks 
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'



export default function SingleLocation() {
   const router = useRouter();
   const [location, setLocation] = useState(null)
   const {locationId} =router.query; //destructing
 
    
// the usEffect hook makes a request to the API end point so that we can get a particular location and use it in a component
    useEffect(() => {
      if(!locationId) return;

        getLocation(locationId);  
   },[locationId]);

   const getLocation = async(id) =>{
  try {
    const response = await fetch(`/api/location-by-id?id=${id}`);
    const data = await response.json();
    const {locations} = data;
   
    setLocation(locations);
  } catch (error) {
    console.log(error);
  
  }
}

  
  if (!location){
  return(
    <div className='text-white'>Loading...</div>

  )
}

  return (
    <div className='text-white'> 
    <h1 className='text-5xl text-white font-semibold py-2 m-8'>Single Location Page</h1>
  
      <div>
        <img className='w-1/2 h-1/4 m-8 py-2'  src ={location.img_url} alt={location.title} />
        <h1 className='text-4xl m-8'>{location.title}</h1>
        <p className='text-2xl m-8 py-2'>{location.date}</p>
      </div>
    
   
   </div>
    


  )
}

