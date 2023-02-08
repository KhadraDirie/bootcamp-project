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
          <li className='bg bg-pink-100 font-bold list-outside ml-10' key={skill}>{skill}</li>
        ))}
      </ul>
    );
  };

  return skillsList(); 
}

export default Skills;


