import {  ReactNode } from "react";

type BtnType = {
  label?: string | number | ReactNode;
  className ?: string;
  onClick ?: () => void;
  children?: ReactNode;
  type?:"button" | "submit" | "reset"
};


export default function Button(pro: BtnType) {
  const { type,children,label, className = "", onClick ,  ...props } = pro;

  return (
    <button className={`${className}  py-5 rounded-2xl  `} type={type} onClick={onClick} {...props}>
      {label}
      {children}
    </button>
  );
}
