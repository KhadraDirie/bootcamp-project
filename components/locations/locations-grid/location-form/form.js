import React,{useState} from 'react'



function LocationForm() {
  const [location,setLocation] = useState("");
  const [date,setDate] = useState("")

  const handleChangeLocation = (value) =>{
    const location = value;
    setLocation (location)
  }

  const handleChangeDate = (value) =>{
    const setDate = value;
    setDate (date);
  }


 const handleSubmit = async (event) =>{
    const response = await fetch (`/api/add-location?location=${location}&date=${date}`)
    const data = await response.json()
 }

     setLocation("")
     setDate ("")
    
  
  return (
    <div className='container text-black p-6 rounded-lg w-1/2'>
    <div>
    <h1 className='tracking-widest text-md title-font text-3xl text-black mb-1 m-5 '>Add Your Location</h1>
    <form className='form mb-4'>
        <label className='block text-black font-medium mb-2' for="location"></label>
        <input 
        type="text"
        name='location'
        placeholder='Location'
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500'
        tabIndex='1' />
        onChange={handleChangeLocation}
        
        
        <label className='block text-black font-medium mb-2 py-1' for='date'></label>
        <input
        type ="text"
        name='date'
        placeholder='Date'
        className='bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500'
        tabIndex='2' />
    </form>
    </div>
  
<div className='mb-4 py-4' type='submit'>
<button onClick={handleSubmit} className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
</div>
</div>
)
}


export default LocationForm