import { useRouter } from "next/navigation";
import Button from "../Button";
import Input from "../Input";
import Wrapper from "../Wrapper";

export default function Veriifiction() {
  const router = useRouter();
  const handelVeriify = () => {
    router.push("/homePage");
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
      <div className="flex w-full justify-evenly">
        <Input
          type="number"
          inputClassName="w-[62px] h-[62px] appearance-none"
        />
        <Input
          type="number"
          inputClassName="w-[62px] h-[62px] appearance-none"
        />
        <Input
          type="number"
          inputClassName="w-[62px] h-[62px] appearance-none"
        />
        <Input
          type="number"
          inputClassName="w-[62px] h-[62px] appearance-none"
        />
      </div>
      <Button
        className=" text-white font-bold bg-[#FF7622] w-[327px]"
        label={"VERIFY"}
        onClick={handelVeriify}
      ></Button>
    </Wrapper>
  );
}
