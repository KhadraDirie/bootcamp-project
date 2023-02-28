import Input from "../components/form/input"
import LocationItem from "../components/search/location-item";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header"
import { useEffect, useState } from "react"

export default function SearchLocation(){
    const[locations,setLocations] = useState([])
    const [input,setInput] = useState("");

    useEffect(() =>{
        getLocations();
    },[]);
        
    const getLocations = async () =>{
        try {
            const response = await fetch('/api/search-locations');
            const data = await response.json();
            setLocations(data);
        } catch (error) {
            console.error(error);
        }
    };

    const filterLocation = async () =>{
        const response = await fetch (`/api/search-locations?search=${input}`)
    }




    return(
        <div className="w-full">
            <div className="tracking-widest text-5xl title-font font-medium text-black mb-1 m-5">
                <Header name="Search" />
            </div>
            <Content> 
                <div className=" w-full md:w-6/12  lg:4-4/12 flex flex-row space-x-2"> 
                    <Input 
                    value = {input}
                    onChange ={value => setInput(value)} //everytime something is typed in the search input the value set in state (which is an empty string) updates to whatever is typed in the input
                    />
                    <button className="bg-rose-500 text-white px-6 py-2 rounded-md"
                    type ="button" 
                    
                    >
                        search
                    </button>
                   
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10"> 
                {locations.map((location) => (
  <LocationItem key={location.id} location={location}  />
))}
</div>

               
            </Content>

            <Footer title = "Go to contact"  href = "/contact"/>


            

            
        </div>
    )
    }

