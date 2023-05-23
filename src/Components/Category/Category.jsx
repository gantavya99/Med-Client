import React from "react";
import yellowCard from "../../assets/Category/Yellow.svg";
import Blue from "../../assets/Category/Blue.svg";
import Chocolate from "../../assets/Category/Chocolate.svg";
import Green from "../../assets/Category/Green.svg";
import Grey from "../../assets/Category/Grey.svg";
import Pink from "../../assets/Category/Pink.svg";
import { useNavigate } from "react-router-dom";
const CategoryList = () => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer">
      <h1 className="font-semibold text-3xl">Categories</h1>
      <div className="flex justify-around p-6 mt-5">
        <div onClick={()=>navigate("/products/Opioids")} className="flex flex-col items-center">
          <img
            className="w-32 transition-transform duration-300 hover:scale-105"
            src={yellowCard}
            alt="medicine"
          />
          <p className="mt-2 text-center">Opioids</p>
        </div>
        <div onClick={()=>navigate("/products/Psychedelics")} className="flex flex-col items-center">
          <img
            className="w-32 transition-transform duration-300 hover:scale-105"
            src={Pink}
            alt="medicine"
          />
          <p className="mt-2 text-center">Psychedelics</p>
        </div>
        <div onClick={()=>navigate("/products/Cannabinoids")} className="flex flex-col items-center">
          <img
            className="w-32 transition-transform duration-300 hover:scale-105"
            src={Grey}
            alt="medicine"
          />
          <p className="mt-2 text-center">Cannabinoids</p>
        </div>
        <div onClick={()=>navigate("/products/Research Chemical")} className="flex flex-col items-center">
          <img
            className="w-32 transition-transform duration-300 hover:scale-105"
            src={Blue}
            alt="medicine"
          />
          <p className="mt-2 text-center">Research Chemical</p>
        </div>
        <div onClick={()=>navigate("/products/Weight Loss")} className="flex flex-col items-center">
          <img
            className="w-32 transition-transform duration-300 hover:scale-105"
            src={Green}
            alt="medicine"
          />
          <p className="mt-2 text-center">Weight Loss/Diabetes</p>
        </div>
        <div onClick={()=>navigate("/products/Gummies and Chocolates")} className="flex flex-col items-center">
          <img
            className="w-32 transition-transform duration-300 hover:scale-105"
            src={Chocolate}
            alt="medicine"
          />
          <p className="mt-2 text-center">Gummies and Chocolates</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
