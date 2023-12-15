import React from "react";

function QualificationsDisplay({ Education }) {
  console.log(Education);
  return (
    <div>
      <div className="level">
        <div className="header flex justify-between">
          <h3 className="font-bold">
            {Education.undergraduate.instituteName},{" "}
            {Education.undergraduate.collegeCity}
          </h3>
          <h3 className="font-bold">
            {Education.undergraduate.startDate
              ?.substr(0, Education.undergraduate.startDate.length - 3)
              .split("-")
              .reverse()
              .join("-")}{" "}
            -{" "}
            {Education.undergraduate.endDate
              ?.substr(0, Education.undergraduate.endDate.length - 3)
              .split("-")
              .reverse()
              .join("-")}
          </h3>
        </div>
        <p className="text-sm italic">{Education.undergraduate.degree}</p>
        <p>Cumulative GPA : {Education.undergraduate.CGPA} / 10.00</p>
      </div>


      <div className="level mt-2">
        <div className="header flex justify-between">
          <h3 className="font-bold">
            {Education.higherSecondary.hSchoolName}, 
            {Education.higherSecondary.hSchoolCity}
          </h3>
          <h3 className="font-bold">
            {Education.higherSecondary.hSchoolStartDate
              ?.substr(0, Education.higherSecondary.hSchoolStartDate.length - 3)
              .split("-")
              .reverse()
              .join("-")}{" "}
            -{" "}
            {Education.higherSecondary.hSchoolEndDate
              ?.substr(0, Education.higherSecondary.hSchoolEndDate.length - 3)
              .split("-")
              .reverse()
              .join("-")}
          </h3>
        </div>
        <p className="text-sm italic">{Education.higherSecondary.stream}</p>
        <p>Percentage : {Education.higherSecondary.percentage_12} %</p>
      </div>


      <div className="level mt-2">
        <div className="header flex justify-between">
          <h3 className="font-bold">
            {Education. Secondary.schoolName}, 
            {Education.Secondary.schoolCity}
          </h3>
          <h3 className="font-bold">
            {Education.Secondary.SchoolStartDate
              ?.substr(0, Education.Secondary.SchoolStartDate.length - 3)
              .split("-")
              .reverse()
              .join("-")}{" "}
            {" - "}
            {Education.Secondary.SchoolEndDate
              ?.substr(0, Education.Secondary.SchoolEndDate.length - 3)
              .split("-")
              .reverse()
              .join("-")}
          </h3>
        </div>
        <p>Percentage : {Education.Secondary.percentage_10} %</p>
      </div>
    </div>
  );
}

export default QualificationsDisplay;
