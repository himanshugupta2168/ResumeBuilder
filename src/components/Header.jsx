import React from "react";
import resumeLogo from "../assets/icons/resumeLogo.png";
function Header() {
  return (
    < >
      <div className="w-[200px] shadow-lg shadow-gray-400 flex flex-col items-center absolute top-10 left-4 rounded-lg bg-white"  style={{boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
        <img src={resumeLogo} alt="Logo " width={"100px"} className="cursor-pointer"/>
        <h1 className="font-bold font-serif">RESUME</h1>
        <h2>GENERATOR</h2>
        <div className="mt-[200px] mb-10">
          <p>Himanshu &copy;</p>
        </div>
      </div>
    </>
  );
}

export default Header;
