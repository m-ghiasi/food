import Button from "./button";
import Input from "./input";

export default function Veriifiction() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <span>CODE</span>
        <div className="flex">
          <Button className="text-black underline font-bold" label={"Resend"} />{" "}
          <span>in.50sec</span>
        </div>
      </div>
      <div className="flex justify-evenly">
        <Input type="number" inputClassName="w-[62px] h-[62px]"/>
        <Input type="number" inputClassName="w-[62px] h-[62px]"/>
        <Input type="number" inputClassName="w-[62px] h-[62px]"/>
        <Input type="number" inputClassName="w-[62px] h-[62px]"/>
      </div>
    </div>
  );
}
