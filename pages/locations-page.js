import LocationItem from "../../locations/location-grid/location-item";
import { useEffect, useState } from "react";



export default function LocationGrid(){
    const[locations, setLocations] = useState([])
    

    useEffect(() =>{
        getLocations()
    },[])

    const getLocations = async() =>{
        const response = await fetch (`/api/locations`);
        const data = await response.json();
        setLocations(data)
    }

    return(
        <div className="w-full grid grid-cols-3 gap0-4">
            {locations.map((location) =>{
                <LocationItem key = {index} location={location} />
            })}
        </div>
    )
}