import React from 'react'

import LocationsGrid from '../components/locations/locations-grid'
import LocationForm from '../components/locations/locations-grid/form'



function LocationsPage() {
  return (
    <div>
    
  

    <div className='tracking-widest text-5xl title-font font-medium text-black mb-1 m-5'>
        Locations 
    </div>
    
    <p className='tracking-widest text-md title-font font-medium text-black mb-1 m-5 '>In my spare time i like to travel.Below are some of the places i have traveled to.</p>
    <p className='tracking-widest text-md title-font font-medium text-black mb-1 m-5 '>Share your travels by adding a location using the form below! </p>
    <p className='tracking-widest text-md title-font font-medium text-black mb-1 m-5'>Dont forget to like which location you want to visit!</p>

    <div>
        <LocationsGrid />
    </div>
   <div>
    <LocationForm />
   </div>
<div className='m-5 py-4'>
  <a className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'  href="/search-locations">
        Go to search location
      </a>

</div>
    
  </div>
  )
}

export default LocationsPage
