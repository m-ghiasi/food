import { ReactNode } from "react";

type WrapperProp = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProp) {
  return (
    <div className=" bg-white rounded-4xl px-5 py-7 items-center flex flex-col gap-6 h-[580px]">
      {children}
    </div>
  );
}
