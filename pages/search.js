import LocationItem from "../components/search/location-item"

export default function Search (){
    return(
        <div className="w-full">
            <LocationItem />

            <div className='m-5 py-4'>
  <a className='bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline'  href="/contact">
        Go to contact
      </a>

</div>


        </div>
    )
}