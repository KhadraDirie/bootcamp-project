
import Input from "../form/input"

export default function SearchLocation(){
    return(
        
        <div className="tracking-widest text-5xl title-font font-medium text-black mb-1 m-5">
           <h1>Search Location</h1>
           <div>
       
        <form className='form mb-4 py-5 '>
        
          <div className="mb-4">
            <Input
              placeholder='Search...'
              type = 'text'
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-rose-500'
            />
            </div>
          </form> 
          </div>
          </div>
    )
}