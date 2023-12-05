import React, { useState } from 'react'
import expandMore from '../assets/icons/expand-more.png'
import expandLess from "../assets/icons/expand-less.png"
import education from "../assets/icons/education.png"

function Education() {
    const [visible, setVisible]= useState(false);
    const toggleForm=()=>{
        setVisible(!visible);
    }

    const formHandler=(e)=>{
        e.preventDefault();
        console.log(fullName);
    }
  return (
    <div className='wrapper w-[480px] min-h-[100px]  shadow-lg shadow-gray-500 bg-white rounded-lg flex flex-col justify-start gap-4 '>
        <div className="header flex flex-row items-center justify-around mt-6" onClick={toggleForm}>
            <img className="w-[50px]" src={education} alt='person'/>
            <p className='text-lg font-bold'>Educational Qualification</p>
            <img
            onClick={toggleForm}
            src={visible? expandLess : expandMore}
            className="expand-icon w-[20px]  cursor-pointer  "
            />  
        </div>
        {visible&&(
            <form onSubmit={formHandler} className='px-10 pb-4' >
                <h2 className="font-bold "> Under Graduate Details <span className='text-red-600'>*</span></h2>
                <div className='flex flex-col py-1'>
                    <label htmlFor="fullName" className='font-bold opacity-70'>Institution</label>
                    <input type="text" name="collegeName" placeholder='Enter the name of Institution' id="fullName" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="grades" className='font-bold opacity-70'>CGPA </label>
                    <input type="number" name="cgpa" placeholder='Enter your CGPA / GPA' id="grades" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="degree" className='font-bold opacity-70'>Degree</label>
                    <input type="text" name="degree" placeholder='Enter the degree pursued/ pursuing' id="degree" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="city" className='font-bold opacity-70'>City</label>
                    <input type="text" name="collegeCity" placeholder='Enter The Institution City' id="city" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                </div>
                <div className="dates flex justify-around">
                    <div>
                        <label htmlFor="startDate" className='block opacity-70 font-bold'>Start Date</label>
                        <input type="date" name="startDate" id="startDate"  className='outline py-2 px-2  rounded-md'/>
                    </div>
                    <div>
                        <label htmlFor="endDate" className='block opacity-70 font-bold'>End Date</label>
                        <input type="date" name="endDate" id="endDate"  className='outline py-2 px-2  rounded-md'/>
                    </div>
                </div>
                {/* new qualificatipn */}
                <h2 className="font-bold my-6 "> Higher Scondary Details <span className='text-red-600'>*</span></h2>
                <div className='flex flex-col py-1'>
                    <label htmlFor="school" className='font-bold opacity-70'>Institution</label>
                    <input type="text" name="highSchoolName" placeholder='Enter the name of Institution' id="school" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="stream" className='font-bold opacity-70'>Stream</label>
                    <input type="text" name="stream" placeholder='Enter the stream  pursued/ pursuing' id="stream" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="grades_12" className='font-bold'>Percentage(%)</label>
                    <input type="number" name="percentage_12" placeholder='Enter your Percentage' id="grades_12" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="hSchoolCity" className='font-bold opacity-70'>City</label>
                    <input type="text" name="hSchoolCity" placeholder='Enter The Institution City' id="hSchoolCity" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                </div>
                <div className="dates flex justify-around">
                    <div>
                        <label htmlFor="startDate_12" className='block opacity-70 font-bold'>Start Date</label>
                        <input type="date" name="hSchoolStartDate" id="startDate_12"  className='outline py-2 px-2  rounded-md'/>
                    </div>
                    <div>
                        <label htmlFor="hSchoolEndDate" className='block opacity-70 font-bold'>End Date</label>
                        <input type="date" name="hSchoolEndDate" id="hSchoolEndDate"  className='outline py-2 px-2  rounded-md'/>
                    </div>
                </div>
                {/* new qualification */}
                <h2 className="font-bold my-6"> Secondary Schooling  Details <span className='text-red-600'>*</span></h2>
                <div className='flex flex-col py-1'>
                    <label htmlFor="school_10" className='font-bold opacity-70'>School</label>
                    <input type="text" name="schoolName" placeholder='Enter the name of School' id="school_10" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="grades_10" className='font-bold'>Percentage (%)</label>
                    <input type="number" name="percentage_10" placeholder='Enter your Precentage ' id="grades_10" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="SchoolCity" className='font-bold opacity-70'>City</label>
                    <input type="text" name="schoolCity" placeholder='Enter The School City' id="SchoolCity" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                </div>
                <div className="dates flex justify-around">
                    <div>
                        <label htmlFor="SchoolStartDate" className='block opacity-70 font-bold'>Start Date</label>
                        <input type="date" name="SchoolStartDate" id="SchoolStartDate"  className='outline py-2 px-2  rounded-md'/>
                    </div>
                    <div>
                        <label htmlFor="SchoolEndDate" className='block font-bold opacity-70'>End Date</label>
                        <input type="date" name="SchoolEndDate" id="SchoolEndDate"  className='outline py-2 px-2  rounded-md'/>
                    </div>
                </div>
                <input type="submit" value="Save " className='bg-red-700 text-white px-4 py-3 rounded-full font-bold hover:bg-red-600 transition-all duration-300 mt-4' />
            </form>
        )}
    
    </div>
  )
}

export default Education