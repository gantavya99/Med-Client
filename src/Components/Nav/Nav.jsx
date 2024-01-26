import React from "react";
import "./Nav.css";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
const Nav = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [data, setData] = useState([]);
  let timeoutId;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://med-server-production.up.railway.app/api/products/all")
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleMouseEnter = () => {
    setMenuOpen(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setMenuOpen(false);
    }, 500); // Change the delay time as needed (in milliseconds)
  };

  const handleButtonClick = () => {
    window.location.reload();
  };
  

  return (
    <>
    <div className="bg-white">
    <hr className=""></hr>
      <div className="z-50 flex justify-center text-sm cursor-pointer p-1">
        <div onClick={()=>navigate("/")} className="mx-2 p-2 hover:text-[#10847e]">Home</div>
        <div className="relative mx- p-2 hover:text-[#10847e]">
          <span
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            className="mr-2 relative"
          >
            Product Categories
          </span>
          <svg
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
              menuOpen
                ? "rotate-180 transition-transform duration-500"
                : "transition-transform duration-500"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 13l-5-5h10l-5 5z" />
          </svg>
        </div>
        {menuOpen && (
          <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => setMenuOpen(false)}
            className="z-50 origin-bottom-right absolute mt-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-0"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {/* {data.map((item,key)=>(
                <>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem" onClick={()=>navigate(`/products/${category}`)}>
                  {}
                </a>
                </>
              ))} */}
              <a
                onClick={()=>{navigate("/products/Skin Care");handleButtonClick()}}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Skin Care
              </a>
              <a
                onClick={()=>{navigate("/products/Personal Care");handleButtonClick()}}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"     
              >
                Personal Care
              </a>
              <a
                onClick={()=>{navigate("/products/Mother and Baby Care");handleButtonClick()}}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Mother and Baby Care
              </a>
              <a
                onClick={()=>{navigate("/products/Fitness Supplements");handleButtonClick()}}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Fitness Supplements
              </a>
              <a
                onClick={()=>{navigate("/products/Elderly Care");handleButtonClick()}}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Elderly Care
              </a>
               <a
                onClick={()=>{navigate("/products/Ortho Care");handleButtonClick()}}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Ortho Care
              </a>
              {/* <a
                onClick={()=>{navigate("/products/Weight Loss");handleButtonClick()}}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Weight Loss
              </a>
              <a
                onClick={()=>{navigate("/products/Steroids");handleButtonClick()}}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Steroids
              </a>  */}
            </div>
          </div>
        )}

        <div className="mx-2 p-2 hover:text-[#10847e] hidden lg:block">How to Order?</div>
        <div className="mx-2 p-2 hover:text-[#10847e] hidden lg:block">FAQs</div>
        <div className="mx-2 p-2 hover:text-[#10847e] hidden lg:block">Testimonials</div>
        <div className="mx-2 p-2 hover:text-[#10847e]">Contact Us</div>
      </div>

      <hr></hr>
      <div className="hero-bg"></div>
    </div>
      
    </>
  );
};
export default Nav;
