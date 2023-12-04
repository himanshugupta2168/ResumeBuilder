import React , {useState}from 'react'
import expandMore from '../assets/icons/expand-more.png'
import expandLess from "../assets/icons/expand-less.png"
import experience from "../assets/icons/work.png"

function Project() {
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
            <img className="w-[50px]" src={experience} alt='person'/>
            <p className='text-lg font-bold'>Professional/Project  Experience</p>
            <img
            onClick={toggleForm}
            src={visible? expandLess : expandMore}
            className="expand-icon w-[20px]  cursor-pointer  "
            />  
        </div>
        {visible&&(
            <form onSubmit={formHandler} className='px-10 pb-4' >
                <div className='flex flex-col py-1'>
                    <label htmlFor="fullName" className='font-bold opacity-70'>(1) Project/ Job Title</label>
                    <input type="text" name="fullName" placeholder='Enter your Project/ Job Title ' id="fullName" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="phoneNumber" className='font-bold opacity-70'>Company</label>
                    <input type="text" name="email" placeholder='Enter your Contact Number' id="phoneNumber" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
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
                <div className='flex flex-col py-1 gap-4'>
                    <label htmlFor="desc" className='opacity-70 font-bold'>Description <span className='italic text-sm font-normal'>(in bullet points)</span></label>
                    <input type="text" name="" id="" placeholder='Point 1' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                    <input type="text" name="" id="" placeholder='Point 2' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                    <input type="text" name="" id="" placeholder='Point 3' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                   
                    
                </div>




                <div className='flex flex-col py-1 mt-6'>
                    <label htmlFor="fullName" className='font-bold opacity-70'>(2) Project/Job Title</label>
                    <input type="text" name="fullName" placeholder='Enter your Project/ Job Title ' id="fullName" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="phoneNumber" className='font-bold opacity-70'>Company</label>
                    <input type="text" name="email" placeholder='Enter your Contact Number' id="phoneNumber" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
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
                <div className='flex flex-col py-1 gap-4'>
                    <label htmlFor="desc" className='opacity-70 font-bold'>Description <span className='italic text-sm font-normal'>(in bullet points)</span></label>
                    <input type="text" name="" id="" placeholder='Point 1' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                    <input type="text" name="" id="" placeholder='Point 2' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                    <input type="text" name="" id="" placeholder='Point 3' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                </div>
                
                
                <div className='flex flex-col py-1 mt-6'>
                    <label htmlFor="fullName" className='font-bold opacity-70'>(3) Project/ Job Title </label>
                    <input type="text" name="fullName" placeholder='Enter your Project/ Job Title ' id="fullName" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="phoneNumber" className='font-bold opacity-70'>Company</label>
                    <input type="text" name="email" placeholder='Enter your Contact Number' id="phoneNumber" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' maxLength={10}/>
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
                <div className='flex flex-col py-1 gap-4'>
                    <label htmlFor="desc" className='opacity-70 font-bold'>Description <span className='italic text-sm font-normal'>(in bullet points)</span></label>
                    <input type="text" name="" id="" placeholder='Point 1' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                    <input type="text" name="" id="" placeholder='Point 2' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'/>
                    <input type="text" name="" id="" placeholder='Point 3' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' />
                </div>
                <input type="submit" value="Save " className='bg-red-700 text-white px-4 py-3 rounded-full font-bold hover:bg-red-600 transition-all duration-300 mt-4' />
            </form>
        )}
    </div>
  )
}

export default Project