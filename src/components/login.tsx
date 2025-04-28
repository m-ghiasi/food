import Input from "./input";
import Button from "./button";

export default function Login() {
  return (
    <div className=" bg-white rounded-4xl py-10 items-center flex flex-col gap-6 h-[580px]">
      <Input
        id="email"
        lable="EMAIL"
        type="text"
        placeholder="example@gmail.com"
        wrapperClassName="flex-col "
        inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
        lableClassName="mb-2"
      />
      <Input
        id="password"
        lable="PASSWORD"
        type="password"
        wrapperClassName=" flex-col"
        inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
        lableClassName="mb-2"
      />
      <div className="flex w-full justify-evenly ">
        <Input
          id="check"
          lable="Remember me"
          type="checkbox"
          wrapperClassName="flex gap-3 flex-row "
          inputClassName="w-5 h-5 order-1 border border-[#E3EBF2] border-3 "
          lableClassName="order-2 text-[#646982]"
        />
        <span className="text-[#FF7622] text-[14px]">FORGET PASSWORD</span>
      </div>
      <Button label={"LOG IN"} className=" text-white font-bold bg-[#FF7622]" />
      <p className="text-center flex flex-row gap-3 text-[#646982]">
        Don’t have an account?<span className="text-[#FF7622] font-bold">SIGN UP</span>
      </p>
    </div>
  );
}
