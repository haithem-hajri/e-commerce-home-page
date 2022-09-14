import React from "react";
import { TbApple, TbToolsKitchen2, TbShirt } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";
import { BsPhone, BsLaptop, BsHouseDoor, BsTree } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { GrGamepad } from "react-icons/gr";
import {
  MdSportsSoccer,
  MdOutlineOtherHouses,
  MdSettingsInputSvideo,
} from "react-icons/md";
import { FaAppStore } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex items-center">
      <div
        className=" w-[214px] 
      flex flex-col gap-2 bg-white rounded py-[2px] h-[384px] "
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center gap-2 p-1 cursor-pointer hover:text-orange-500 text-black"
          >
            {category.icon}
            <p className="text-xs">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="relative h-[384px] w-[712px] mx-[16px] hidden sm:flex ">
        <Image
          src={
            "https://tn.jumia.is/cms/0000_Refresh2022/Septembre/W37/UND/Kitchen/TN_W37_cuisine_Slider.jpg"
          }
          alt="im"
          layout="fill"
          className="rounded"
        />
      </div>
      <div className="flex flex-col gap-2 h-[384px] ">
        <div
          className="bg-white p-1 card-shadow h-[50%]
         px-[16px] flex flex-col justify-around items-start rounded gap-2"
        >
          {helps.map((help) => (
            <div
              key={help.name}
              className="flex justify-center items-center gap-2"
            >
              <span>{help.icon}</span>
              <div className="flex flex-col justify-center">
                <h5 className="text-md leading-4 font-semibold whitespace-nowrap cursor-pointer">
                  {help.name}
                </h5>
                <p className="text-xs text-[#282828] whitespace-nowrap ">
                  {help.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[50%] bg-orange-400 relative ">
          <Image
            src="https://tn.jumia.is/cms/0000_Refresh2022/Septembre/W37/GEN/TN_Beauty_Brandfest_Smallbanner.gif"
            alt="gfdd"
            layout="fill"
            width={218}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const categories = [
  {
    icon: <TbApple />,
    name: "Superette",
  },
  {
    icon: <RiMentalHealthLine />,
    name: "Santé & Beauté",
  },
  {
    icon: <BsPhone />,
    name: "Téléphone & Tablette",
  },
  {
    icon: <TbToolsKitchen2 />,
    name: "Cuisine & Électroménager",
  },
  {
    icon: <TbShirt />,
    name: "Mode",
  },
  {
    icon: <BsLaptop />,
    name: "Informatique",
  },
  {
    icon: <AiOutlineCamera />,
    name: "Électroniques",
  },
  {
    icon: <BsHouseDoor />,
    name: "Maison & Bureau",
  },
  {
    icon: <GrGamepad />,
    name: "Jeux vidéos & Consoles",
  },
  {
    icon: <MdSportsSoccer />,
    name: "Articles de sport",
  },
  {
    icon: <BsTree />,
    name: "Jardin & Plein air",
  },
  {
    icon: <MdOutlineOtherHouses />,
    name: "Autres catégories",
  },
];

const helps = [
  {
    icon: <FiHelpCircle className="w-[35px] h-[35px] text-orange-400" />,
    name: "Centre d'assistance",
    text: "Service clientèle Jumia",
  },
  {
    icon: (
      <MdSettingsInputSvideo className="w-[35px] h-[35px] text-orange-400" />
    ),
    name: "Services Entreprises",
    text: "Pour tous vos besoins",
  },
  {
    icon: <FaAppStore className="w-[35px] h-[35px] text-orange-400" />,
    name: "JUMIA HOUNI",
    text: "dans vos stations .. ",
  },
];
