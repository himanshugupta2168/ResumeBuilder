import React, { useState } from "react";
import Certificates from "../assets/icons/Certificates.png";
import expandMore from "../assets/icons/expand-more.png";
import expandLess from "../assets/icons/expand-less.png";

function CoCurricular({Certificate, setCertificates}) {
  const [visible, setVisible] = useState(false);
  const toggleForm = () => {
    setVisible(!visible);
  };

  const formHandler = (e) => {
    const {name , value}= e.target;
    switch(name){
      case "Certificate_1_url":{
       setCertificates({
        ...Certificate,
        certificate_1_url: value,
      })
      break;
      };
      case "Certificate_1":{
        setCertificates({
         ...Certificate,
         certificate_1_name: value,
       })
       break;
       };
       case "Certificate_2_url":{
        setCertificates({
         ...Certificate,
         certificate_2_url: value,
       })
       break;
       };
       case "Certificate_2":{
        setCertificates({
         ...Certificate,
         certificate_2_name: value,
       })
       break;
       };

       case "Certificate_3_url":{
        setCertificates({
         ...Certificate,
         certificate_3_url: value,
       })
       break;
       };
       case "Certificate_3":{
        setCertificates({
         ...Certificate,
         certificate_3_name: value,
       })
       break;
       };
    }

  };
  return (
    <div className="wrapper w-[480px] min-h-[100px] shadow-lg shadow-gray-500 bg-white rounded-lg flex flex-col justify-start gap-4 ">
      <div
        className="header flex flex-row items-center justify-around mt-6"
        onClick={toggleForm}
      >
        <img className="w-[50px]" src={Certificates} alt="person" />
        <p className="text-lg font-bold">Certifications</p>
        <img
          onClick={toggleForm}
          src={visible ? expandLess : expandMore}
          className="expand-icon w-[20px]  cursor-pointer  "
        />
      </div>
      {visible && (
        <form onSubmit={formHandler} className="px-10 pb-4">
          <div className="flex flex-col py-1">
            <label htmlFor="fullName" className="font-bold opacity-70">
              Certificate Number 1
            </label>
            <input
              type="text"
              name="Certificate_1_url"
              placeholder=" URL Link of the Certificate"
              id="fullName"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
            <input
              type="text"
              name="Certificate_1"
              placeholder=" Name of the certified Course "
              id="fullName"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none mt-2"
              onChange={formHandler}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="fullName" className="font-bold opacity-70">
              Certificate Number 2 
            </label>
            <input
              type="text"
              name="Certificate_2_url"
              placeholder=" URL Link of the Certificate"
              id="fullName"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
            <input
              type="text"
              name="Certificate_2"
              placeholder=" Name of the certified Course "
              id="fullName"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none mt-2"
              onChange={formHandler}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="fullName" className="font-bold opacity-70">
              Certificate Number 3 
            </label>
            <input
              type="text"
              name="Certificate_3_url"
              placeholder=" URL Link of the Certificate"
              id="fullName"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
            <input
              type="text"
              name="Certificate_3"
              placeholder=" Name of the certified Course "
              id="fullName"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none mt-2"
              onChange={formHandler}
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default CoCurricular;
