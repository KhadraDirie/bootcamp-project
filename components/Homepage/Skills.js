import React from 'react'

function Skills(props) {
  
  
    const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "HTML",
    "Tailwind CSS"
  ]
  const skillsList = () => {
    return (
   
      <ul> 
        {skills.map(skill => (
          <li className='text-white font-semibold list-outside ml-10 list-disc ' key={skill}>{skill}</li>
        ))}
      </ul>
    );
  };

  return skillsList(); 
}

export default Skills;


