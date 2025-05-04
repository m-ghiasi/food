import Input from "../Input";
import Button from "../Button";
import Wrapper from "../Wrapper";
import { useRouter } from "next/navigation";


export default function SignUp() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
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

        <Button
          type="submit"
          onClick={handleLogin}
          label={"SIGN UP"}
          className=" text-white font-bold bg-[#FF7622] w-[327px]"
        />
      </form>
    </Wrapper>
  );
}
