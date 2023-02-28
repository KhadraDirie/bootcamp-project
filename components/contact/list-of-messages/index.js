
export default function ListOfMessages({isLoading,messages,onDelete}){

    const handleDelete = async (id) => {
        
        await fetch(`/api/delete-contact-messages?id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        onDelete()
    }
      


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

                    <button 
                    type="button"
                    className={`bg-rose-500 text-white font-medium px-3 py-1 rounded mt-2`}
                    onClick={() => handleDelete(message.id)}
                    >
                        Delete


                    </button>
                    </div>
            ))}
        
        </div>
    )

}

//we want to use the useEffect hook to make a request to the backend to get the values from the database when requested 