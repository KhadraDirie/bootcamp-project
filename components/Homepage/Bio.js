import React from "react";


function Bio(props) {
  return (
    <div className="ml-10 px-2">
      <h1 className=" font-medium text-gray-800 ">{props.mybio}</h1>
    </div>
    
  )
}

export default Bio
