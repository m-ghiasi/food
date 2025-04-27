import Input from "./input";
import Button from "./button";

export default function Login() {
  return (
    <div className=" bg-white rounded-2xl p-5 gap-2">
      <Input
        id="email"
        lable="EMAIL"
        type="text"
        placeholder="example@gmail.com"
        wrapperClassName="flex-col "
        inputClassName="w-80 h-16"
      />
      <Input
        id="password"
        lable="PASSWORD"
        type="password"
        wrapperClassName=" flex-col"
        inputClassName="w-80 h-16"
      />
      <div className="">
        <Input
          id="password"
          lable="Remember me"
          type="checkbox"
          wrapperClassName="flex flex-row"
          inputClassName="w-5 h-5 order-1"
          lableClassName="order-2"
        />
        {/* <span>FORGET PASSWORD</span> */}
      </div>
      <Button label={"LOGIN"} />
      <p>
        Don’t have an account?<span>Sign Up</span>
      </p>
    </div>
  );
}
