import skills from "./skills";

export default function Skills() {
  return (
    <div className="w-full flex flex-col mt-5 mb-8">
      <h3 className="font-semibold text-2xl text-white font-semibold  p-3">
        Topics covered in this course
      </h3>
      <div className="bg-rose-300 rounded-lg p-5 ">
        <ul className="list-none">
          {skills.map((skill) => {
            return <li className="text-white font-medium py-2 px-3">{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
