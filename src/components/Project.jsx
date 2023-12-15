import React , {useState}from 'react'
import expandMore from '../assets/icons/expand-more.png'
import expandLess from "../assets/icons/expand-less.png"
import experience from "../assets/icons/work.png"

function Project({projectData , setProjectData}) {
    const [visible, setVisible]= useState(false);
    const toggleForm=()=>{
        setVisible(!visible);
    }
    const formHandler=(e)=>{
        const {name , value}=e.target;
        switch(name){
            case "projectTitle_1":{
                setProjectData({
                    ...projectData, 
                    project_1:{
                        ...projectData.project_1,
                        title:value,
                    }

                })
                break;
            }
            case "firstCompany":{
                setProjectData({
                    ...projectData, 
                        project_1:{
                        ...projectData.project_1,
                        company:value
                    }
                })
                break
            }
            case "startDateProject_1":{
                setProjectData({
                    ...projectData, 
                    project_1:{
                        ...projectData.project_1,
                        startDate:value,                    }
                })
                break
            }
            case "description_l1_1":{
                setProjectData({
                    ...projectData, 
                    project_1:{
                        ...projectData.project_1,
                        explain_1:value
                    }
                })
                break
            }
            case "description_l2_1":{
                setProjectData({
                    ...projectData, 
                    project_1:{
                        ...projectData.project_1,
                        explain_2:value
                    }
                })
                break
            }
            case "description_l3_1":{
                setProjectData({
                    ...projectData, 
                    project_1:{
                        ...projectData.project_1,
                        explain_3:value
                    }
                })
                break
            }



            
            // project 2 start
            case "projectTitle_2":{
                setProjectData({
                    ...projectData, 
                    project_2:{
                        ...projectData.project_2,
                        title:value,
                    }

                })
                break;
            }
            case "secondCompany":{
                setProjectData({
                    ...projectData, 
                        project_2:{
                        ...projectData.project_2,
                        company:value
                    }
                })
                break
            }
            case "startDateProject_2":{
                setProjectData({
                    ...projectData, 
                    project_2:{
                        ...projectData.project_2,
                        startDate:value,                    }
                })
                break
            }
            case "description_l1_2":{
                setProjectData({
                    ...projectData, 
                    project_2:{
                        ...projectData.project_2,
                        explain_1:value
                    }
                })
                break
            }
            case "description_l2_2":{
                setProjectData({
                    ...projectData, 
                    project_2:{
                        ...projectData.project_2,
                        explain_2:value
                    }
                })
                break
            }
            case "description_l3_2":{
                setProjectData({
                    ...projectData, 
                    project_2:{
                        ...projectData.project_2,
                        explain_3:value
                    }
                })
                break
            }





            //  project 3 start 
            case "projectTitle_3":{
                setProjectData({
                    ...projectData, 
                    project_3:{
                        ...projectData.project_3,
                        title:value,
                    }

                })
                break;
            }
            case "thirdCompany":{
                setProjectData({
                    ...projectData, 
                        project_3:{
                        ...projectData.project_3,
                        company:value
                    }
                })
                break
            }
            case "startDateProject_3":{
                setProjectData({
                    ...projectData, 
                    project_3:{
                        ...projectData.project_3,
                        startDate:value,
                    }
                })
                break
            }
            case "description_l1_3":{
                setProjectData({
                    ...projectData, 
                    project_3:{
                        ...projectData.project_3,
                        explain_1:value
                    }
                })
                break
            }
            case "description_l2_3":{
                setProjectData({
                    ...projectData, 
                    project_3:{
                        ...projectData.project_3,
                        explain_2:value
                    }
                })
                break
            }
            case "description_l3_3":{
                setProjectData({
                    ...projectData, 
                    project_3:{
                        ...projectData.project_3,
                        explain_3:value
                    }
                })
                break
            }
        }
        console.log(projectData)

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
                    <label htmlFor="title_1" className='font-bold opacity-70'>(1) Project/ Job Title</label>
                    <input type="text" name="projectTitle_1" placeholder='Enter your Project/ Job Title ' id="title_1" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="company_1" className='font-bold opacity-70'>Company</label>
                    <input type="text" name="firstCompany" placeholder={`enter your company's name `} id="company_1" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler}/>
                </div>
                <div className="dates flex justify-around">
                    <div>
                        <label htmlFor="startDate_1" className='block opacity-70 font-bold'>Month of Project </label>
                        <input type="date" name="startDateProject_1" id="startDate+!"  className='outline py-2 px-2  rounded-md' onChange={formHandler}/>
                    </div>
                </div>
                <div className='flex flex-col py-1 gap-4'>
                    <label htmlFor="desc" className='opacity-70 font-bold'>Description <span className='italic text-sm font-normal'>(in bullet points)</span></label>
                    <input type="text" name="description_l1_1" id="" placeholder='Point 1' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'  onChange={formHandler}/>
                    <input type="text" name="description_l2_1" id="" placeholder='Point 2' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler}/>
                    <input type="text" name="description_l3_1" id="" placeholder='Point 3' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                   
                    
                </div>
                {/* Project-2---------------------------------------------- */}



                <div className='flex flex-col py-1 mt-6'>
                    <label htmlFor="title_2" className='font-bold opacity-70'>(2) Project/Job Title</label>
                    <input type="text" name="projectTitle_2" placeholder='Enter your Project/ Job Title ' id="title_2" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="company_2" className='font-bold opacity-70'>Company</label>
                    <input type="text" name="secondCompany" placeholder="enter your company's name" id="company_2" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler}/>
                </div>
                <div className="dates flex justify-around">
                    <div>
                        <label htmlFor="startDate_2" className='block opacity-70 font-bold'>Month of Project</label>
                        <input type="date" name="startDateProject_2" id="startDate_2"  className='outline py-2 px-2  rounded-md' onChange={formHandler}/>
                    </div>
                </div>
                <div className='flex flex-col py-1 gap-4'>
                    <label htmlFor="desc" className='opacity-70 font-bold'>Description <span className='italic text-sm font-normal'>(in bullet points)</span></label>
                    <input type="text" name="description_l1_2" id="" placeholder='Point 1' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                    <input type="text" name="description_l2_2" id="" placeholder='Point 2' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler}/>
                    <input type="text" name="description_l3_2" id="" placeholder='Point 3' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                </div>
                
                
{/* Project --------3------------------ */}


                <div className='flex flex-col py-1 mt-6'>
                    <label htmlFor="title_3" className='font-bold opacity-70'>(3) Project/ Job Title </label>
                    <input type="text" name="projectTitle_3" placeholder='Enter your Project/ Job Title ' id="title_3" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler}/>
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="company_3" className='font-bold opacity-70'>Company</label>
                    <input type="text" name="thirdCompany" placeholder="Enter your Company's name" id="company_3" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                </div>
                <div className="dates flex justify-around">
                    <div>
                        <label htmlFor="startDate_3" className='block opacity-70 font-bold'>Month of Project</label>
                        <input type="date" name="startDateProject_3" id="projectDate_3"  className='outline py-2 px-2  rounded-md' onChange={formHandler}/>
                    </div>
                </div>
                <div className='flex flex-col py-1 gap-4'>
                    <label htmlFor="desc" className='opacity-70 font-bold'>Description <span className='italic text-sm font-normal'>(in bullet points)</span></label>
                    <input type="text" name="description_l1_3" id="" placeholder='Point 1' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                    <input type="text" name="description_l2_3" id="" placeholder='Point 2' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler}/>
                    <input type="text" name="description_l3_3" id="" placeholder='Point 3' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none'  onChange={formHandler}/>
                </div>
            </form>
        )}
    </div>
  )
}

export default Project;