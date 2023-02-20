import React from 'react'
import LocationSearch from '../components/locations/locations-grid/location-search'

function SearchLocations() {
  return (
    <div>
       
      <LocationSearch />

      <a className="text-white font-semibold p-5"  href="/contact">
        Go to contact page
      </a>
    </div>
  )
}

export default SearchLocations
