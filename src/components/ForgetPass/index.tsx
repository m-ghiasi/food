import Button from "../Button";
import Input from "../Input";
import Wrapper from "../Wrapper";
type LoginProps = {
  setLoginStep: React.Dispatch<
    React.SetStateAction<"login" | "forgetPass" | "signUp" | "verification">
  >;
};

export default function ForgetPass({ setLoginStep }: LoginProps) {
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
        requierd
      />

      <Button
        label={"SEND CODE"}
        className=" text-white font-bold bg-[#FF7622] w-[327px]"
        onClick={() => {
          setLoginStep("verification");
        }}
      />
    </Wrapper>
  );
}
