import React,{useState} from 'react'



function LocationForm() {
  

 const handleSubmit = (onClick) =>{
  alert("button clicked")

 }
    
  
  return (
    <div className='container text-white bg-black p-6 rounded-lg w-1/2'>
    <div>
    <h1 className='text-4xl p-5'>Add Your Location</h1>
    <form className='form mb-4"'>
        <label className='block text-white font-medium mb-2' for="firstName">Country</label>
        <input 
        type="text"
        name='firstName'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        tabIndex='1' />
        
        
        <label className='block text-white font-medium mb-2' for='lastName'>City</label>
        <input
        type ="text"
        name='lastName'
        className='bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        tabIndex='2' />
    </form>
    </div>
    <label className='block text-white font-medium mb-2' for ="email">Date</label>
    <input 
    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
    type='email'
    name='email'
    placeholder='date visited'
    tabIndex='3' />
<div className='mb-4 ' type='submit'>
<button onClick={handleSubmit} className='bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
</div>
</div>
)
}


export default LocationForm



   


