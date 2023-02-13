import React from 'react'
import Link from 'next/link'
import LocationsGrid from '../components/locations/locations-grid'
import LocationForm from '../components/locations/form'

function LocationsPage() {
  return (
    <div>
    <div>
       <nav>
        <ul className="flex ml-4  p-6 text-2xl justify-end py-2">
       <li><Link className="inline-block p-4 font-bold text-white hover:text-gray-500" href="/Home">Home</Link></li>
        <li><Link className="inline-block p-4 font-bold text-white  hover:text-gray-500" href="/locations-page">Locations</Link></li>
        <li><Link className="inline-block p-4 font-bold text-white  hover:text-gray-500" href="/search-locations">Search Locations</Link></li>
        </ul>
      </nav>
      </div>
  

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
  </div>
  )
}

export default LocationsPage
