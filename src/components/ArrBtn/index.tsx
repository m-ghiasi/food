import { FaAngleLeft } from "react-icons/fa6";
type prop = {
  className: string;
  onClick: () => void;
};
export default function BackItem({ className, onClick }: prop) {
  return (
    <div
      onClick={onClick}
      className={`${className}w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center`}
    >
      <FaAngleLeft />
    </div>
  );
}
