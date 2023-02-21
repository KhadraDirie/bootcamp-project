import React from 'react'
import LocationSearch from '../components/locations/locations-grid/location-search'


export default function SearchLocations(){

  return (
    <div>
       
      <LocationSearch />
      <div className='m-5'>
          <a className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline' href="/contact">
        Go to contact page
      </a>
      </div>

    
    </div>
  )

}
