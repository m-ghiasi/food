import Input from "../Input";
import Button from "../Button";
import Wrapper from "../Wrapper";
import { useRouter } from "next/navigation";
import EmailInput from "../EmailInput";
import { useState } from "react";
import { useAuthStore } from "@/store";

export default function SignUp() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/home-page");
  };
  const { email, setEmail, password, setPassword } = useAuthStore();
  const [name, setName] = useState("");

  const [emailValid, setEmailValid] = useState<boolean>(false);

  const [rePassword, setRePassword] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailValid) {
      alert("invalid email");
      return;
    }
    if (!email || !password || !rePassword || !name) {
      alert("full all fields");
      return;
    }
    if (password !== rePassword) {
      setErrorPass("passwords are not same ");
      return;
    } else {
      setErrorPass("");
    }

    handleLogin();
  };
  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <Input
          id="name"
          lable="NAME"
          type="text"
          placeholder="maya"
          wrapperClassName="flex-col "
          inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
          lableClassName="mb-2"
          onChange={(e) => setName(e.target.value)}
        />
        <EmailInput
          inputClassName="w-80 h-16 placeholder:text-[#A0A5BA]"
          required
          id={email}
          label="Email"
          lableClassName="mb-2"
          wrapperClassName="flex-col"
          onValidChange={(email, isValid) => {
            setEmail(email);
            setEmailValid(isValid);
          }}
        />
        <Input
          id="password"
          lable="PASSWORD"
          type="password"
          wrapperClassName=" flex-col"
          inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
          lableClassName="mb-2"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          id="repassword"
          lable="RE-TRY-PASSWORD"
          type="password"
          wrapperClassName=" flex-col"
          inputClassName="w-80 h-16 placeholder:text-[#A0A5BA] "
          lableClassName="mb-2"
          onChange={(e) => setRePassword(e.target.value)}
          required
        />
        {errorPass ? <p className="text-red-500 text-sm">{errorPass}</p> : null}

        <Button
          type="submit"
          label={"SIGN UP"}
          className=" text-white font-bold bg-[#FF7622] w-[327px]"
        />
      </form>
    </Wrapper>
  );
}
