import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
type inputType = {
  id?: string;
  type: string;
  lable?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  lableClassName?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?:string;
  required ?:boolean
  
};
export default function Input(pro: inputType) {
  const {
    type,
    id,
    lable,
    wrapperClassName,
    inputClassName,
    placeholder,
    lableClassName,
    onChange,
    value,
    required
  } = pro;

  const [showPass, setShowPass] = useState<boolean>(false);
  const isPassword = type === "password";
  return (
    <div className={`${wrapperClassName} relative flex `}>
      <label className={`${lableClassName} text-[13px]`} htmlFor={id}>
        {lable}
      </label>
      <input
        className={`${inputClassName}  rounded-2xl bg-[#F0F5FA] px-5 `}
        placeholder={placeholder}
        id={id}
        type={isPassword && showPass ? "text" : type}
        
        onChange={onChange}
        value={value}
        required={required}
      />

      {isPassword && (
        <span
          className="absolute  right-4 top-12 cursor-pointer text-gray-500"
          onClick={() => setShowPass((prev) => !prev)}
        >
          {showPass ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </span>
      )}
    </div>
  );
}
