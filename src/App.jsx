import React, { useState } from "react";
import {
  GeneralInformation,
  Header,
  SaveResume,
  Education as EducationComponent,
  Project,
  CoCurricular,
  Display,
} from "./components";

function App() {
  const [generalInformation, SetGeneralInformation] = useState({
    fullName: "",
    phoneNumber:null,
    email: "",
    description: "",
  });
  const [Education, setEducation] = useState({
    undergraduate: {
      instituteName: "",
      CGPA: 0,
      degree: "",
      collegeCity: "",
      startDate: null,
      endDate: null,
    },
    higherSecondary: {
      hSchoolName: "",
      percentage_12: 0,
      stream: "",
      hSchoolCity: "",
      hSchoolStartDate: null,
      hSchoolEndDate: null,
    },
    Secondary: {
      schoolName: "",
      percentage_10: 0,
      schoolCity: "",
      SchoolStartDate: null,
      SchoolEndDate: null,
    },
  });
  const [projectData, setProjectData] = useState({
    project_1: {
      title: "",
      company: "",
      startDate: null,
      explain_1: "",
      explain_2: "",
      explain_3: "",
    },
    project_2: {
      title: "",
      company: "",
      startDate: null,
      explain_1: "",
      explain_2: "",
      explain_3: "",
    },
    project_3: {
      title: "",
      company: "",
      startDate: null,
      explain_1: "",
      explain_2: "",
      explain_3: "",
    },
  });
  return (
    <div className="bg-wallpaper flex  m-10 gap-x-14">
      <Header />
      <ul className="flex flex-col gap-4">
        <li>
          <SaveResume />
        </li>
        <li>
          <GeneralInformation
            generalInformation={generalInformation}
            SetGeneralInformation={SetGeneralInformation}
          />
        </li>
        <li>
          <EducationComponent
            Education={Education}
            setEducation={setEducation}
          />
        </li>
        <li>
          <Project projectData={projectData} setProjectData={setProjectData} />
        </li>
        <li>
          <CoCurricular />
        </li>
      </ul>
      <Display
            generalInformation={generalInformation}
            Education={Education}
            projectData={projectData}
          />
    </div>
  );
}

export default App;
