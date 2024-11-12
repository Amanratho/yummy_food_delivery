import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext("");

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itenInfo = food_list.find((product) => product._id === item);
        totalAmount += itenInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const ContextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeToCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
