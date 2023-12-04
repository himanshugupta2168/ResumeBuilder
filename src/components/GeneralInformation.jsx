import React, { useState } from 'react'
import personal from "../assets/icons/personal.png"
import expandMore from '../assets/icons/expand-more.png'
import expandLess from "../assets/icons/expand-less.png"

function GeneralInformation() {
    const [visible, setVisible]= useState(false);
    const toggleForm=()=>{
        setVisible(!visible);
    }

    const formHandler=(e)=>{
        e.preventDefault();
        console.log(fullName);
    }
  return (
    <div className='wrapper w-[480px] min-h-[100px] shadow-lg shadow-gray-500 bg-white rounded-lg flex flex-col justify-start gap-4 '>
        <div className="header flex flex-row items-center justify-around mt-6" onClick={toggleForm} >
            <img className="w-[50px]" src={personal} alt='person'/>
            <p className='text-lg font-bold'>General Information</p>
            <img
            onClick={toggleForm}
            src={visible? expandLess : expandMore}
            className="expand-icon w-[20px]  cursor-pointer  "
            />  
        </div>
        {visible&&(
            <form onSubmit={formHandler} className='px-10 pb-4' >
                <div className='flex flex-col py-1'>
                    <label htmlFor="fullName" className='font-bold opacity-70'>Full Name </label>
                    <input type="text" name="fullName" placeholder='Enter your Full Name' id="fullName" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="phoneNumber" className='font-bold opacity-70'>Phone Number</label>
                    <input type="number" name="email" placeholder='Enter your Contact Number' id="phoneNumber" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="email" className='font-bold opacity-70'>Email</label>
                    <input type="email" name="emai;" placeholder='Enter your Email Address' id="email" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="desc" className='opacity-70 font-bold'>Description</label>
                    <textarea name="" id="" cols="30" rows="5" className='resize-none p-2 border-gray-500 border-2 rounded-md'></textarea>
                </div>
                <input type="submit" value="Save " className='bg-red-700 text-white px-4 py-3 rounded-full font-bold hover:bg-red-600 transition-all duration-300 mt-4' />
            </form>
        )}
    </div>
  )
}

export default GeneralInformation