import {useState } from "react";
import { locations } from "./locations";


function LocationItem({title,date,imgUrl}) {
  const [likes, setLikes] = useState(0)
  
  const handleIncrementLike = () => {
    let newValue = likes + 1;
    let details = {
      title: title,
      date: date,
      imgUrl:imgUrl,
      likes: newValue
    }
    
    onLike(details);
    
    setLikes(newValue);
  }
    return (
    <div className="p-4">
        <img src={locations.imgUrl}/>
        <p>{locations.title}</p>
        <p>{locations.date}</p>
        <p>{likes} likes</p>


        <button 
          className = "bg-green-900 text-white px-3 py-1"
          onClick={handleIncrementLike}>Like</button>
 
      
//     </div>
  )
}

export default LocationItem
