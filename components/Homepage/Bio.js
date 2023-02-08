import React from "react";
import Link from "next/link";




function Bio(props) {
  return (
    <div className="ml-10 px-2">
      <h1 className="text-2xl font-medium">{props.mybio}</h1>
    </div>
    
  )
}

export default Bio
