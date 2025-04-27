import Button from "@/components/button";
import Input from "@/components/input";
import Login from "@/components/login";

export default function Page() {
  return (
    <div className="flex flex-col justify-center w-96 h-screen border-4  bg-[#121223] ">
      <div className="w-full h-full flex flex-col items-center">
        <h2 className="text-white">Log In</h2>
        <p className="text-white">Please sign in to your existing account</p>
      </div>

      <div className="  rounded-2xl">
        <Login />
      </div>
    </div>
  );
}
