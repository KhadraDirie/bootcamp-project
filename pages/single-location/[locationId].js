
//get a single location from database
//we can access locationId depending on what the user clicks 

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

//how can we query this  and get it from our list of locations so we can data for each location
export default function SingleLocation() {
   const router = useRouter();
   const [location, setLocation] = useState(null)
   const {locationId} =router.query; //destructing
    
// the usEffect hook makes a request to the API end point so that we can get a particular location so we can use it in a component
    useEffect(() =>{
        getLocation(locationId) //when component is rendered is going to get a location based on the id that is passed in and will set it to the state
   },[locationId])

   const getLocation = async(id) =>{
   const response = await fetch (`/api/location-by-id?id=${id}`);
   const data =  await response.json();
   const {location} = data;
   setLocation(location);

 }

 console.log(location)


  return (
    <div className='text-white'>
      Single Location Page
    </div>
  )
}

