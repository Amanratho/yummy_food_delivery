import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="Login-popup absolute z-10 w-full h-full bg-[#00000090] grid">
      <form className="login-popup-container flex place-self-center w-[max(23vw ,330px)] text-[#808080] bg-white flex-col gap-6 p-[25px_30px] border rounded-[8px] text-[14px] ">
        <div className="login-popup-titel flex justify-between items-center text-black">
          <h2 className="text-2xl"> {currState}</h2>
          <img className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5 ">
          {currState === "Login" ? (
            <div className="flex flex-col ">
              <input className="border mt-1 outline-none p-[10px] rounded-[8px]" type="email" placeholder="Enter Your Email" required />
              <input className="border mt-1 outline-none p-[10px] rounded-[8px]" type="password" placeholder="Enter Your Password" required />
            </div>
          ) : (
            <div className="flex flex-col">
              <input className="border  outline-none p-[10px] rounded-[8px]" type="text" placeholder="Enter Your Name" required />
              <input className="border mt-1 outline-none p-[10px] rounded-[8px]" type="email" placeholder="Enter Your Email" required />
              <input className="border mt-1 outline-none p-[10px] rounded-[8px]" type="password" placeholder="Enter Password" required />
            </div>
          )}
        </div>
        <button className="border-none p-[10px] text-white bg-[#ff6347] text-[16px]  rounded-[8px]">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condtation flex items-start gap-[8px] mt-[-15px]">
          <input className="cursor-pointer mt-[5px]" type="checkBox" required />
          <p>By Countinuing , I Agree to the terms of use & prevacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span className="cursor-pointer text-[#ff6347] font-medium" onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span className="cursor-pointer text-[#ff6347] font-medium" onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
