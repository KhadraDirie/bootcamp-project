import skills from "./skills";

export default function Skills() {
  return (
    <div className="w-full flex flex-col mt-5 mb-8">
      <h3 className="font-semibold text-2xl text-black font-semibold p-3">
        Topics covered in this course
      </h3>
      <div className="bg-gray-100 rounded-lg p-5">
        <ul className="list-disc list-inside">
          {skills.map((skill) => {
            return <li className="text-gray-700 font-medium py-2">{skill}</li>;
          })}
        </ul>
      
      </div>
    </div>
  );
}
