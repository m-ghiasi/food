type inputType = {
  id: string;
  type: string;
  lable: string;
  wrapperClassName?: string;
  inputClassName?: string;
  lableClassName?: string;
  placeholder?: string;
//   labelPosition
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
  } = pro;
  return (
    <div className={`${wrapperClassName} flex `}>
      <label className={`${lableClassName} text-[13px]`} htmlFor={id}>
        {lable}
      </label>
      <input
        className={`${inputClassName}  rounded-2xl bg-[#F0F5FA] px-5 `}
        placeholder={placeholder}
        id={id}
        type={type}
      />
    </div>
  );
}
