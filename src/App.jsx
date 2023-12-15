import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
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
  const [Certificates, setCertificates]=useState({
      certificate_1_url:null,
      certificate_1_name :null,
      certificate_2_url:null,
      certificate_2_name :null,
      certificate_3_url:null,
      certificate_3_name :null,

  })
  const generatePDF = () => {
    const input = document.getElementById("displayComponent");
  
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 size width
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjusting canvas height based on A4 width
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };
  return (
    <div className="bg-wallpaper flex  m-10 gap-x-14">
      <Header />
      <ul className="flex flex-col gap-4">
        <li>
          <SaveResume generatePDF={generatePDF}/>
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
          <CoCurricular Certificate={Certificates} setCertificates={setCertificates} />
        </li>
      </ul>
      <div id="displayComponent" className="w-[794px] h-[1123px]">
        <Display
              generalInformation={generalInformation}
              Education={Education}
              projectData={projectData}
              Certificates ={Certificates}
            />
      </div>
    </div>
  );
}

export default App;
