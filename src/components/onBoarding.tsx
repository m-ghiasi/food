type contentType ={
    title:string;
    text:string
}

import { useState } from "react";
import Button from "./button";
import clsx from "clsx";


export default function OnBoarding() {
  const [stepOnBd, setStepOnB] = useState<number>(1);

  const content:contentType[]  = [
    {
      title: "All your favorites",
      text: "Get all your loved foods in one place. You just place the order, we do the rest.",
    },
    {
      title: "Fast delivery offer",
      text: "Your order will be delivered to your doorstep in no time.",
    },
    {
      title: "Easy payment",
      text: "Multiple payment options including cards, wallets, and more.",
    },
    {
      title: "Let’s get started!",
      text: "Login or sign up to start your food journey.",
    },
  ];


  const stepLeanth = [1, 2, 3, 4];

  const handleStep = () => {
    if (stepOnBd < 4) {
      setStepOnB(stepOnBd + 1);
    }
    // else  برای صفحه لاگین یا لوکیشن نئشته بشه
   
    
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center p-5">
      {/* content */}
      <div className="bg-gray-400 rounded-2xl w-60 h-72 p-5 text-4xl text-amber-500">{stepOnBd}</div>

      {/* discriptions */}
      <div className="mt-8 flex flex-col items-center">
        <h1 className="text-2xl font-[800]">{content[stepOnBd - 1].title}</h1>
        <p className="text-gray-600 pt-4 text-center ">
          {content[stepOnBd-1].text}
        </p>
      </div>

      {/* steps */}
      <div className="flex m-5 gap-3">
        {stepLeanth.map((st) => (
          <div
            key={st}
            className={clsx("w-[10px] h-[10px] rounded-full bg-[#FFE1CE]", {
              " bg-[#FF7622]": st === stepOnBd,
            })}
          ></div>
        ))}
      </div>

      {/* buttons */}
      <div className="flex flex-col gap-4 mt-14">
        <Button
          onClick={handleStep}
          label="NEXT"
          className={clsx(
            "text-white bg-[#FF7622] w-[327px] py-5 rounded-2xl "
          )}
        />
        <Button label="Skip" className={clsx("text-gray-600 bg-white")} />
      </div>
    </div>
  );
}
