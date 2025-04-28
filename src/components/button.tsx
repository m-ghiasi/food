import { ReactElement, ReactNode } from "react";

type BtnType = {
  label ?: any;
  className ?: string;
  onClick ?: () => void;
  children?: ReactNode;
};


export default function Button(pro: BtnType) {
  const { children,label, className = "", onClick ,  ...props } = pro;

  return (
    <button className={`${className}  py-5 rounded-2xl  `}  onClick={onClick} {...props}>
      {label}
      {children}
    </button>
  );
}
