type BtnType = {
  label: string;
  className ?: string;
  onClick ?: () => void;
};

export default function Button(props: BtnType) {
  const { label, className = "", onClick } = props;

  return (
    <button className={`${className} bg-amber-100 p-5`} onClick={onClick}>
      {label}
    </button>
  );
}
