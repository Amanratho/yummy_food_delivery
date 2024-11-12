import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./cart.css";
import { useNavigate } from "react-router-dom";
// import FoodDisplay from "../../Components/Food-Display/FoodDisplay";

function Cart() {
  const { cartItem, food_list, removeToCart, getTotalCartAmount } = useContext(StoreContext);
  const  navigate= useNavigate();

  return (
    <div className="cart mt-[100px]">
      <div className="cart-items ">
        <div className="cart-item-tittle grid items-center bg-gray-200 text-[max(1vw,12px)] font-medium rounded-t-lg">
          <p className="p-2">Item</p>
          <p>Title</p>
          <p>Price</p>
          <p className="pr-1">Quantity</p>
          <p>Total</p>
          <p className="p-2">Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
              <div className="cart-item-tittle cart-items-item grid items-center bg-gray-200 text-[max(1vw,12px)] font-medium my-[10px] text-black">
                <img src={item.image} alt="Food Image" className="w-12" />
                <p>{item.name}</p>
                <p>&#8377;{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>&#8377;{item.price * cartItem[item._id]}</p>
                <p className="cursor-pointer" onClick={()=>removeToCart(item._id)}>X</p>
              </div>
              <hr className=""/>
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-[12vw,20px] ">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-medium">Cart Total</h2>
            <div>
              <div className="div-cart-total flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>&#8377; {getTotalCartAmount()}</p>
              </div>
              <hr className="mx-[10px]" />
              <div className="div-cart-total flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>&#8377; {2}</p>
              </div>
              <hr className="mx-[10px] my-0" />
              <div className="div-cart-total flex justify-between text-[#555]">
                <b>Total</b>
                <b> &#8377; {getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')} className="border-none text-white bg-[#ff6347] w-[15vw,200px] py-3 px-0 rounded-md cursor-pointer">PROCEED TO CHEAKOUT</button>
        </div>
        <div className="cart-promocode flex-1 ">
          <div>
            <p className="text-[#555] ">
              If you have a promo code, Enter it here 
            </p>
            <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-md ">
              <input type="text" placeholder="Promcode" className="bg-transparent border-none outline-none pl-[10px]"/>
              <button className="w-[max(10vw,150px)] py-3 px-1.5 bg-black border-none rounded-md text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
