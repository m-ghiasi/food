
"use client"
import Login from "./components/login";
import SplashScreen from "./components/splashScreen";

import { useEffect, useState } from "react";
import OnBoarding from "@/app/onbording/page";


export default function AppEntry() {


  const [step , setStep]= useState<"splash" | "onBoarding" | "login">("splash")


  useEffect(()=> {
    const hasScreenOnBoarding = localStorage.getItem("hasScreenOnBoarding");
    const splashTimer = setTimeout(()=>{
      if(!hasScreenOnBoarding) {
        setStep("onBoarding")
      } else {
        setStep("login")
      }
    },5000)

    return()=> clearTimeout(splashTimer)

    
    
  },[])

  if (step === "splash") return <SplashScreen/>
  if(step === "onBoarding") return <OnBoarding
  // goNext= {() => {
  //   localStorage.setItem("hasScreenOnBoarding", "true");
  //   setStep("login")
  // }}
  
  />
  


  return (
    <div className="relative bg-gray-200 w-full min-h-screen rounded-2xl  max-w-[390px]">
      <Login label="login"/>

  

      
    </div>
  );
}
