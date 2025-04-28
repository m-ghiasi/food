import Input from "./input";
import Button from "./button";
import Wrapper from "./wrapper";

export default function SignUp() {
  return (
    <Wrapper>
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
      
      <Button label={"SIGN UP"} className=" text-white font-bold bg-[#FF7622] w-[327px]" />
      
    </Wrapper>
  );
}
