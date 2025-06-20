import Link from "next/link";

interface Props {
  text: string;
  color: "gradient" | "blue" | "white";
  link: string;
  size?: boolean | string;
  onClick?: () => void;
}

export default function Button({
  text,
  color,
  link,
  size = false,
  onClick,
}: Props) {
  const widthClass =
    size === true ? "w-[280px]" : size === false ? "w-[180px]" : "w-full";

  const bgClass =
    color === "gradient"
      ? "bg-[linear-gradient(90deg,_#00C5FF_0%,_#153BFF_54%,_#CAB7FC_98%)]"
      : color === "blue"
      ? "bg-blue"
      : "bg-white";

  const hoverClass =
    color === "gradient"
      ? "hover:shadow-[0_4px_25px_rgba(21,59,255,0.4)]"
      : color === "blue"
      ? "hover:shadow-[0_4px_25px_rgba(21,59,255,0.4)]"
      : "hover:shadow-[0_4px_25px_rgba(21,59,255,0.4)]";

  const textClass =
    color === "white"
      ? "bg-[linear-gradient(90deg,_#00C5FF_0%,_#153BFF_54%,_#CAB7FC_98%)] bg-clip-text text-transparent"
      : "text-white";

  return (
    <Link href={link}>
      <div
        className={`py-[18px] ${widthClass} ${bgClass} ${hoverClass} flex justify-center items-center rounded-[20px] cursor-pointer transition-shadow duration-300 ease-in-out`}
        onClick={onClick}
      >
        <p className={`${textClass} !text-[20px] !leading-[16px] !font-bold`}>
          {text}
        </p>
      </div>
    </Link>
  );
}
