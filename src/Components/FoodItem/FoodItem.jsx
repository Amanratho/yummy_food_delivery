import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
// import { useState } from "react";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  // const [itemCount, setItemCount] = useState(0);
  const { cartItem, addToCart, removeToCart } = useContext(StoreContext);

  return (
    <div className="food-item w-[100%] m-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] transition duration-[3000ms] animate-faeIn ">
      <div className="food-item-image-container relative">
        <img
          src={image}
          alt="/"
          className="food-item-image w-[100%] rounded-t-[15px] rounded-b-none "
        />
        {!cartItem[id] ? (
          <img
            className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-sm"
            onClick={() => addToCart(id)}
            src={assets.add_icon_green}
          />
        ) : (
          <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white ">
            <img
              className="w-[30px]"
              src={assets.remove_icon_red}
              alt="/"
              onClick={() => removeToCart(id)}
            />
            <p>{cartItem[id]}</p>
            <img
              className="w-[30px]"
              src={assets.add_icon_green}
              alt="/"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-[20px]">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px] ">
          <p className=" text-[15px] font-medium ">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-[#676767] text-[17px] ">
          {description}
        </p>
        <p className="food-item-price text-[#ff6346] text-[20px] font-semibold mt-[10px] mr-0">
          &#8377; {price * 5}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
