import React, { useEffect, useState } from "react";
import LocationItem from "./location-item";



function LocationsGrid() {
  const [locations, setLocations] = useState([]);


  useEffect(() =>{
    getLocations()

  },[])
  
  const getLocations = async () => {
    const response = await fetch(`/api/locations`);
    const data = await response.json();
    setLocations(data);
}

  
  return (
    
       <div className="w-full grid grid-cols-3 p-4">
        {locations.map((location, index) => (
           <LocationItem key={index} location={location} />
          
        ))}
    </div>
  )
}

export default LocationsGrid

