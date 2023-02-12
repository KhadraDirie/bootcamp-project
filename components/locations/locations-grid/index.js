import LocationItem from "./location-item"
import { locations } from "../components/locations/locations-grid/locations";


function LocationsGrid() {
 



    return (
    
      <div className="w-full grid grid-cols-3 gap-4">
        {locations.map((location) =>(
            <LocationItem 
            title={locations.title}
            date = {locations.date}
            imgUrl = {locations.imgUrl}/>
        ))}
      </div>
    
  )
}

export default LocationsGrid
