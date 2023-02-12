import React from 'react'
import Link from 'next/link'
import LocationsGrid from '../components/locations/locations-grid'

function LocationsPage() {
  return (
    <div>
    <div>
       <nav>
        <ul className="flex ml-4  p-6 text-2xl justify-end">
       <li><Link className="inline-block p-4 font-bold text-white hover:text-gray-500" href="/Home">Home</Link></li>
        <li><Link className="inline-block p-4 font-bold text-white  hover:text-gray-500" href="/locations-page">Locations</Link></li>
        <li><Link className="inline-block p-4 font-bold text-white  hover:text-gray-500" href="/search-locations">Search Locations</Link></li>
        </ul>
      </nav>
      </div>
  

    <div className='text-5xl text-white'>
        Locations
    </div>

    <div>
        <LocationsGrid />
    </div>
  </div>
  )
}

export default LocationsPage
