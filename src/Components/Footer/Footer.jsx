import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div
      className="Footer  text-[#d9d9d9] mt-16  bg-[#323232] flex flex-col items-center gap-5 py-5 px-2 pt-20 flex-wrap"
      id="Footer"
    >
      <div className="Footer-content w-[80%]  grid grid-cols-[2fr_1fr_1fr] gap-20 ">
        <div className="Footer-content-left flex flex-col items-start gap-5 ">
          <img src={assets.yummi} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="footer-social-icon flex gap-2">
          <a href="">  <img className="cursor-pointer" src={assets.facebook_icon} alt="" /> </a> 
          <a href="https://www.linkedin.com/in/aman-rathod-8195aa25b/">  <img className="cursor-pointer" src={assets.linkedin_icon} alt="" /> </a> 
          <a href="">     <img className="cursor-pointer" src={assets.twitter_icon} alt="" /></a> 
          </div>
        </div>
        <div className="Footer-content-center flex flex-col items-start gap-5">
          <h2 className="text-2xl text-white">COMPONY</h2>
          <ul>
            <li className="list-none mb-2.5 cursor-pointer">Home</li>
            <li className="list-none mb-2.5 cursor-pointer">About Us</li>
            <li className="list-none mb-2.5 cursor-pointer">Delivery</li>
            <li className="list-none mb-2.5 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="Footer-content-right flex flex-col items-start gap-5">
          <h2 className="text-2xl text-white">GET IN TUCH</h2>
          <ul>
            <li className="list-none mb-2.5 cursor-pointer">+91 91091-24564</li>
            <li className="list-none mb-2.5 cursor-pointer">
              Contect@yammi.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 mt-5 mr-0 bg-gray-900" />
      <p className="footer-copyright">
        Copyright2024 @yammi.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
