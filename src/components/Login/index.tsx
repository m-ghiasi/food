import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import Wrapper from "../Wrapper";

type LoginProps = {
  setLoginStep: React.Dispatch<
    React.SetStateAction<"login" | "forgetPass" | "signUp" | "verification">
  >;
};
export default function Login({ setLoginStep }: LoginProps) {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/homePage");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center"
      >
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
          placeholder="your password"
          type="password"
          wrapperClassName=" flex-col"
          inputClassName={`w-80 h-16 placeholder:text-[#A0A5BA] `}
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
          />
          <Button
            type="button"
            label={"FORGET PASSWORD"}
            className="text-[#FF7622] text-[14px] "
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
            className="text-[#FF7622] font-bold "
          ></Button>
        </div>
      </form>
    </Wrapper>
  );
}
