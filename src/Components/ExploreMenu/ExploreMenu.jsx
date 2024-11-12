import { menu_list } from "../../assets/assets";
// import React, { useState } from 'react'
import "./ExploreMenu.css";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="ExploreMenu flex flex-col gap-[20px]" id="ExploreMenu">
      <h1 className="text-[#262626] font-medium text-2xl">Explore our menu</h1>
      <p className="Explore-Menu-Text max-w-[60%] text-[#808080]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
        molestiae voluptatem quam tempora sed magni ullam dicta, harum, nulla
        cupiditate qui? Minus, voluptatibus.
      </p>
      <div className="Explore-menu-list flex justify-between gap-[30px] items-center text-center my-[20px] mx-0 overflow-x-scroll hide-scroll-bar">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                );
              }}
              key={index}
              className="Explore-menu-list-item"
            >
              <img
                src={item.menu_image}
                alt="item iamge"
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200 ${
                  category === item.menu_name
                    ? "border-4 border-[#ff6347] "
                    : ""
                }`}
              />
              <p className="mt-[10px] text-[#747474] text-[max(1.4vw ,16px)] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
}

export default ExploreMenu;
