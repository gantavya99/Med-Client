import {React,useState} from "react";
import "./Header.css";
import logo from ".//../../assets/Medpharm logo Final/logo transparent.png";
import { CiMobile3 } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { AiFillCaretDown } from "react-icons/ai";
import DrawerExample from "../Drawers/DrawerExample";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const items = useSelector((state)=>state.cart);
    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
      };

  return (
    <nav className="flex flex-row justify-between p-2 pt-3 bg-white">
      <div className="flex items-center px-10">
        <img className="h-8 mr-5" src={logo} alt="MedPharma Logo" />
        <span className="flex items-center cursor-pointer">
          <span
            className="inline-block align-middle border-l-2 border-gray-300 h-8"
            style={{ lineHeight: "1.25" }}
          ></span>
          <span className="whitespace-normal mx-5">
            <span className="text-gray-500 text-xs">
              Delivering to 94016
              <AiFillCaretDown className="inline mx-1" />
            </span>
            <br />
            <span className="text-sm">San Francisco, California</span>
          </span>
        </span>
      </div>

      <div className="flex items-center px-10 cursor-pointer">
        <span className="flex inline mr-6 bg-[#eef4ff] p-3 rounded-lg hover:bg-gray-200 transition-all">
          <CiMobile3 className="mr-2 mt-1" />
          Download App
        </span>
        <span onClick={()=>setIsDrawerOpen(true)} className="flex inline mr-6 nav-items-right ">
          <BsPerson className="mr-2 mt-1" />
          Hello, Log in
        </span>

        <span className="flex inline mr-6 nav-items-right">
          <CiDiscount1 className="mr-2 mt-1" />
          Offers
        </span>
        <span onClick={()=>navigate("/cart")} className="flex inline mr-6 nav-items-right">
          <BsCart2 className="mr-2 mt-1" />
          Cart({items&&items.length})
        </span>
      </div>
    <DrawerExample onClose={handleDrawerClose} isOpen={isDrawerOpen}/>
      
    </nav>
  );
};

export default Header;
