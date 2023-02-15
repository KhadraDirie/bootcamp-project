
//get a single location from database
//we can access locationId depending on what the user clicks 
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Hero from "@/components/Homepage/Hero"




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
    const {location} = data;
    setLocation(location);
  } catch (error) {
    console.log(error);
  
  }
}
  console.log(location);
  
  if (!location){
  return(
    <div className='text-white'>Loading...</div>

  )
}

  return (

    <div className='text-white'> 


    <Hero
      imgUrl ={location.imgUrl}
      title = {location.title}
      date = {location.date}
    />
    
</div>

  )
}

