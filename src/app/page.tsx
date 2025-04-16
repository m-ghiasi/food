import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Elipse from "../../public/Ellipse 1006.svg";
import Elipseg from "../../public/Ellipse 1005.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [isActive, setIsActive]= useState<boolean>(false);

  useEffect(()=>{
    const timer= setTimeout(()=>{
          setIsActive(true)
     },300)

     return()=> {
      clearTimeout(timer)
     }

  }, [])

  return (
    <div className="relative bg-gray-200 w-full min-h-screen rounded-2xl  max-w-[390px]">
      <Image
        className={`${isActive ? "translate-x-0": "translate-x-[200px]"} w-52 h-52 absolutet top-0 left-0 transform transition-transform duration-200 `}
        
        src={Elipseg}
        alt="design first page of maya food"
      />
      
      <div className="flex justify-center items-center ">
        <Image alt="logo from maya food order application" src={Logo} />
      </div>

      <Image
        className=" w-64 h-64 absolute  bottom-0 right-0"
        src={Elipse}
        alt="desige first page of mayafood app"
      />

      
    </div>
  );
}
