import Button from "@/components/button";
import Input from "@/components/input";
import Login from "@/components/login";
import Image from "next/image";
import BackImage from "../../../public/Vector 142.svg";
import Eli from "../../../public/Ellipse 100.svg";

export default function Page() {
  return (
    <div className="flex flex-col  w-96 h-screen rounded-4xl  bg-[#121223] ">
      <div className="relative ">
        <Image  className=" w-40 h-40 absolute top-0 left-0 " src={Eli} alt=""></Image>
        <Image className="w-52 h-52 absolute top-0 right-0 " src={BackImage} alt=""></Image>
      </div>
      <div className=" flex flex-col items-center mt-45 mb-12">
        <h2 className="text-white font-bold text-3xl">Log In</h2>
        <p className="text-white text-[16px]">Please sign in to your existing account</p>
      </div>

      <div className="h-full  rounded-2xl">
        <Login />
      </div>
    </div>
  );
}
