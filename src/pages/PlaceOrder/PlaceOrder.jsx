import React from "react";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="flex justify-between items-start gap-[50px] mt-24">
      <div className="place-order-left w-[60%]">
        <p className="title text-[30px] font-semibold mt-12 ">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-3 ">
          <input
            className="mb-[15px] w-full p-2 border border-solid border-[#c5c5c5] outline-[#ff6347] "
            type="text"
            placeholder="First Name"
          />
          <input
            className="mb-[15px] w-full p-2 border border-solid border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="Second Name"
          />
        </div>
        <input
          className="mb-[15px] w-full p-2 border border-solid border-[#c5c5c5] outline-[#ff6347]"
          type="email"
          placeholder="Email Add"
        />
        <input
          className="mb-[15px] w-full p-2 border border-solid border-[#c5c5c5] outline-[#ff6347]"
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields flex gap-3 ">
          <input
            className="mb-[15px] w-full p-2 border border-solid border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="City Name"
          />
          <input
            className="mb-[15px] w-full p-2 border border-solid border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="State Name"
          />
        </div>
        <div className="multi-fields flex gap-3  ">
          <input
            className="mb-[15px] w-full p-2 border border-solid border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="Pin code"
          />
          <input type="text" placeholder="Country" />
        </div>
        <input
          className="mb-[15px] w-full p-2 border border-solid border-[#c5c5c5] outline-[#ff6347]"
          type="text"
          placeholder=" Phone"
        />
      </div>
       <div className="place-order-right  w-[300px] max-w-[40%,500px] mt-20">
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
            <b> &#8377; {getTotalCartAmount() + 2}</b>
          </div>
        </div>
        <button className="border-none text-white bg-[#ff6347] w-[15vw,200px] py-3 px-0 rounded-md cursor-pointer mt-6">
          PROCEED TO PAYMENT
        </button>
      </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
