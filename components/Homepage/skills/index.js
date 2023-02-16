
import skills from "./skills"

export default function Skills (){
    return(
        
        <div className="w-full flex flex-col mt-5 mb-10">
            <h3 className="font-semibold text-2xl text-rose-300 font-semibold px-8">
                Topics covered in this course: 
            </h3>
            <div>
            <ul className=" text-white m-8 font-medium px-8 list-disc">
               {skills.map((skill) => {
                return <li>{skill}</li>

               })}
               

            </ul>
            </div>
            </div>
     

    )
}