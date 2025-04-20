type BtnType = {
  label: any;
  className ?: string;
  onClick ?: () => void;
};


export default function Button(pro: BtnType) {
  const { label, className = "", onClick ,  ...props } = pro;

  return (
    <button className={`${className}"text-white  w-[327px] py-5 rounded-2xl " `}  onClick={onClick} {...props}>
      {label}
    </button>
  );
}
