import React from 'react';
import Projectdisplay from "./resultComponents/Projectdisplay"
import QualificationDisplay from "./resultComponents/QualificationsDisplay"

function Display({generalInformation, Education, projectData}) {
  // console.log(generalInformation);
  // console.log({Education});
  // console.log(projectData)
  return (
    <div className='w-[794px] h-[1123px] bg-white mb-10 p-6'>
      <div className="general ">
        <h1 className='font-bold text-2xl flex justify-center'>{generalInformation.fullName}</h1>
        <div className="contacts flex justify-center border-b-[1px] border-black pb-2">
          <ul className=' flex  gap-8 list-disc '>
            <li>{generalInformation.phoneNumber}</li>
            <li>{generalInformation.email}</li>
          </ul>
        </div>
        <p className='break-words max-w-[700px] text-sm  pt-2 '>{generalInformation.description}</p>
      </div>
      <div className="projects">
        <div className="border-b-[1px] border-black">
          <h3>RELEVANT PROJECT EXPERIENCE </h3>
        </div>
        <div className="projects">
          {Object.values(projectData).map((project, i)=>(<Projectdisplay key={i} project={project}/>))}
        </div>
      </div>
      <div className='qualifications'>
        <div className="border-b-[1px] border-black mb-2">
          <h3>EDUCATION</h3>
        </div>
        <QualificationDisplay Education={Education}/>
      </div>
      
    </div>
  )
}

export default Display