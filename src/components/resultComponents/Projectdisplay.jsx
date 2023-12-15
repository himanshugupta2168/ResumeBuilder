import React from 'react'

function Projectdisplay({project}) {
  // console.log(project)
  return (
    <div>
        <div className="heading flex justify-between">
            <h3 className='font-bold'>{project.title}</h3>
            <h3 className='font-bold'>{project.startDate}</h3>
        </div>
        <p className='text-sm italic'>{project.company}</p>
        <ul className='list-disc pl-6'>
          <li>{project.explain_1}</li>
          <li>{project.explain_2}</li>
          <li>{project.explain_3}</li>
        </ul>
    </div>
  )
}

export default Projectdisplay