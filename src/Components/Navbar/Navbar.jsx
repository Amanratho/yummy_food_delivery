import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Navbar({ setShowLogin }) {
  const [menu, setmenu] = useState("Menu");
  const [isCollapsed, setIsCollapsed] = useState(false); // State for toggle collapse
  const { getTotalCartAmount } = useContext(StoreContext);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // Toggle the collapse state
  };

  return (
    <div className="Navbar absolute py-[20px] px-0 flex justify-between items-center" id="Navbar">
      <img src={assets.yummi} alt="" className="logo w-[150px]" />

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden flex items-end">
        <button onClick={toggleCollapse} className="text-[24px]">
          ☰ {/* Simple hamburger icon */}
        </button>
      </div>

      {/* Navbar items */}
      <ul
        className={`navbar-menu ${
          isCollapsed ? "flex" : "hidden"
        } md:flex list-none gap-[20px] text-slate-900 text-[18px]`}
      >
        <Link
          to={"/"}
          onClick={() => setmenu("Menu")}
          className={
            menu === "Menu"
              ? "pb-[2px] border-b border-[#49557e] border-solid"
              : "cursor-pointer"
          }
        >
          Home
        </Link>
        <a
          href="#ExploreMenu"
          onClick={() => setmenu("Home")}
          className={
            menu === "Home"
              ? "pb-[2px] border-b border-[#49557e] border-solid"
              : "cursor-pointer"
          }
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setmenu("Mobile-App")}
          className={
            menu === "Mobile-App"
              ? "pb-[2px] border-b border-[#49557e] border-solid"
              : "cursor-pointer"
          }
        >
          Mobile-App
        </a>
        <a
          href="#Footer"
          onClick={() => setmenu("Contact-Us")}
          className={
            menu === "Contact-Us"
              ? "pb-[2px] border-b border-[#49557e] border-solid"
              : "cursor-pointer"
          }
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right  flex items-center gap-[40px]">
        {/* <img src={assets.search_icon} /> */}
        <div className="navbar-search-icon relative cursor-pointer">
          <Link to={"/cart"}>
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={`"dot  ${
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-[10px] min-h-[10px] bg-[#ff6347] rounded-[50px]  top-[-8px] right-[-8px]"
            }`}
          ></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-[16px] border border-solid border-[#ff6347] py-[10px] px-[30px] rounded-[50px] text-[#49557e] cursor-pointer transition duration-300 hover:bg-[#fff4f2]"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
