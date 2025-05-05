"use client";

import SplashScreen from "../components/SplashScreen";

import { useEffect, useState } from "react";
import OnBoarding from "../components/Onbarding";
import { useRouter } from "next/navigation";

export default function AppEntry() {
  const router = useRouter();

  const [step, setStep] = useState<"splash" | "onBoarding" | "login">("splash");

  useEffect(() => {
    const hasScreenOnBoarding = localStorage.getItem("hasScreenOnBoarding");
    const splashTimer = setTimeout(() => {
      if (!hasScreenOnBoarding) {
        setStep("onBoarding");
      } else {
        setStep("login");
      }
    }, 5000);

    return () => clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    if(step === "login") {
      router.push("/sign-in")
    }
  },[step, router])

  if (step === "splash") return <SplashScreen />;
  if (step === "onBoarding") return <OnBoarding />;
  
  return null;
}
