
//database persist data, long term memory
//setting likes in state =  short term memory 
import { useState } from "react";
import Link from "next/link";
import LikeButton from "./like-button";





export default function LocationItem({location}) {
    const [likes, setLikes] = useState(+location.likes);
    console.log(location)

    

    const handleLike = async () => {
        let newLikes = likes + 1;
        const id = +location.id
        const response = await fetch (`/api/increase-likes?id=${id}&likes=${newLikes}`)
        const data = await response.json()
        setLikes(newLikes);
    }
    //when user click likes the async function is liked, the new number of likes is calculated, and then find out what the id of the particular book, we know what that is because inside the book item ww're passing in  a property called locations which contains the id
    //we then make a call to the api endpoint

  

    return (
      
        <div className="border rounded-lg p-2 m-2  ">
            <img src={location.img_url} className=" rounded-lg lg:h-96 md:h-36 w-full object-cover object-center " />

            <Link href={`/single-location/${location.id}`} className="tracking-widest text-md title-font font-medium text-black mb-1 ">
                {location.title}
            </Link>
            <p className="tracking-widest text-md title-font font-small text-black mb-1">{location.date}</p>
            <LikeButton handleLike={handleLike} likes={likes} />
            
        </div>
      
    )
}