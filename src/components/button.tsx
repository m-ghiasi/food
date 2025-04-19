type BtnType = {
  label: string;
  className ?: string;
  onClick ?: () => void;
};

export default function Button(props: BtnType) {
  const { label, className = "", onClick } = props;

  return (
    <button className={`${className} `} onClick={onClick}>
      {label}
    </button>
  );
}
