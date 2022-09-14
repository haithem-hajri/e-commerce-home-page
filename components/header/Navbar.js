import React from "react";
import Image from "next/image";
import Banner from "./Banner";
import JumiaLogo from "../../icons/JumiaLogo";
import { BiUser, BiHelpCircle, BiCart } from "react-icons/bi";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
const Dropdwon = () => {
  return (
    <div className="absolute top-[28px] flex flex-col justify-center  divide-y min-w-[206px] bg-white rounded-md shadow">
      <div className="w-full p-4">
        <button className="rounded hover:opacity-[0.7] cursor-pointer w-full py-1 shadow-md bg-orange-500 text-white font-semibold text-lg">
          SE CONNECTER
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200 justify-start gap-2 ">
          <BiUser className="w-[24px] h-[24px] font-semibold" />
          <p>Votre compte</p>
        </div>
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200 justify-start gap-2">
          <MdOutlineProductionQuantityLimits className="w-[24px] h-[24px] font-semibold" />
          <p>Vos commandes</p>
        </div>
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200 justify-start gap-2">
          <AiOutlineHeart className="w-[24px] h-[24px] font-semibold" />
          <p>Votre liste d{"'"}envies</p>
        </div>
      </div>
    </div>
  );
};
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = React.useState(false);
  //#fe9900
  return (
    <>
      <Banner />
      { <div className="md:mt-6 mt-0  w-full h-[72px] flex bg-white z-[300] navbar-shadow  test ">
        <section className="px-[8px]  m-auto max-w-[1184px] justify-between w-full  flex items-center    ">
          <div className="min-w-[18.75%] basis-[18.75%] w-[18.75%] ">
            <JumiaLogo color={"#282929"} />
          </div>
          <div className="flex md:hidden">
            <IoMdMenu className="text-orange-500 text-[26px] font-semibold"/>
          </div>
          <form className="px-[8px] md:flex items-center grow  w-full hidden ">
            <input
              className="  w-[-webkit-fill-available]  rounded px-[4px] py-[9px] border border-solid  border-[#c7c7cd]  mr-[2px] text-[sm] outline-0   h-full"
              placeholder="Cherchez un produit, une marque ou une catégorie"
            />

            <button
              className="mx-[2px] btn px-[16px] rounded font-semibold py-[10px] text-sm text-center bg-[#f68b1e]
             text-white hover:opacity-[0.7]"
            >
              RECHERCHER
            </button>
          </form>
          <div className=" items-center gap-[1.5rem] w-full justify-between flex-1 md:flex hidden">
            <div className="  relative ">
              <div className="hover:text-orange-500 flex items-center gap-2 cursor-pointer">
                <BiUser className="font-bold text-[18px] text-md" />
                <span
                  className="font-semibold text-md whitespace-nowrap"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  Se connecter
                </span>
                <AiOutlineDown className="text-[10px] font-bold" />
              </div>

              {openDropdown && <Dropdwon />}
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
              <BiHelpCircle className="font-bold text-[18px] text-md" />
              <span className="font-semibold text-md whitespace-nowrap">
                Aide
              </span>
              <AiOutlineDown className="text-[10px] font-bold" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
              <BiCart className="font-bold text-[18px] text-md" />
              <span className="font-semibold text-md whitespace-nowrap">
                Panier
              </span>
              <AiOutlineDown className="text-[10px] font-bold" />
            </div>
          </div>
        </section>
      </div> }
    </>
  );
};

export default Navbar;
