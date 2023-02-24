
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
    <h1 className='tracking-widest text-md title-font text-4xl  text-black mb-1 m-5'>Single Location Page</h1>
  
      <div>
        <img className='w-96 m-8 py-2 rounded-lg'  src ={location.img_url} alt={location.title} />
        <h1 className='tracking-widest font-large title-font font-medium text-black mb-1 m-5'>{location.title}</h1>
        <p className='tracking-widest text-md title-font font-medium text-black mb-1 m-5'>{location.date}</p>
      </div>

      <div className='m-5 py-4'>
  <a className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'  href="/locations-page">
        Go back to locations
      </a>

</div>

    


    
   
   </div>
    


  )
}

