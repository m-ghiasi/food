
import Button from "../Button";
import Input from "../Input";
import Wrapper from "../Wrapper";
import { useState } from "react";
type LoginProps = {
  setLoginStep: React.Dispatch<
    React.SetStateAction<"login" | "forgetPass" | "signUp" | "verification">
  >;
};

export default function ForgetPass({ setLoginStep }: LoginProps) {
  
  const [enterEmail, setEnterEmail]= useState("")
  const handleClick = () => {
    if (!enterEmail) {
      alert("fill out email");
      return;
    }
    const localEmail = localStorage.getItem("email")
    if(enterEmail === localEmail|| localEmail === null){

      // second if is just  to test 
       setLoginStep("verification");
    }else{
      alert("email is not correct")
    }
   
  };
  return (
    <Wrapper>
      <Input
        id="email"
        lable="EMAIL"
        type="text"
        placeholder="example@gmail.com"
        wrapperClassName="flex-col "
        inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
        lableClassName="mb-2"
        onChange={(e) => setEnterEmail(e.target.value)}
      />

      <Button
        label={"SEND CODE"}
        className=" text-white font-bold bg-[#FF7622] w-[327px]"
        onClick={handleClick}
      />
    </Wrapper>
  );
}
