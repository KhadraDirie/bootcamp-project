import React from 'react'

function LocationSearch() {

  return (
    <div className='p-5'>
      <h1 className='text-5xl text-white font-semibold py-5'
      >Search Location</h1>
        <form className='form mb-4 w-1/4 p-'>
        <label className='block text-white font-medium mb-2' for="location"></label>
        <input 
        type="text"
        name='location'
        placeholder='Location'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500'
        />
        </form>
        <div className='mb-4 py-4' type='submit'>
<button className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Search</button>
</div>
    </div>
  )
}

export default LocationSearch
