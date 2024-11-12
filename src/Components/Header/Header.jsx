import React from "react";
import './Header.css'


function Header() {
  return (
    <div className="Header h-[34vw] my-[30px] mx-auto bg-[url('/header_img.png')] bg-contain bg-no-repeat relative">
      <div className="Header-content absolute flex flex-col items-start gap-[1.2vw] max-w-[50%] ml-[6vw]">
        <h2 className="text-white font-medium text-[max(4.5vw,22px)] italic">Order your favourite food here</h2>
        <p className=" text-[1.2vw] text-white italic">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
          accusamus ad maiores culpa harum, modi mollitia tempore in impedit
          perspiciatis .
        </p>
        <img src="images/logo.png" srcset="images/logo@2x.png  2x" alt=""></img>
        <button className=" italic border-0 text-[#747474] font-medium p-[1vw_2.5vw] bg-white text-[max(1vw,13px)] rounded-[50px]">View Menu</button>
      </div>
    </div>
  );
}

export default Header;
