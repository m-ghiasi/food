import Image from "next/image";
import Logo from "../../public/Logo.svg"
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
     
  }, [])


  return (
    <div className="bg-gray-200 w-full min-h-screen rounded-2xl flex justify-center items-center ">
      <Image alt="logo from maya food order application" src={Logo} />
    </div>
  );
}
