import { useState } from "react";



function LocationItem() {
  
  const [likes,setLikes] = useState[0]
  
  const handleLikes = () => {
  let newLikes = likes +1;
  setLikes = newLikes
   }
  
    return (
    <div className="border rounded-lg p-4">
        <img src = {books.imgUrl} className = "rounded-lg" />
      
    </div>
  )
}

export default LocationItem

