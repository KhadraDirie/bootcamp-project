import Input from "../form/input"
import Header from "../shared/header"
import Content from "../shared/content"
import Footer from "../shared/footer"
import { useEffect, useState } from "react"

export default function SearchLocation(){
    const[locations,setLocations] = useState([])

    useEffect(() =>{
        getLocations();
    },[]);
        
    const getLocations = async () =>{
        try {
            const response = await fetch('./api/search-locations');
            const data = await response.json();
            setLocations(data);
        } catch (error) {
            console.error(error);
        }
    };



    return(
        <div className="w-full">
            <div className="tracking-widest text-5xl title-font font-medium text-black mb-1 m-5">
                <Header name="Search" />
            </div>
            <Content> 
                <div className=" w-full md:w-6/12  lg:4-4/12 flex flex-row space-x-2"> 
                    <Input />
                    <button className="bg-rose-500 text-white px-6 py-2 rounded-md"
                    type ="button"
                    >
                        search
                    </button>
                   
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
  {locations.map((location) => (
    <div key={location.id} className="w-full bg-rose-200 h-40"></div>
  ))}
</div>

                  

               
            </Content>

            <Footer title = "Go to contact"  href = "/contact"/>


            

            
        </div>
    )
    }

