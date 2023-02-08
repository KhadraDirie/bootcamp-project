import LocationItem from "./Location-item";
import { useEffect,useState } from "react";

import React from 'react'

export default function LocationsGrid(){

}
const locations = [locations, setLocations] = useState

useEffect(() =>{
    getLocations()
}, []) // the useEffect hook is calling the getLocations function once immediately after the component has been mounted and wont re-run on subsequent renders of the component 

const getLocations = async () =>{
    const response = await fetch (`/api/locations`)
    const data = await response.json()
    setLocations(data)
}

return (
  <div className="w-full grid grid-cols-3 gap-4">
    {locations.map((location, index) => (
      <LocationItem key={location.id} location={location} />
    ))}
  </div>
)





