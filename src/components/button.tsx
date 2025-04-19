type BtnType = {
  label: any;
  className ?: string;
  onClick ?: () => void;
};

export default function Button(props: BtnType) {
  const { label, className = "", onClick } = props;

  return (
    <button className={`${className}"text-white bg-[#FF7622] w-[327px] py-5 rounded-2xl " `} onClick={onClick}>
      {label}
    </button>
  );
}
