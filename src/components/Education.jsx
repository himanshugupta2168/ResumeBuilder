import React, { useState } from "react";
import expandMore from "../assets/icons/expand-more.png";
import expandLess from "../assets/icons/expand-less.png";
import education from "../assets/icons/education.png";

function Education({ Education, setEducation }) {
  const [visible, setVisible] = useState(false);
  const toggleForm = () => {
    setVisible(!visible);
  };
  const formHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "collegeName": {
        setEducation({
          ...Education,
          undergraduate: {
            ...Education.undergraduate,
            instituteName: value,
          },
        });
        break;
      }
      case "cgpa": {
        setEducation({
          ...Education,
          undergraduate: {
            ...Education.undergraduate,
            CGPA: value,
          },
        });
        break;
      }
      case "degree": {
        setEducation({
          ...Education,
          undergraduate: {
            ...Education.undergraduate,
            degree: value,
          },
        });
        break;
      }
      case "collegeCity": {
        setEducation({
          ...Education,
          undergraduate: {
            ...Education.undergraduate,
            collegeCity: value,
          },
        });
        break;
      }
      case "startDate": {
        setEducation({
          ...Education,
          undergraduate: {
            ...Education.undergraduate,
            startDate:value,
          },
        });
        break;
      }
      case "endDate": {
        setEducation({
          ...Education,
          undergraduate: {
            ...Education.undergraduate,
            endDate:value,
          },
        });
        break;
      }
      case "highSchoolName": {
        setEducation({
          ...Education,
          higherSecondary: {
            ...Education.higherSecondary,
            hSchoolName: value,
          },
        });
        break;
      }
      case "stream": {
        setEducation({
          ...Education,
          higherSecondary: {
            ...Education.higherSecondary,
            stream: value,
          },
        });
        break;
      }
      case "percentage_12": {
        setEducation({
          ...Education,
          higherSecondary: {
            ...Education.higherSecondary,
            percentage_12: value,
          },
        });
        break;
      }
      case "hSchoolCity": {
        setEducation({
          ...Education,
          higherSecondary: {
            ...Education.higherSecondary,
            hSchoolCity: value,
          },
        });
        break;
      }
      case "hSchoolStartDate": {
        setEducation({
          ...Education,
          higherSecondary: {
            ...Education.higherSecondary,
            hSchoolStartDate:value,
          },
        });
        break;
      }
      case "hSchoolEndDate": {
        setEducation({
          ...Education,
          higherSecondary: {
            ...Education.higherSecondary,
            hSchoolEndDate:value,
          },
        });
        break;
      }
      case "schoolName": {
        setEducation({
          ...Education,
          Secondary: {
            ...Education.Secondary,
            schoolName: value,
          },
        });
        break;
      }
      case "percentage_10": {
        setEducation({
          ...Education,
          Secondary: {
            ...Education.Secondary,
            percentage_10: value,
          },
        });
        break;
      }
      case "schoolCity": {
        setEducation({
          ...Education,
          Secondary: {
            ...Education.Secondary,
            schoolCity: value,
          },
        });
        break;
      }
      case "SchoolStartDate": {
        setEducation({
          ...Education,
          Secondary: {
            ...Education.Secondary,
            SchoolStartDate:value,
          },
        });
        break;
      }
      case "SchoolEndDate": {
        setEducation({
          ...Education,
          Secondary: {
            ...Education.Secondary,
            SchoolEndDate:value,
          },
        });
        break;
      }
      default: {
      }
    }
  };

  return (
    <div className="wrapper w-[480px] min-h-[100px]  shadow-lg shadow-gray-500 bg-white rounded-lg flex flex-col justify-start gap-4 ">
      <div
        className="header flex flex-row items-center justify-around mt-6"
        onClick={toggleForm}
      >
        <img className="w-[50px]" src={education} alt="person" />
        <p className="text-lg font-bold">Educational Qualification</p>
        <img
          onClick={toggleForm}
          src={visible ? expandLess : expandMore}
          className="expand-icon w-[20px]  cursor-pointer  "
        />
      </div>
      {visible && (
        <form onSubmit={formHandler} className="px-10 pb-4">
          <h2 className="font-bold ">
            {" "}
            Under Graduate Details <span className="text-red-600">*</span>
          </h2>
          <div className="flex flex-col py-1">
            <label htmlFor="fullName" className="font-bold opacity-70">
              Institution
            </label>
            <input
              type="text"
              name="collegeName"
              placeholder="Enter the name of Institution"
              id="fullName"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="grades" className="font-bold opacity-70">
              CGPA{" "}
            </label>
            <input
              type="number"
              name="cgpa"
              placeholder="Enter your CGPA / GPA"
              id="grades"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              maxLength={10}
              onChange={formHandler}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="degree" className="font-bold opacity-70">
              Degree
            </label>
            <input
              type="text"
              name="degree"
              placeholder="Enter the degree pursued/ pursuing"
              id="degree"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="city" className="font-bold opacity-70">
              City
            </label>
            <input
              type="text"
              name="collegeCity"
              placeholder="Enter The Institution City"
              id="city"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
          </div>
          <div className="dates flex justify-around">
            <div>
              <label htmlFor="startDate" className="block opacity-70 font-bold">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                className="outline py-2 px-2  rounded-md"
                onChange={formHandler}
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block opacity-70 font-bold">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                className="outline py-2 px-2  rounded-md"
                onChange={formHandler}
              />
            </div>
          </div>
          {/* new qualificatipn */}
          <h2 className="font-bold my-6 ">
            {" "}
            Higher Scondary Details <span className="text-red-600">*</span>
          </h2>
          <div className="flex flex-col py-1">
            <label htmlFor="school" className="font-bold opacity-70">
              Institution
            </label>
            <input
              type="text"
              name="highSchoolName"
              placeholder="Enter the name of Institution"
              id="school"
              onChange={formHandler}
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="stream" className="font-bold opacity-70">
              Stream
            </label>
            <input
              type="text"
              name="stream"
              placeholder="Enter the stream  pursued/ pursuing"
              id="stream"
              onChange={formHandler}
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="grades_12" className="font-bold">
              Percentage(%)
            </label>
            <input
              type="number"
              name="percentage_12"
              placeholder="Enter your Percentage"
              id="grades_12"
              onChange={formHandler}
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              maxLength={10}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="hSchoolCity" className="font-bold opacity-70">
              City
            </label>
            <input
              type="text"
              name="hSchoolCity"
              placeholder="Enter The Institution City"
              id="hSchoolCity"
              onChange={formHandler}
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="dates flex justify-around">
            <div>
              <label
                htmlFor="startDate_12"
                className="block opacity-70 font-bold"
              >
                Start Date
              </label>
              <input
                type="date"
                name="hSchoolStartDate"
                id="startDate_12"
                onChange={formHandler}
                className="outline py-2 px-2  rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="hSchoolEndDate"
                className="block opacity-70 font-bold"
              >
                End Date
              </label>
              <input
                type="date"
                name="hSchoolEndDate"
                id="hSchoolEndDate"
                onChange={formHandler}
                className="outline py-2 px-2  rounded-md"
              />
            </div>
          </div>
          {/* new qualification */}
          <h2 className="font-bold my-6">
            {" "}
            Secondary Schooling Details <span className="text-red-600">*</span>
          </h2>
          <div className="flex flex-col py-1">
            <label htmlFor="school_10" className="font-bold opacity-70">
              School
            </label>
            <input
              type="text"
              name="schoolName"
              placeholder="Enter the name of School"
              onChange={formHandler}
              id="school_10"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="grades_10" className="font-bold">
              Percentage (%)
            </label>
            <input
              type="number"
              name="percentage_10"
              placeholder="Enter your Precentage "
              onChange={formHandler}
              id="grades_10"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              maxLength={10}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="SchoolCity" className="font-bold opacity-70">
              City
            </label>
            <input
              type="text"
              name="schoolCity"
              placeholder="Enter The School City"
              onChange={formHandler}
              id="SchoolCity"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
            />
          </div>
          <div className="dates flex justify-around">
            <div>
              <label
                htmlFor="SchoolStartDate"
                className="block opacity-70 font-bold"
              >
                Start Date
              </label>
              <input
                type="date"
                name="SchoolStartDate"
                id="SchoolStartDate"
                onChange={formHandler}
                className="outline py-2 px-2  rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="SchoolEndDate"
                className="block font-bold opacity-70"
              >
                End Date
              </label>
              <input
                type="date"
                name="SchoolEndDate"
                id="SchoolEndDate"
                onChange={formHandler}
                className="outline py-2 px-2  rounded-md"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Education;
