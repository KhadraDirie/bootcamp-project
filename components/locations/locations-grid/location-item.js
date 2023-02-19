

import { useState } from "react";


export default function LocationItem({ title,date,imgUrl }) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        let newLikes = likes + 1;
        setLikes(newLikes);
    }

    return (
       
        <div className="border rounded-lg p-4">
            <img src={imgUrl} className="rounded-lg w-176 " />
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="text-white">{date}</p>
            <button
                onClick={handleLike}
                type="button"
                className="bg-gray-500 px-2 py-1 rounded text-white"
            >
                Like ({likes} likes)
            </button>
            
        </div>
    )
}