
//database persist data, long term memory
//setting likes in state =  short term memory 
import { useState } from "react";





export default function LocationItem({imgUrl,title,date}) {
    const [likes, setLikes] = useState(0);

    

    const handleLike = () => {
        let newLikes = likes + 1;
        setLikes(newLikes);
    }

    return (
      
        <div className="border rounded-lg p-2 m-2  ">
            <img src={imgUrl} className=" rounded-lg lg:h-96 md:h-36 w-full object-cover object-center " />
           
            <a className="rounded-lg lg:h-96 md:h-36 w-full object-cover object-center" href="/single-location/1">{title}</a>
            <p className="tracking-widest text-md title-font font-small text-black mb-1">{date}</p>
            <button
                onClick={handleLike}
                type="button"
                className="bg-gray-200 px-2 py-1 rounded text-black"
            >
                Like ({likes} likes)
            </button>
            
        </div>
      
    )
}