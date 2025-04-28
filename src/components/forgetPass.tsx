import Button from "./button";
import Input from "./input";

export default function ForgetPass(){
    return(
        <div>
           <Input
                   id="email"
                   lable="EMAIL"
                   type="text"
                   placeholder="example@gmail.com"
                   wrapperClassName="flex-col "
                   inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
                   lableClassName="mb-2"
                 />
                 
                 <Button label={"SEND CODE"} className=" text-white font-bold bg-[#FF7622]" />
        </div>
    )
}