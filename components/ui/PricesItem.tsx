import Image from "next/image";
import Button from "./Button";

interface Props {
  icon: string;
  name: string;
  perHour: string;
  included: string;
  description: string;
  montly: string;
  button: string;
}

export default function PricesItem({
  icon,
  name,
  perHour,
  included,
  description,
  montly,
  button,
}: Props) {
  return (
    <div className="flex flex-col items-center md:block text-center md:text-left shadow-subtle max-w-[310px] md:max-w-[294px] pt-[36px] pb-[20px] md:py-[36px] px-[24px] bg-white rounded-[20px]">
      <Image
        className="mb-[12px] md:mb-[36px]"
        src={icon}
        width={52}
        height={52}
        alt={`Icon of ${name}`}
      />
      <div className="space-y-[12px] md:space-y-[18px] mb-[10px] md:mb-[24px]">
        <h3 className="!text-[32px] !leading-[38px] ">{name}</h3>
        <div className="flex gap-[10px]">
          <h2 className="!text-[42px] md:!text-[52px] !leading-[100%] !font-[700] text-black">
            ${perHour}
          </h2>
          <p className="!text-[16px]">/GB</p>
        </div>
        <p className="!font-bold text-[#0040C0]">{included} GB Included</p>
      </div>
      <div className="space-y-[10px] md:space-y-[22px] h-[50%] flex flex-col justify-between">
        <div className="space-y-[10px] md:space-y-[20px]">
          <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
          <p className="!text-[#667085]">{description}</p>
        </div>
        <div className="flex flex-col gap-[10px] md:gap-[22px]">
          <div className="flex gap-[6px] items-end justify-center md:justify-start">
            <h4 className="!font-medium !text-black">${montly}</h4>
            <p className="text-[#667085] !text-[16px]"> billed monthly</p>
          </div>
          <Button
            color={button === "blue" ? "blue" : "gradient"}
            link="/"
            text="BUY NOW"
            size={""}
          />
        </div>
      </div>
    </div>
  );
}
