import Input from "../form/input"
import Header from "../shared/header"
import Content from "../shared/content"
import Footer from "../shared/footer"

export default function SearchLocation(){
    return(
        <div className="w-full">
            <div className="tracking-widest text-5xl title-font font-medium text-black mb-1 m-5">
                <Header name="Search" />
            </div>
            <Content> 
                <div className="flex flex-row space-x-2">
                    <Input />
                    <button className="bg-rose-500 text-white px-6 py-2 rounded-md"
                    type ="button"
                    >
                        search
                    </button>
                   
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                    <div className=" w-full h-40 bg-rose-100">
                    </div>
                    <div className=" w-full h-40 bg-rose-100">
                    </div>
                    <div className=" w-full h-40 bg-rose-100">
                    </div>

                </div>
            </Content>

            <Footer title = "Go to contact"  href = "/contact"/>


            

            
        </div>
    )
}
