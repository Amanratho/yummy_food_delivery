import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
// import AppDownload from "./Components/appDownload/AppDownload";
import LoginPopup from "./Components/loginPopup/LoginPopup";
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <> </>}
      <div className="app w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
        </Routes>
       
      </div>
         <Footer />
    </>
  );
}

export default App;
