type EmailInputType = {
  onValidChange?: (email: string, isValid: boolean) => void;

  label: string;
  id: string;
  lableClassName: string;
  wrapperClassName: string;
  inputClassName: string;
  required?: boolean;

};
import { useAuthStore } from "@/store";
import { ChangeEvent, useState } from "react";

export default function EmailInput(prop: EmailInputType) {
  const {
    onValidChange,
    label,
    id,
    lableClassName,
    wrapperClassName,
    inputClassName,
    required
  } = prop;
  
  const [error, setError] = useState<string>("");
const {email , setEmail}= useAuthStore()
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setEmail(value);

    const isValid = validateEmail(value);
    setError(isValid ? "" : "invalid email");
    onValidChange?.(value, isValid); //«اگر تابع onValidChange تعریف شده بود، اون رو با value و isValid اجرا کن.»//
    //   if(onValidChange){
    //     onValidChange(value,isValid)
    //   }
  };

  return (
    <div className={`${wrapperClassName} relative flex `}>
      <label className={`${lableClassName} text-[13px]`} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`${inputClassName}flex items-center pr-12  rounded-2xl bg-[#F0F5FA] px-5 w-80 h-16 placeholder:text-[#A0A5BA]`}
        required
        type="email"
        onChange={handleChange}
        placeholder="maya@gmail.com"
        value={email}
        
        
        
      />
      {error && <p className="text-red-500 text-sm my-2">{error}</p>}
    </div>
  );
}
