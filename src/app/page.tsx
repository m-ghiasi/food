
"use client"
import SplashScreen from "@/components/SplashScreen";

import { useEffect, useState } from "react";


export default function AppEntry() {


  const [step , setStep]= useState<"splash" | "onBoarding " | "login">("splash")


  useEffect(()=> {
    const hasScreenOnBoarding = localStorage.getItem("hasScreenOnBoarding");

    
    
  },[])
  

  return (
    <div className="relative bg-gray-200 w-full min-h-screen rounded-2xl  max-w-[390px]">

  

      
    </div>
  );
}
