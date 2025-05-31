"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Input from "../Input";
import Wrapper from "../Wrapper";

export default function Verification() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // فقط عدد تک‌رقمی
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleVerify = () => {
    const fullCode = code.join("");
    if (fullCode.length === 4) {
      router.push("/home-page");
    } else {
      alert("Please enter the full code");
    }
  };

  return (
    <Wrapper>
      <div className="w-full flex justify-between items-center">
        <span>CODE</span>
        <div className="flex items-center">
          <Button className="text-black underline font-bold" label={"Resend"} />
          <span>in.50sec</span>
        </div>
      </div>
      <div className="flex w-full justify-evenly my-4">
        {code.map((digit, idx) => (
          <Input
            key={idx}
            type="text"
            value={digit}
            onChange={(e) => handleChange(idx, e.target.value)}
            inputClassName="w-[62px] h-[62px] text-center text-xl"
          />
        ))}
      </div>
      <Button
        className="text-white font-bold bg-[#FF7622] w-[327px]"
        label={"VERIFY"}
        onClick={handleVerify}
      />
    </Wrapper>
  );
}