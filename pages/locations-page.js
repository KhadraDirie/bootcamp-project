import React from 'react'

import LocationsGrid from '../components/locations/locations-grid'
import LocationForm from '../components/locations/form'

function LocationsPage() {
  return (
    <div>
    
  

    <div className='text-5xl text-white font-bold p-5'>
        Locations
    </div>
    <p className='text-white m-5 font-semi-bold text-1xl'>In my spare time i like to travel.Below are some of the places i have traveled to.</p>
    <p className='text-white m-5 font-semi-bold text-1xl'>Share your travels by adding a location using the form below! </p>

    <div>
        <LocationsGrid />
    </div>
    <div>
      <LocationForm />
    </div>

    <a className='font-bold text-white p-5'  href="/search-locations">
        Go to search location
      </a>

  </div>
  )
}

export default LocationsPage
