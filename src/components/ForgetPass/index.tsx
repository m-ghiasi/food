import { useAuthStore } from "@/store";
import Button from "../Button";
import Input from "../Input";
import Wrapper from "../Wrapper";
type LoginProps = {
  setLoginStep: React.Dispatch<
    React.SetStateAction<"login" | "forgetPass" | "signUp" | "verification">
  >;
};

export default function ForgetPass({ setLoginStep }: LoginProps) {
  const { email, setEmail } = useAuthStore();
  const handleClick = () => {
    if (!email) {
      alert("fill out email");
      return;
    }
    setLoginStep("verification");
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
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        label={"SEND CODE"}
        className=" text-white font-bold bg-[#FF7622] w-[327px]"
        onClick={handleClick}
      />
    </Wrapper>
  );
}
