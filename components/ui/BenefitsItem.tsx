import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
}

export default function BenefitsItem({ img, title, description }: Props) {
  return (
    <div className="shadow-subtle text-black max-w-[290px] min-w-[290px] md:min-w-auto md:max-w-[500px] h-full p-[20px] lg:py-[30px] lg:px-[24px] bg-white rounded-[20px] space-y-[44px]">
      <div className="bg-secondary rounded-full flex justify-center items-center w-[82px] h-[82px]">
        <Image src={img} alt={`Icon of ${title}`} width={52} height={52} />
      </div>
      <div className="space-y-[24px] ">
        <h3 className="!font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
