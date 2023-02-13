import React, { useEffect, useState } from "react";
import LocationItem from "./location-item";
import { locations } from "./locations";



function LocationsGrid() {

  useEffect(() =>{

  },[])

  
  return (
    
       <div className="w-full grid grid-cols-3 gap-">
        {locations.map((location) =>(
           <LocationItem
            title={location.title}
            date = {location.date}
            imgUrl = {location.imgUrl}
            />
        ))}
    </div>
  )
}

export default LocationsGrid

