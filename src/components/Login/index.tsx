"use client";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import Wrapper from "../Wrapper";
import EmailInput from "../../components/EmailInput";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuthStore } from "../../store";


type LoginProps = {
  setLoginStep: React.Dispatch<
    React.SetStateAction<"login" | "forgetPass" | "signUp" | "verification">
  >;
};
export default function Login({ setLoginStep }: LoginProps) {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home-page");
  };

  const [emailValid, setEmailValid] = useState<boolean>(false);

  const [rememberPass, setRememberPass] = useState<boolean>(false);
  const [isLoading, setIsLoading]= useState<boolean>(true)

  const { email, setEmail, password, setPassword } = useAuthStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailValid) {
      alert("invalid email");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("isLoginEd", "true");
    if (rememberPass) {
      localStorage.setItem("password", password);
    }

    handleLogin();
  };
  useEffect(() => {
    const isLoginEd = localStorage.getItem("isLoginEd");

    if (isLoginEd === "true") {
      router.push("/home-page");
    }else{
      setIsLoading(false)
    }
  }, []);
  const localStoragePass: string | null = localStorage.getItem("password");
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setRememberPass(isChecked);

    if (isChecked && localStoragePass) {
      setPassword(localStoragePass);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center  h-screen">
        <p className="text-2xl font-bold text-white">Loading...</p>
      </div>
    );
  }

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center"
      >
        <EmailInput
          inputClassName="w-80 h-16 placeholder:text-[#A0A5BA]"
          id={email}
          label="Email"
          lableClassName="mb-2"
          wrapperClassName="flex-col"
          onValidChange={(email, isValid) => {
            setEmail(email);
            setEmailValid(isValid);
          }}
        />
        <Input
          id="password"
          lable="PASSWORD"
          placeholder="your password"
          type="password"
          wrapperClassName=" flex-col"
          inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
          lableClassName="mb-2"
        />
        <div className="flex w-full justify-evenly items-center ">
          <Input
            id="check"
            lable="Remember me"
            type="checkbox"
            wrapperClassName="flex gap-3 flex-row "
            inputClassName="w-5 h-5 order-1 border border-[#E3EBF2] border-3 "
            lableClassName="order-2 text-[#646982]"
            onChange={handleCheck}
          />
          <Button
            type="button"
            label={"FORGET PASSWORD"}
            className="text-[#FF7622] text-[14px]  cursor-pointer "
            onClick={() => {
              setLoginStep("forgetPass");
            }}
          ></Button>
        </div>
        <Button
          type="submit"
          label={"LOG IN"}
          className=" text-white font-bold bg-[#FF7622] w-[327px]"
          onClick={handleLogin}
        />
        <div className=" flex flex-row gap-3 justify-between items-center">
          <p className=" text-[#646982]">Don’t have an account?</p>
          <Button
            type="button"
            onClick={() => {
              setLoginStep("signUp");
            }}
            label={"SIGN UP"}
            className="text-[#FF7622] font-bold  cursor-pointer "
          ></Button>
        </div>
      </form>
    </Wrapper>
  );
}
