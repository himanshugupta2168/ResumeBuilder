import React from 'react'
import {GeneralInformation, Header, SaveResume, Education, Project} from "./components"

function App() {
  return (
    <div className='bg-wallpaper flex  m-10 gap-x-14'>
      <Header/>
        <ul className='flex flex-col gap-4'>
          <li><SaveResume/></li>
          <li><GeneralInformation/></li>
          <li><Education/></li>
          <li><Project/></li>
        </ul>
    </div>
  )
}

export default App