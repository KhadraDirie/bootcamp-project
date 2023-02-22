

import { useState } from "react";
import Link from "next/link";


export default function LocationItem({ location}) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        let newLikes = likes + 1;
        setLikes(newLikes);
    }

    return (
      
        <div className="border rounded-lg p-2 m-2  ">
            <img src= {location.imgUrl} className=" rounded-lg lg:h-96 md:h-36 w-full object-cover object-center"/>
            <Link href={`/single-location/${location.id}`} className="text-xl font-medium">{location.title} </Link>


            <p className="tracking-widest text-md title-font font-small text-black mb-1">{location.date}</p>
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