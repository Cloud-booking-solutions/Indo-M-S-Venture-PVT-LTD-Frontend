
import React from "react";
// import logo from "../../assets/indo-m-and-s-logo.jpg";
import logo from '../../assets/Indo-m-and-s-logo.jpg';


const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-14 h-14 rounded-full bg-spice-500 flex items-center justify-center overflow-hidden">
      <img
        src={logo}
        alt="STH Logo"
        className="h-10 w-auto"
      />

        <div className="absolute inset-0 border-4 border-spice-100 rounded-full"></div>
      </div>
      <div className="ml-3">
        <h1 className="text-xl font-bold text-spice-900">Indo M & S Venture PVT. LTD.</h1>
        <p className="text-xs text-spice-600">Premium Indian Spices</p>
      </div>
    </div>
  );
};

export default Logo;
