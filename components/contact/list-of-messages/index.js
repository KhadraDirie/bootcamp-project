
export default function ListOfMessages({isLoading,messages}){




    if (isLoading){

      return(

        <div className="w-full grid grid-cols-3 gap-4 mt-10 ">
            <div className ='bg-gray-300 py-3 px-6 rounded h-40 animate-pulse' />
            <div className ='bg-gray-300 py-3 px-6 rounded h-40 animate-pulse' />
            <div className ='bg-gray-300 py-3 px-6 rounded h-40 animate-pulse' />
        
    </div>
        
    )
        
    }
    
     
    return(
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {messages.map((message,index) => (
                <div key={index} className ='bg-gray-300 py-3 px-6 rounded'>
                    <p className="font-medium">Name: {message.name}</p> 
                    <p className="font-medium text-gray-400 italic ">From: {message.email ? message.email : "No email provided"}</p>
                    <p className="font-medium">Message: {message.message}</p>
                    </div>
            ))}
        
        </div>
    )

}

//we want to use the useEffect hook to make a request to the backend to get the values from the database when requested 