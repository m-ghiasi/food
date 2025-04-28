import Input from "./input";
import Button from "./button";

export default function SignUp() {
  return (
    <div className=" bg-white rounded-4xl py-10 items-center flex flex-col gap-6 h-[580px]">
      <Input
        id="name"
        lable="NAME"
        type="text"
        placeholder="maya"
        wrapperClassName="flex-col "
        inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
        lableClassName="mb-2"
      />
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
      <Input
        id="repassword"
        lable="RE-TRY-PASSWORD"
        type="password"
        wrapperClassName=" flex-col"
        inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
        lableClassName="mb-2"
      />
      
      <Button label={"SIGN UP"} className=" text-white font-bold bg-[#FF7622]" />
      
    </div>
  );
}
