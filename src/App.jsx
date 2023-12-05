import React, { useState } from 'react'
import {GeneralInformation, Header, SaveResume, Education, Project, CoCurricular} from "./components"

function App() {
    const [generalInformation, SetGeneralInformation]= useState({
      fullName:"",
      phoneNumber:0,
      email:"",
      description:"",
    });
    console.log(generalInformation)
  return (
    <div className='bg-wallpaper flex  m-10 gap-x-14'>
      <Header/>
        <ul className='flex flex-col gap-4'>
          <li><SaveResume/></li>
          <li><GeneralInformation generalInformation={generalInformation} SetGeneralInformation={SetGeneralInformation}/></li>
          <li><Education/></li>
          <li><Project/></li>
          <li><CoCurricular/></li>
        </ul>
    </div>
  )
}

export default App