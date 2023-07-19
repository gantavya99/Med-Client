import React, { useState } from "react";
import logo from ".//../../assets/Medpharm logo Final/logo transparent.png";
import { CiMobile3 } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { AiFillCaretDown } from "react-icons/ai";
import DrawerExample from "../Drawers/DrawerExample";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <div className="text-black">
                <img onClick={() => navigate("/")} className="h-8 w-44" src={logo} alt="logo" />
              </div>
            </div>
          </div>
          <div className="hidden md:block cursor-pointer">
            <div className="ml-10 flex items-baseline space-x-4">
              {
                isAuthenticated?
                <span
                onClick={()=>navigate("/profile")}
                
                className="text-black hover:text-[#10847e] px-3 py-2 rounded-md text-sm font-medium"
              >
                <BsPerson className="mr-2 mt-1 text-2xl" />
                Profile
              </span>:
              <span
              onClick={()=>navigate("/login")}
              
              className="text-black hover:text-[#10847e] px-3 py-2 rounded-md text-sm font-medium"
            >
              <BsPerson className="mr-2 mt-1 text-2xl" />
              Log In
            </span>
              }
              

              <span
                href="#"
                className="text-black hover:text-[#10847e] px-3 py-2 rounded-md text-sm font-medium"
              >
                <span>
                  <CiDiscount1 className="mr-2 mt-1 text-2xl" />
                </span>
                Offers
              </span>
              <span
                href="#"
                className="hover:text-[#10847e] text-black nav-items-right px-3 py-2 rounded-md text-sm font-medium"
              >
                <BsCart2 onClick={() => navigate("/cart")} className="mr-2 mt-1 text-2xl" />
                <span onClick={() => navigate("/cart")}>
                  Cart({items.cartItems && items.cartItems.length})
                </span>
              </span>

              {/* Add more links as needed */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-black"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            onClick={() => navigate("/cart")}
            className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Cart
          </a>
          <a
            onClick={() => navigate("/")}
            className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
