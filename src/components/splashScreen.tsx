'use client '
import Image from "next/image"
import { useEffect, useState } from "react";
import Logo from "../../public/Logo.svg";
import Elipse from "../../public/Ellipse 1006.svg";
import Elipseg from "../../public/Ellipse 1005.svg";

export default function SplashScreen(){
    const [isActive, setIsActive]= useState<boolean>(false);

  useEffect(()=>{
    const timer= setTimeout(()=>{
          setIsActive(true)
     },3000)

     return()=> {
      clearTimeout(timer)
     }

  }, [])
    return(
        <div>

<Image
        className={`${isActive ?"translate-x-0": "translate-x-[-250px]"} w-52 h-52 absolute top-[-50px] left-[-25px] transform transition-transform duration-300 `}
        
        src={Elipseg}
        alt="design first page of maya food"
      />
      
      <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/">
        <Image alt="logo from maya food order application" src={Logo} />
      </div>

      <Image
      className={`${isActive ?"translate-x-0 ": "  translate-x-[-650px]"} w-64 h-64 absolute  bottom-0 right-0 transform transition-transform duration-300 `}
        src={Elipse}
        alt="desige first page of mayafood app"
      />
        </div>
    )
}